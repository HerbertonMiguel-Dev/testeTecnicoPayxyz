import { useEffect, useState } from 'react';
import styled from 'styled-components';

type Evento = {
  id: string;
  nome: string;
  data: string;
};

type Participante = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
};

type Estatisticas = {
  totalCheckins: number;
  totalCheckouts: number;
  totalPendentes: number;
  totalParticipantes: number;
};

const Container = styled.div`
  padding: 16px;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;

  @media (min-width: 640px) {
    font-size: 1.5rem;
  }
`;

const EventsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const EventoButton = styled.button`
  background-color: #1d4ed8;
  color: white;
  font-weight: 600;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    border: 2px solid #2563eb;
  }
`;

const EstatisticaButton = styled.button`
  margin-top: 20px;
  background-color: #6b21a8;
  color: white;
  font-weight: 600;
  padding: 10px;
  border-radius: 6px;
  font-size: 1rem;
  width: 100%;

  &:hover {
    background-color: #7e22ce;
  }

  @media (min-width: 640px) {
    width: auto;
  }
`;

const EstatisticasBox = styled.div`
  margin-top: 15px;
  background-color: #f1f5f9;
  padding: 12px;
  border-radius: 8px;
`;

const ParticipantesList = styled.div`
  margin-top: 20px;
`;

const ParticipanteCard = styled.div`
  background-color: #f8f8f8;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 12px;

  @media (min-width: 640px) {
    margin-top: 0;
  }
`;

const Button = styled.button`
  flex: 1;
  padding: 8px 15px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:focus {
    outline: none;
  }

  & + & {
    margin-left: 8px;
  }

  &.checkin {
    background-color: #28a745;
    color: white;

    &:hover {
      background-color: #218838;
    }
  }

  &.checkout {
    background-color: #dc3545;
    color: white;

    &:hover {
      background-color: #c82333;
    }
  }
`;

export default function Eventos() {
    const [eventos, setEventos] = useState<Evento[]>([]);
    const [participantes, setParticipantes] = useState<Participante[]>([]);
    const [selectedEvento, setSelectedEvento] = useState<string | null>(null);
    const [estatisticas, setEstatisticas] = useState<Estatisticas | null>(null);
    const [statusParticipantes, setStatusParticipantes] = useState<Record<string, string>>({});
  
    useEffect(() => {
      fetch('http://localhost:3335/eventos')
        .then((res) => res.json())
        .then((data) => setEventos(data))
        .catch((err) => console.error(err));
    }, []);
  
    const handleEventoClick = (eventoId: string) => {
      setSelectedEvento(eventoId);
      setEstatisticas(null);
      fetch(`http://localhost:3335/eventos/${eventoId}/participantes`)
        .then((res) => res.json())
        .then((data) => setParticipantes(data))
        .catch((err) => console.error(err));
    };
  
    const handleCheckin = (participanteId: string, eventoId: string) => {
      fetch('http://localhost:3335/checkin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          participanteId: Number(participanteId),
          eventoId: Number(eventoId),
        }),
      })
        .then((res) => res.json())
        .then(() => {
          setStatusParticipantes((prev) => ({
            ...prev,
            [participanteId]: 'checkin',
          }));
        })
        .catch((err) => console.error('Erro ao realizar check-in', err));
    };
  
    const handleCheckout = (participanteId: string, eventoId: string) => {
      fetch('http://localhost:3335/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          participante_id: Number(participanteId),
          evento_id: Number(eventoId),
        }),
      })
        .then((res) => res.json())
        .then(() => {
          setStatusParticipantes((prev) => ({
            ...prev,
            [participanteId]: 'checkout',
          }));
        })
        .catch((err) => console.error('Erro ao realizar check-out', err));
    };
  
    const buscarEstatisticas = async () => {
      if (!selectedEvento) return;
  
      const [checkins, checkouts, participantesTotais, pendentes] = await Promise.all([
        fetch(`http://localhost:3335/eventos/${selectedEvento}/estatisticas/total-checkins`).then(res => res.json()),
        fetch(`http://localhost:3335/eventos/${selectedEvento}/estatisticas/total-checkouts`).then(res => res.json()),
        fetch(`http://localhost:3335/estatisticas/total-participantes`).then(res => res.json()),
        fetch(`http://localhost:3335/estatisticas/total-pendentes`).then(res => res.json()),
      ]);
  
      setEstatisticas({
        totalCheckins: checkins.totalCheckins,
        totalCheckouts: checkouts.totalCheckouts,
        totalParticipantes: participantesTotais.totalParticipantes,
        totalPendentes: pendentes.totalPendentes,
      });
    };
  
    return (
      <Container>
        <Title>Lista de Eventos</Title>
        <EventsGrid>
          {eventos.map((evento) => (
            <EventoButton key={evento.id} onClick={() => handleEventoClick(evento.id)}>
              {evento.nome}
            </EventoButton>
          ))}
        </EventsGrid>
  
        {selectedEvento && (
          <>
            <EstatisticaButton onClick={buscarEstatisticas}>Exibir Estatísticas</EstatisticaButton>
  
            {estatisticas && (
              <EstatisticasBox>
                <p><strong>Total de Check-ins:</strong> {estatisticas.totalCheckins}</p>
                <p><strong>Total de Check-outs:</strong> {estatisticas.totalCheckouts}</p>
                <p><strong>Total de Participantes:</strong> {estatisticas.totalParticipantes}</p>
                <p><strong>Pendentes:</strong> {estatisticas.totalPendentes}</p>
              </EstatisticasBox>
            )}
  
            {participantes.length > 0 && (
              <ParticipantesList>
                <h2>Participantes do Evento</h2>
                {participantes.map((participante) => (
                  <ParticipanteCard key={participante.id}>
                    <div>
                      <p><strong>Nome:</strong> {participante.nome}</p>
                      <p><strong>Email:</strong> {participante.email}</p>
                      <p><strong>Telefone:</strong> {participante.telefone}</p>
  
                      {/* Mensagem dinâmica */}
                      {statusParticipantes[participante.id] && (
                        <p style={{ marginTop: '8px', color: statusParticipantes[participante.id] === 'checkin' ? 'green' : 'red' }}>
                          {statusParticipantes[participante.id] === 'checkin'
                            ? '✔️ Check-in realizado'
                            : '📤 Check-out realizado'}
                        </p>
                      )}
                    </div>
  
                    <ButtonGroup>
                      <Button
                        className="checkin"
                        onClick={() => handleCheckin(participante.id, selectedEvento)}
                      >
                        Check-in
                      </Button>
                      <Button
                        className="checkout"
                        onClick={() => handleCheckout(participante.id, selectedEvento)}
                      >
                        Check-out
                      </Button>
                    </ButtonGroup>
                  </ParticipanteCard>
                ))}
              </ParticipantesList>
            )}
          </>
        )}
      </Container>
    );
  }
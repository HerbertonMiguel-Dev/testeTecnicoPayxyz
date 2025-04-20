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

import EventoButton from '../components/EventoButton';
import EstatisticaButton from '../components/EstatisticaButton';
import EstatisticasBox from '../components/EstatisticasBox';
import ParticipantesList from '../components/ParticipantesList';

const BotaoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
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
        setStatusParticipantes({}); // Limpa o status dos participantes ao selecionar um novo evento

        fetch(`http://localhost:3335/eventos/${eventoId}/participantes`)
            .then((res) => res.json())
            .then((data) => setParticipantes(data))
            .catch((err) => console.error(err));
    };

    const handleCheckin = (participanteId: string) => {
        if (!selectedEvento) return;

        fetch('http://localhost:3335/checkin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                participanteId: Number(participanteId),
                eventoId: Number(selectedEvento),
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

    const handleCheckout = (participanteId: string) => {
        if (!selectedEvento) return;

        fetch('http://localhost:3335/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                participante_id: Number(participanteId),
                evento_id: Number(selectedEvento),
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

        try {
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
        } catch (err) {
            console.error('Erro ao buscar estatísticas', err);
        }
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Lista de Eventos</h1>
            <BotaoContainer>
                {eventos.map((evento) => (
                    <EventoButton key={evento.id} onClick={() => handleEventoClick(evento.id)}>
                        {evento.nome}
                    </EventoButton>
                ))}
            </BotaoContainer>

            {selectedEvento && (
                <>
                    <EstatisticaButton onClick={buscarEstatisticas} />
                    {estatisticas && <EstatisticasBox {...estatisticas} />}
                    <ParticipantesList
                        participantes={participantes}
                        statusParticipantes={statusParticipantes}
                        onCheckin={handleCheckin}
                        onCheckout={handleCheckout}
                    />
                </>
            )}
        </div>
    );
}

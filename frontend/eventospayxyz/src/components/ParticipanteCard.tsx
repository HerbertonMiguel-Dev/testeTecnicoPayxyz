import styled from 'styled-components';

const ParticipanteCardStyled = styled.div`
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

type ParticipanteCardProps = {
  participante: {
    id: string;
    nome: string;
    email: string;
    telefone: string;
  };
  status: string;
  onCheckin: () => void;
  onCheckout: () => void;
};

const ParticipanteCard = ({ participante, status, onCheckin, onCheckout }: ParticipanteCardProps) => (
  <ParticipanteCardStyled>
    <div>
      <p><strong>Nome:</strong> {participante.nome}</p>
      <p><strong>Email:</strong> {participante.email}</p>
      <p><strong>Telefone:</strong> {participante.telefone}</p>
      {status && (
        <p style={{ marginTop: '8px', color: status === 'checkin' ? 'green' : 'red' }}>
          {status === 'checkin' ? '✔️ Check-in realizado' : '📤 Check-out realizado'}
        </p>
      )}
    </div>
    <ButtonGroup>
      <Button className="checkin" onClick={onCheckin}>Check-in</Button>
      <Button className="checkout" onClick={onCheckout}>Check-out</Button>
    </ButtonGroup>
  </ParticipanteCardStyled>
);

export default ParticipanteCard;

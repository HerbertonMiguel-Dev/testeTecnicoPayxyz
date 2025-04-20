import styled from 'styled-components';

const BotaoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;  /* Para permitir que os botões se movam para a linha seguinte, se necessário */
  justify-content: center;  /* Centraliza os botões horizontalmente */
  gap: 16px;  /* Espaçamento entre os botões */
`;

const EventoButtonStyled = styled.button`
  background-color: #1d4ed8;
  color: white;
  font-weight: 600;
  padding: 8px 16px;  /* Diminuindo o padding para diminuir o tamanho do botão */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: auto;  /* Mudando de 100% para auto para o tamanho ajustar ao conteúdo */
  font-size: 0.875rem;  /* Tamanho de fonte menor */
  margin: 8px;  /* Espaçamento entre os botões */
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

type EventoButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const EventoButton = ({ onClick, children }: EventoButtonProps) => (
  <EventoButtonStyled onClick={onClick}>
    {children}
  </EventoButtonStyled>
);

export default EventoButton;

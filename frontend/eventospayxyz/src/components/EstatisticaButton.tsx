import styled from 'styled-components';

const EstatisticaButtonStyled = styled.button`
  margin-top: 20px;
  margin-left: 35px;
  background-color: #6b21a8;
  color: white;
  font-weight: 600;
  padding: 10px;
  border-radius: 6px;
  font-size: 1rem;
  width: 50%;

  &:hover {
    background-color: #7e22ce;
  }

  @media (min-width: 640px) {
    width: auto;
  }
`;

type EstatisticaButtonProps = {
  onClick: () => void;
};

const EstatisticaButton = ({ onClick }: EstatisticaButtonProps) => (
  <EstatisticaButtonStyled onClick={onClick}>
    Exibir Estatísticas
  </EstatisticaButtonStyled>
);

export default EstatisticaButton;

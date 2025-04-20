import styled from 'styled-components';

const EstatisticasBoxStyled = styled.div`
  margin-top: 15px;
  background-color: #f1f5f9;
  padding: 12px;
  border-radius: 8px;
`;

type EstatisticasBoxProps = {
  totalCheckins: number;
  totalCheckouts: number;
  totalParticipantes: number;
  totalPendentes: number;
};

const EstatisticasBox = ({ totalCheckins, totalCheckouts, totalParticipantes, totalPendentes }: EstatisticasBoxProps) => (
  <EstatisticasBoxStyled>
    <p><strong>Total de Check-ins:</strong> {totalCheckins}</p>
    <p><strong>Total de Check-outs:</strong> {totalCheckouts}</p>
    <p><strong>Total de Participantes:</strong> {totalParticipantes}</p>
    <p><strong>Pendentes:</strong> {totalPendentes}</p>
  </EstatisticasBoxStyled>
);

export default EstatisticasBox;

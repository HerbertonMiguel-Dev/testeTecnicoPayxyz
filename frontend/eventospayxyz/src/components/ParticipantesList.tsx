import ParticipanteCard from './ParticipanteCard';

type ParticipantesListProps = {
  participantes: any[];
  statusParticipantes: Record<string, string>;
  onCheckin: (id: string) => void;
  onCheckout: (id: string) => void;
};

const ParticipantesList = ({ participantes, statusParticipantes, onCheckin, onCheckout }: ParticipantesListProps) => (
  <div>
    <h2>Participantes do Evento</h2>
    {participantes.map((participante) => (
      <ParticipanteCard
        key={participante.id}
        participante={participante}
        status={statusParticipantes[participante.id]}
        onCheckin={() => onCheckin(participante.id)}
        onCheckout={() => onCheckout(participante.id)}
      />
    ))}
  </div>
);

export default ParticipantesList;

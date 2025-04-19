import prismaClient from "../../prisma";

class EstatisticaTotalParticipantePendentesService {
  async execute() {
    const participantesPendentes = await prismaClient.participantes.count({
      where: {
        checkins: {
          none: {
            status: "presente"
          }
        }
      }
    });

    return { totalPendentes: participantesPendentes };
  }
}

export { EstatisticaTotalParticipantePendentesService };

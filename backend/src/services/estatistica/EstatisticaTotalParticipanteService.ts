import prismaClient from "../../prisma";

class EstatisticaTotalParticipanteService {
  async execute() {
    const total = await prismaClient.participantes.count();

    return { totalParticipantes: total };
  }
}

export { EstatisticaTotalParticipanteService };

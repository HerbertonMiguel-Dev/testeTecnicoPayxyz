import prismaClient from "../../prisma";

interface TotalCheckinsRequest {
  evento_id: string;
}

class EstatisticaTotalCheckinsService {
  async execute({ evento_id }: TotalCheckinsRequest) {
    const total = await prismaClient.checkins.count({
      where: {
        eventoId: Number(evento_id),
        status: "presente",
      },
    });

    return { totalCheckins: total };
  }
}

export { EstatisticaTotalCheckinsService };

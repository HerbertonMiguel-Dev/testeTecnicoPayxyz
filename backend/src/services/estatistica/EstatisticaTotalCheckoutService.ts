import prismaClient from "../../prisma";

interface EstatisticaRequest {
  evento_id: string;
}

class EstatisticaTotalCheckoutService {
  async execute({ evento_id }: EstatisticaRequest) {
    const total = await prismaClient.checkins.count({
      where: {
        eventoId: Number(evento_id),
        status: "saiu", // Considerando que status "saiu" representa quem fez check-in e check-out
      },
    });

    return { totalCheckouts: total };
  }
}

export { EstatisticaTotalCheckoutService };

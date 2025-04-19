// src/services/checkin/RealizarCheckoutService.ts
import prismaClient from "../../prisma";

interface CheckoutRequest {
  participante_id: number;
  evento_id: number;
}

class RealizarCheckoutService {
  async execute({ participante_id, evento_id }: CheckoutRequest) {
    // Verifica se há um check-in existente (sem check-out ainda)
    const checkin = await prismaClient.checkins.findFirst({
      where: {
        participanteId: participante_id,
        eventoId: evento_id,
        horaSaida: null,
        status: "presente",
      },
    });

    if (!checkin) {
      throw new Error("Nenhum check-in ativo encontrado para este participante e evento.");
    }

    // Atualiza o check-in com a hora de saída e status
    const checkout = await prismaClient.checkins.update({
      where: {
        id: checkin.id,
      },
      data: {
        horaSaida: new Date(),
        status: "saiu",
      },
    });

    return checkout;
  }
}

export { RealizarCheckoutService };

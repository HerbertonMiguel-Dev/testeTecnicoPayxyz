import prismaClient from "../../prisma";

interface CheckinRequest {
  participanteId: number;
  eventoId: number;
}

class RealizarCheckinService {
  async execute({ participanteId, eventoId }: CheckinRequest) {
    const checkin = await prismaClient.checkins.create({
      data: {
        participanteId,
        eventoId,
        horaEntrada: new Date(),
        status: "presente",
      },
    });

    return checkin;
  }
}

export { RealizarCheckinService };

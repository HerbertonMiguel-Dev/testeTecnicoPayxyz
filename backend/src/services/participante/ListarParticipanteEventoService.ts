import prismaClient from "../../prisma";

interface EventoRequest {
  evento_id: string;
}

class ListarParticipanteEventoService {
  async execute({ evento_id }: EventoRequest) {
    const participantes = await prismaClient.participantes.findMany({
      where: {
        eventoId: Number(evento_id),
      },
      select: {
        id: true,
        nome: true,
        email: true,
        telefone: true,
      },
    });

    return participantes;
  }
}

export { ListarParticipanteEventoService };

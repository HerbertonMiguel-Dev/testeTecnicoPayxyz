import prismaClient from "../../prisma";

class ListarEventosService {
  async execute() {
    // Pegando os eventos criados até o momento, ou seja, eventos com data de criação anterior a agora
    const eventos = await prismaClient.eventos.findMany({
      where: {
        // Filtra eventos com data de criação anterior ao momento atual
        data: {
          lte: new Date(), // lte = less than or equal to (menor ou igual a agora)
        },
      },
    });
    return eventos;
  }
}

export { ListarEventosService };

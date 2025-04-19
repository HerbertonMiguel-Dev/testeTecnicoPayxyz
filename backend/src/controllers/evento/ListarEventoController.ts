import { Request, Response } from "express";
import { ListarEventoService } from "../../services/evento/ListarEventoService";

class ListarEventoController {
  async handle(request: Request, response: Response) {
    try {
      const listarEventosService = new ListarEventoService();
      const eventos = await listarEventosService.execute();
      return response.json(eventos);
    } catch (error) {
      console.error("Erro ao listar eventos:", error);
      return response.status(500).json({ error: "Erro ao listar eventos" });
    }
  }
}

export { ListarEventoController };

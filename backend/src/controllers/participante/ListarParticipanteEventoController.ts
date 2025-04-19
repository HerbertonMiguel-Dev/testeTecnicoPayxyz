import { Request, Response } from "express";
import { ListarParticipanteEventoService } from "../../services/participante/ListarParticipanteEventoService";

class ListarParticipanteEventoController {
  async handle(request: Request, response: Response) {
    const { evento_id } = request.params;

    const service = new ListarParticipanteEventoService();
    const participantes = await service.execute({ evento_id });

    return response.json(participantes);
  }
}

export { ListarParticipanteEventoController };

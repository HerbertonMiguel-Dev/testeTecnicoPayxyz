import { Request, Response } from "express";
import { RealizarCheckinService } from "../../services/checkin/RealizarCheckinService";

class RealizarCheckinController {
  async handle(req: Request, res: Response) {
    const { participanteId, eventoId } = req.body;

    const service = new RealizarCheckinService();

    try {
      const checkin = await service.execute({ participanteId, eventoId });
      return res.json(checkin);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao realizar check-in" });
    }
  }
}

export { RealizarCheckinController };

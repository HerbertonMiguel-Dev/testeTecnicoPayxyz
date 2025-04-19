import { Request, Response } from "express";
import { EstatisticaTotalParticipanteService } from "../../services/estatistica/EstatisticaTotalParticipanteService";

class EstatisticaTotalParticipanteController {
  async handle(req: Request, res: Response) {
    const service = new EstatisticaTotalParticipanteService();

    try {
      const result = await service.execute();
      return res.json(result);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(500).json({ error: "Erro desconhecido" });
    }
  }
}

export { EstatisticaTotalParticipanteController };

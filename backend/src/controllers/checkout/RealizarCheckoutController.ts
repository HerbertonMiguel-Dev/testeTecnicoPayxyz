import { Request, Response } from "express";
import { RealizarCheckoutService } from "../../services/checkout/RealizarCheckoutService";

class RealizarCheckoutController {
  async handle(req: Request, res: Response) {
    const { participante_id, evento_id } = req.body;

    const service = new RealizarCheckoutService();

    try {
      const result = await service.execute({ participante_id, evento_id });
      return res.json(result);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(500).json({ error: "Erro desconhecido" });
    }
  }
}

export { RealizarCheckoutController };

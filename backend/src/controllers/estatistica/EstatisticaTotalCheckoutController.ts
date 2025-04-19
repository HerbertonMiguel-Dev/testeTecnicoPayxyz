import { Request, Response } from "express";
import { EstatisticaTotalCheckoutService } from "../../services/estatistica/EstatisticaTotalCheckoutService";

class EstatisticaTotalCheckoutController {
  async handle(req: Request, res: Response) {
    const { evento_id } = req.params;

    const service = new EstatisticaTotalCheckoutService();

    try {
      const result = await service.execute({ evento_id });
      return res.json(result);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(500).json({ error: "Erro desconhecido" });
    }
  }
}

export { EstatisticaTotalCheckoutController };

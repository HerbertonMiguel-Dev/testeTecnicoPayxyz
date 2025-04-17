import { Router, Request, Response } from 'express'

import { ListarEventoController } from "./controllers/evento/ListarEventoController";

const router = Router();

router.get('/eventos/:evento_id', (req: Request, res: Response) => {
  return new ListarEventoController().handle(req, res);
});


export { router };
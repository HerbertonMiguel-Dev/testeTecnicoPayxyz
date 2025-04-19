import { Router, Request, Response } from 'express';

import { ListarEventoController } from "./controllers/evento/ListarEventoController";

import { ListarParticipanteEventoController } from "./controllers/participante/ListarParticipanteEventoController";

import { RealizarCheckinController } from "./controllers/checkin/RealizarCheckinController";

import { RealizarCheckoutController } from "./controllers/checkout/RealizarCheckoutController";

import { EstatisticaTotalCheckinsController } from "./controllers/estatistica/EstatisticaTotalCheckinsController";
import { EstatisticaTotalCheckoutController } from "./controllers/estatistica/EstatisticaTotalCheckoutController";
import { EstatisticaTotalParticipanteController } from "./controllers/estatistica/EstatisticaTotalParticipanteController";
import { EstatisticaTotalParticipantePendentesController } from "./controllers/estatistica/EstatisticaTotalParticipantePendentesController";

const router = Router();

// Rota para listar todos os eventos
router.get('/eventos', new ListarEventoController().handle);

// Lista participantes de um evento específico
router.get('/eventos/:evento_id/participantes', new ListarParticipanteEventoController().handle);

router.post("/checkin", new RealizarCheckinController().handle);

router.post("/checkout", new RealizarCheckoutController().handle);

// router estatistica
router.get("/eventos/:evento_id/estatisticas/total-checkins", new EstatisticaTotalCheckinsController().handle);
router.get("/eventos/:evento_id/estatisticas/total-checkouts",new EstatisticaTotalCheckoutController().handle);
router.get("/estatisticas/total-participantes",new EstatisticaTotalParticipanteController().handle);
router.get("/estatisticas/total-pendentes",new EstatisticaTotalParticipantePendentesController().handle);
export { router };

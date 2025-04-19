/*
  Warnings:

  - You are about to drop the `Checkin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Evento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Participante` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Checkin" DROP CONSTRAINT "Checkin_eventoId_fkey";

-- DropForeignKey
ALTER TABLE "Checkin" DROP CONSTRAINT "Checkin_participanteId_fkey";

-- DropForeignKey
ALTER TABLE "Participante" DROP CONSTRAINT "Participante_eventoId_fkey";

-- DropTable
DROP TABLE "Checkin";

-- DropTable
DROP TABLE "Evento";

-- DropTable
DROP TABLE "Participante";

-- CreateTable
CREATE TABLE "Eventos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "horaInicio" TIMESTAMP(3) NOT NULL,
    "horaFim" TIMESTAMP(3) NOT NULL,
    "local" TEXT NOT NULL,
    "capacidade" INTEGER NOT NULL,

    CONSTRAINT "Eventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Participantes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT,
    "telefone" TEXT,
    "eventoId" INTEGER NOT NULL,

    CONSTRAINT "Participantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Checkins" (
    "id" SERIAL NOT NULL,
    "participanteId" INTEGER NOT NULL,
    "eventoId" INTEGER NOT NULL,
    "horaEntrada" TIMESTAMP(3),
    "horaSaida" TIMESTAMP(3),
    "status" "Status" NOT NULL,

    CONSTRAINT "Checkins_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Participantes" ADD CONSTRAINT "Participantes_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Eventos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Checkins" ADD CONSTRAINT "Checkins_participanteId_fkey" FOREIGN KEY ("participanteId") REFERENCES "Participantes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Checkins" ADD CONSTRAINT "Checkins_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Eventos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

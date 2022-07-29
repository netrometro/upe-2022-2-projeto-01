/*
  Warnings:

  - Added the required column `data` to the `Evento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Evento" ADD COLUMN     "data" TEXT NOT NULL;

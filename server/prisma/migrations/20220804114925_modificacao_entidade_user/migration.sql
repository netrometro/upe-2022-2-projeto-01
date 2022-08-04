/*
  Warnings:

  - Added the required column `apelido` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avatar` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "apelido" TEXT NOT NULL,
ADD COLUMN     "avatar" TEXT NOT NULL,
ADD COLUMN     "senha" TEXT NOT NULL;

/*
  Warnings:

  - A unique constraint covering the columns `[tag]` on the table `Evento` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tag` to the `Evento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Evento" ADD COLUMN     "tag" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Evento_tag_key" ON "Evento"("tag");

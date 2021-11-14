/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Region` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Region" ADD COLUMN     "country" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Region.name_unique" ON "Region"("name");

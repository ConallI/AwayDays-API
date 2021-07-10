/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Sight` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Specialty` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Sight.name_unique" ON "Sight"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Specialty.name_unique" ON "Specialty"("name");

/*
  Warnings:

  - You are about to drop the column `teamId` on the `League` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "League" DROP CONSTRAINT "League_teamId_fkey";

-- AlterTable
ALTER TABLE "League" DROP COLUMN "teamId";

-- CreateTable
CREATE TABLE "_LeagueToTeam" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LeagueToTeam_AB_unique" ON "_LeagueToTeam"("A", "B");

-- CreateIndex
CREATE INDEX "_LeagueToTeam_B_index" ON "_LeagueToTeam"("B");

-- AddForeignKey
ALTER TABLE "_LeagueToTeam" ADD FOREIGN KEY ("A") REFERENCES "League"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LeagueToTeam" ADD FOREIGN KEY ("B") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

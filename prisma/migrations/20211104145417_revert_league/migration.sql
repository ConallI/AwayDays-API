/*
  Warnings:

  - You are about to drop the `_LeagueToTeam` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_LeagueToTeam" DROP CONSTRAINT "_LeagueToTeam_A_fkey";

-- DropForeignKey
ALTER TABLE "_LeagueToTeam" DROP CONSTRAINT "_LeagueToTeam_B_fkey";

-- AlterTable
ALTER TABLE "League" ADD COLUMN     "teamId" TEXT;

-- DropTable
DROP TABLE "_LeagueToTeam";

-- AddForeignKey
ALTER TABLE "League" ADD FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

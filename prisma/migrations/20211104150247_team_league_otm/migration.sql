/*
  Warnings:

  - You are about to drop the column `teamId` on the `League` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "League" DROP CONSTRAINT "League_teamId_fkey";

-- AlterTable
ALTER TABLE "League" DROP COLUMN "teamId";

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "leagueId" TEXT,
ALTER COLUMN "cityId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Team" ADD FOREIGN KEY ("leagueId") REFERENCES "League"("id") ON DELETE SET NULL ON UPDATE CASCADE;

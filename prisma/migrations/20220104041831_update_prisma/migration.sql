-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_regionId_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_cityId_fkey";

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "City.name_unique" RENAME TO "City_name_key";

-- RenameIndex
ALTER INDEX "League.name_unique" RENAME TO "League_name_key";

-- RenameIndex
ALTER INDEX "Region.name_unique" RENAME TO "Region_name_key";

-- RenameIndex
ALTER INDEX "Sight.name_unique" RENAME TO "Sight_name_key";

-- RenameIndex
ALTER INDEX "Specialty.name_unique" RENAME TO "Specialty_name_key";

-- RenameIndex
ALTER INDEX "Sport.name_unique" RENAME TO "Sport_name_key";

-- RenameIndex
ALTER INDEX "Team.name_unique" RENAME TO "Team_name_key";

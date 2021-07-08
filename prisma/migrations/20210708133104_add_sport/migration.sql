-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "sportId" TEXT;

-- CreateTable
CREATE TABLE "Sport" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sport.name_unique" ON "Sport"("name");

-- AddForeignKey
ALTER TABLE "Team" ADD FOREIGN KEY ("sportId") REFERENCES "Sport"("id") ON DELETE SET NULL ON UPDATE CASCADE;

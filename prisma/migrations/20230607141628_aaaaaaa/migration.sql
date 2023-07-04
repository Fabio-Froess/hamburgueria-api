/*
  Warnings:

  - You are about to drop the column `opcionaisId` on the `burgers` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "burgers" DROP CONSTRAINT "burgers_opcionaisId_fkey";

-- AlterTable
ALTER TABLE "burgers" DROP COLUMN "opcionaisId";

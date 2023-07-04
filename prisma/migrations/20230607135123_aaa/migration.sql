-- CreateTable
CREATE TABLE "opcionais_burgers" (
    "id" SERIAL NOT NULL,
    "burgerId" INTEGER NOT NULL,
    "opcionalId" INTEGER NOT NULL,

    CONSTRAINT "opcionais_burgers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "opcionais_burgers" ADD CONSTRAINT "opcionais_burgers_burgerId_fkey" FOREIGN KEY ("burgerId") REFERENCES "burgers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "opcionais_burgers" ADD CONSTRAINT "opcionais_burgers_opcionalId_fkey" FOREIGN KEY ("opcionalId") REFERENCES "opcional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

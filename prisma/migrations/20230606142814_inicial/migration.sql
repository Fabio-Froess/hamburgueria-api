-- CreateTable
CREATE TABLE "pao" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "pao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carne" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "carne_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "opcional" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "opcional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "burgers" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "carneId" INTEGER NOT NULL,
    "paoId" INTEGER NOT NULL,
    "opcionaisId" INTEGER NOT NULL,
    "statusId" INTEGER NOT NULL,

    CONSTRAINT "burgers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "burgers" ADD CONSTRAINT "burgers_carneId_fkey" FOREIGN KEY ("carneId") REFERENCES "carne"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "burgers" ADD CONSTRAINT "burgers_paoId_fkey" FOREIGN KEY ("paoId") REFERENCES "pao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "burgers" ADD CONSTRAINT "burgers_opcionaisId_fkey" FOREIGN KEY ("opcionaisId") REFERENCES "opcional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "burgers" ADD CONSTRAINT "burgers_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

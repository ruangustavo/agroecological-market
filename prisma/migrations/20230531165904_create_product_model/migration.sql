-- CreateEnum
CREATE TYPE "Measurement" AS ENUM ('KG', 'PACK', 'UNIT');

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "quantity_in_stock" "Measurement" NOT NULL DEFAULT 'UNIT',

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

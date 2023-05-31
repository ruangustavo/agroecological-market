/*
  Warnings:

  - Changed the type of `quantity_in_stock` on the `products` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "unityOfMeasurement" "Measurement" NOT NULL DEFAULT 'UNIT',
DROP COLUMN "quantity_in_stock",
ADD COLUMN     "quantity_in_stock" INTEGER NOT NULL;

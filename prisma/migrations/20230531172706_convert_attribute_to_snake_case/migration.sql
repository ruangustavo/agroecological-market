/*
  Warnings:

  - You are about to drop the column `unityOfMeasurement` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "unityOfMeasurement",
ADD COLUMN     "unity_of_measurement" "Measurement" NOT NULL DEFAULT 'UNIT';

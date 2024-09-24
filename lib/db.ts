import { PrismaClient } from "@prisma/client";

// Disable the no-var ESLint rule for the global declaration
/* eslint-disable no-var */
declare global {
  var prisma: PrismaClient | undefined;
}

/* eslint-enable no-var */
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

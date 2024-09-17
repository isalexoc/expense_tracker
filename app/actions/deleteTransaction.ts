"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

async function deleteTransaction(id: string) {
  const { userId } = auth();

  if (!userId) {
    throw new Error("User not found");
  }

  try {
    await db.transaction.delete({
      where: {
        id,
        userId,
      },
    });

    revalidatePath("/");
    return { message: "Transaction deleted" };
  } catch (error) {
    return { error: "Error deleting transaction" };
  }
}

export default deleteTransaction;

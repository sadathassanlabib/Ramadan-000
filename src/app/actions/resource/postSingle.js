'use server'

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/dbConnect";

export const postSingle = async (postedData) => {
  try {
    const collection = await dbConnect("blogs"); // ensure returns collection
    const result = await collection.insertOne(postedData);

    // ISR: revalidate path
    revalidatePath("/resource/pdf");

    return { success: true, data: result };
  } catch (error) {
    console.error("postSingle error:", error);
    return { success: false, data: null, message: error.message };
  }
};

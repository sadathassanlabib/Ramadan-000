'use server';

import dbConnect from "@/lib/dbConnect";

export const getResource = async () => {
  try {
    const collection = await dbConnect("blogs"); // ensure returns collection
    const data = await collection.find({}).toArray();
    return { success: true, data };
  } catch (error) {
    console.error("getResource error:", error);
    return { success: false, data: null, message: error.message };
  }
};

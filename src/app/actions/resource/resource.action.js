'use server'

import { getCollection } from "@/lib/dbConnect"
import { revalidatePath } from "next/cache"

// GET all data
export const getResources = async (resourceName) => {
  const allowedResources = [
    "boyans",
    "pdf",
    "blogs",
    "book",
    "course",
    "muhasaba"
  ]
  if (!allowedResources.includes(resourceName)) {
    return { success: false, data: null, message: "Invalid resource" }
  }

  try {
    const collection = await getCollection(resourceName)
    const data = await collection.find({}).toArray()
    return { success: true, data }
  } catch (error) {
    console.error("getResources error:", error)
    return { success: false, data: null, message: error.message }
  }
}

// POST single data
export const postSingleResource = async (
  resourceName,
  postedData,
  revalidate = null
) => {
  const allowedResources = [
    "boyans",
    "pdf",
    "blogs",
    "book",
    "course",
    "muhasaba"
  ]
  if (!allowedResources.includes(resourceName)) {
    return { success: false, data: null, message: "Invalid resource" }
  }

  try {
    const collection = await getCollection(resourceName)
    const result = await collection.insertOne(postedData)

    if (revalidate) {
      revalidatePath(revalidate)
    }

    return { success: true, data: result }
  } catch (error) {
    console.error("postSingleResource error:", error)
    return { success: false, data: null, message: error.message }
  }
}

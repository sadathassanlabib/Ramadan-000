import dbConnect from "@/lib/dbConnect"
import { revalidatePath } from "next/cache"

export async function GET() {
  try {
    const menuCollection = await dbConnect("blogs")
    const data = await menuCollection.find({}).toArray()

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

export async function POST(request) {
  try {
    const postedData = await request.json()
    const collection = await dbConnect("blogs")
    const result = await collection.insertOne(postedData)

    revalidatePath("/resource/pdf") // ISR

    return new Response(JSON.stringify({ success: true, data: result }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

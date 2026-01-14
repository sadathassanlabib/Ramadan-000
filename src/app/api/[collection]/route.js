import dbConnect from "@/lib/dbConnect"
import { revalidatePath } from "next/cache"

export async function GET(req, { params }) {
  try {
    const { collection } = await params
    const col = await dbConnect(collection)
    const data = await col.find({}).toArray()

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    )
  }
}

export async function POST(req, { params }) {
  try {
    const { collection } = await params
    const body = await req.json()

    const col = await dbConnect(collection)
    const result = await col.insertOne(body)

    revalidatePath(`/resource/${collection}`)

    return Response.json({ success: true, data: result })
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    )
  }
}

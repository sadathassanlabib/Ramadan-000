import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb"

export async function GET(req, { params }) {
  try {
    const { collection, id } = await params

    if (!ObjectId.isValid(id)) {
      return Response.json(
        { success: false, message: "Invalid ID" },
        { status: 400 }
      )
    }

    const col = await dbConnect(collection)
    const data = await col.findOne({ _id: new ObjectId(id) })

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    )
  }
}

export async function PATCH(req, { params }) {
  try {
    const { collection, id } = await params
    const body = await req.json()

    const col = await dbConnect(collection)
    const result = await col.updateOne(
      { _id: new ObjectId(id) },
      { $set: body }
    )

    return Response.json({ success: true, data: result })
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    )
  }
}

export async function DELETE(req, { params }) {
  try {
    const { collection, id } = await params

    const col = await dbConnect(collection)
    const result = await col.deleteOne({ _id: new ObjectId(id) })

    return Response.json({ success: true, data: result })
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    )
  }
}

import dbConnect from "@/lib/dbConnect"

export async function GET() {
  try {
    const menuCollection = await dbConnect('blogs')
    const data = await menuCollection.find({}).toArray()

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  const postedData = await request.json()
  const result = await dbConnect('blogs').insertOne(postedData)
  return Response.json({result} )
}
// 6963eabb762cb22bc775d756
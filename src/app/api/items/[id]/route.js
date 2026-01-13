import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
  const { id } = params; // safer
  const collection = await dbConnect("blogs");
  const singleData = await collection.findOne({ _id: new ObjectId(id) });
  return new Response(JSON.stringify({ success: true, data: singleData }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(request, { params }) {
  const { id } = params;
  const collection = await dbConnect("blogs");
  const response = await collection.deleteOne({ _id: new ObjectId(id) });
  return new Response(JSON.stringify({ success: true, data: response }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PATCH(request, { params }) {
  const { id } = params;
  const postedData = await request.json();
  const collection = await dbConnect("blogs");
  const filter = { _id: new ObjectId(id) };
  const UpdatedResponse = await collection.updateOne(filter, { $set: { ...postedData } }, { upsert: true });
  return new Response(JSON.stringify({ success: true, data: UpdatedResponse }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

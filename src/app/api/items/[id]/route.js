import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb";


export async function GET(request, { params }) {
  const  p  = await params; // ⭐ MUST
  const singleData =await dbConnect('blogs').findOne({_id:new ObjectId(p.id)})
  return Response.json({singleData});
}

export async function DELETE(request, { params }) {
  const  p  = await params; // ⭐ MUST
  const response =await dbConnect('blogs').deleteOne({_id:new ObjectId(p.id)})
  return Response.json({response});
}

export async function PATCH(request, { params }) {
  const  p  = await params; 
 const postedData = await request.json();
 const filter = { _id: new ObjectId(p.id) };
  const UpdatedResponse =await dbConnect('blogs').updateOne(filter,{$set:{...postedData}} , { upsert: true })
  return Response.json({UpdatedResponse});
}



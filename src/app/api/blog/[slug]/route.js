import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    // connect to db
    // find post by slug
    // get a response (posts)
    const post = "";
    return NextResponse.json(post);
  } catch (error) {
    console.log("error in GET blog route");
  }
};

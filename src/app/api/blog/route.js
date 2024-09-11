import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    // connect to db
    // perform your actions
    // get a response (posts)
    const posts = "";
    return NextResponse.json(posts);
  } catch (error) {
    console.log("error in GET blog route");
  }
};

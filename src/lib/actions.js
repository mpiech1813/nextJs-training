"use server";
import { auth, signIn, signOut } from "@/lib/auth";

export const addPost = async (formData) => {
  //   const title = formData.get("title");
  //   const desc = formData.get("desc");
  //   const slug = formData.get("slug");
  //   const userId = formData.get("userId");

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    // connect to DB
    // pass the info
  } catch (error) {
    console.log("error in actions add post");
  }
};

export const handleLogin = async () => {
  await signIn("github");
};

export const handleLogOut = async () => {
  await signOut();
};

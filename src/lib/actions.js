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

const User = "comes from mongoose";
export const ragister = async (formData) => {
  const { username, email, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) return { error: "password doesnt match" };
  try {
    // connect to db
    // look for the user in db

    const newuser = new User({
      username,
      email,
      password,
    });

    //push to db
    // redirect to home page
  } catch (error) {
    console.log("error registering new user");
  }
};

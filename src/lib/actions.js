export const sayHello = async () => {
  "use server";

  console.log("hello");
};

export const addPost = async (formData) => {
  "use server";

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

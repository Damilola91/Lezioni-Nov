"use server";
import { revalidatePath } from "next/cache";

export const createPost = async (formData) => {
  const title = formData.get("title");
  const body = formData.get("body");

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application-json",
    },
    body: JSON.stringify({ title, body }),
  });

  const data = await res.json();
  revalidatePath("/posts");
  console.log(data);

  return data;
};

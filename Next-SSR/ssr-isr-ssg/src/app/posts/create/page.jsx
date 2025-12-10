"use client";
import { createPost } from "../../actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreatePage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await createPost(new FormData(e.target));
    setTimeout(() => {
      setLoading(false);
      router.push("/posts");
    }, 3000);
  };

  return (
    <main>
      <h1>Crea il tuo Post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Inserisci il titolo</label>
        <input name="title" />
        <label htmlFor="body">Inserisci il testo del post</label>
        <textarea name="body"></textarea>
        <button className="bg-red-500" type="submit" disabled={loading}>
          {loading ? "Caricamento" : "Invia"}
        </button>
      </form>
    </main>
  );
};

export default CreatePage;

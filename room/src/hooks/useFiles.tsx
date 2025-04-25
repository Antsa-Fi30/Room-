import { useState, useEffect } from "react";
import { getDocs, deleteDoc } from "../services/DocumentsService";

export type Files = {
  id: number;
  file: string;
  file_name: string;
  uploaded_at: string;
};

export const useFiles = () => {
  const [files, setFiles] = useState<Files[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFiles = async () => {
    try {
      setLoading(true);
      const response = await getDocs();
      setFiles(response?.data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erreur inconnue");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteDoc(id);
      setFiles((prev) => prev.filter((file) => file.id !== id));
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("Erreur lors de la suppression.");
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return { files, loading, error, handleDelete, fetchFiles };
};

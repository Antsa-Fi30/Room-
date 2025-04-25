import axios from "axios";

const DOCS_URL = "http://127.0.0.1:8000/api/documents/";

export const getDocs = async () => {
  try {
    const response = await axios.get(`${DOCS_URL}upload/`);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw error;
    } else {
      console.error("Une erreur inconnue s'est produite:", error);
      throw new Error("Une erreur inconnue s'est produite.");
    }
  }
};

export const uploadDocs = async (data: FormData) => {
  try {
    const response = await axios.post(`${DOCS_URL}upload/`, data);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Une erreur inconnue s'est produite:", error);
    }
  }
};

export const deleteDoc = async (id: number) => {
  try {
    const response = await axios.delete(`${DOCS_URL}upload/${id}/`);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Une erreur inconnue s'est produite:", error);
    }
  }
};

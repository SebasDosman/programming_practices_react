import axios from "axios";

export const postTelephone = async (telephoneData) => {
  const url =
    "https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project";

  try {
    const response = await axios.post(url, telephoneData);

    return response.data;
  } catch (error) {
    console.error("Error adding telephone:", error);
  }
};

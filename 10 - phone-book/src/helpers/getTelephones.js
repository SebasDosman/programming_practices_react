import axios from "axios";

export const getTelephones = async () => {
  const url =
    "https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project";

  try {
    const response = await axios.get(url);
    const data = await response.data;

    return data;
  } catch (error) {
    console.error("Error getting telephones:", error);
  }
};

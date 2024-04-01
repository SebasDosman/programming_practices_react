import { useState } from "react";
import { postTelephone } from "../helpers";

export const usePostTelephone = () => {
  const [isPosting, setIsPosting] = useState(false);

  const addTelephone = async (telephoneData) => {
    setIsPosting(true);

    try {
      await postTelephone(telephoneData);
    } finally {
      setIsPosting(false);
    }
  };

  return {
    isPosting,
    addTelephone,
  };
};

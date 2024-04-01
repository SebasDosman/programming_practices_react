import { useState, useEffect } from "react";
import { getTelephones } from "../helpers";

export const useGetTelephones = () => {
  const [telephones, setTelephones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTelephones().then(
      (newTelephones) => (setTelephones(newTelephones), setIsLoading(false))
    );
  }, []);

  return {
    telephones,
    isLoading,
  };
};

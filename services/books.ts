import { LOCALHOST } from "@/constants/host";

export const getBooks = async () => {
  const response = await fetch(`${LOCALHOST}/book?page=1&limit=10`).then(
    (res) => res.json()
  );
  return response;
};

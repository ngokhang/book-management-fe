import { LOCALHOST } from "@/constants/host";
import fetchAPI from "@/utils/fetch";

export const getCategories = async () => {
  const response = await fetchAPI(
    `${LOCALHOST}/category?_page=1&_limit=10`,
    "GET"
  );

  return response;
};

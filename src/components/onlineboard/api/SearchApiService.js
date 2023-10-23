import { apiClient } from "./ApiClient";

export const searchWithKeywordApi = (keyword, pageNumber, type) => {
  console.log(`/search/${type}/${keyword}/${pageNumber}`);
    return apiClient.get(`/search/${type}/${keyword}/${pageNumber}`);
  
};

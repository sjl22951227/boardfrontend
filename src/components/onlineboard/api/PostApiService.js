import { apiClient } from "./ApiClient";

export const getPostsApi = (pageNumber) => apiClient.get(`/page=${pageNumber}`);

export const readPostApi = (id) => apiClient.get(`/post/${id}`);

export const writePostApi = (post) => {
  return apiClient.post(`/posting`, post, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updatePostApi = (id, post) => {
  return apiClient.put(`/post/${id}`, post, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deletePostApi = (id) => {
  return apiClient.delete(`/post/${id}`);
};

import { apiClient } from "./ApiClient";

export const addCommentApi = (postId, comment) => apiClient.post(`/comments/${postId}`, comment);

export const readCommentsApi = (postId) => apiClient.get(`/comments/${postId}`);

export const deleteCommentsApi = (id) => apiClient.delete(`/comments/${id}`);

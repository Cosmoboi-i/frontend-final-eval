export const BASE_URL = "http://localhost:8088";
export const ALL_RECORDS = "/api/records";
export const LIKES_BY_ID = "/api/records/:id/likes";
export const REQ_HEADER = { Authorization: "Bearer QWlzaHdhcnlhIE4=" };

export const GET_RECORDS = {
  url: ALL_RECORDS,
  method: "get",
};

export const GET_LIKES_BY_ID = (id) => ({
  url: `/api/records/${id}/likes`,
  method: "get",
});

export const PATCH_LIKES_BY_ID = (id) => ({
  url: `/api/records/${id}/likes`,
  method: "patch",
});

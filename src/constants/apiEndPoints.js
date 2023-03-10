export const BASE_URL = "http://localhost:7000";
export const ALL_RECORDS = "/api/records";
export const LIKES_BY_ID = "/api/records/:id/likes";
export const REQ_HEADER = { Authorization: "Bearer QWlzaHdhcnlhIE4=" };

export const AUTH_URL = 'http://localhost:8888';

// Auth

export const VALIDATE = {
  url: AUTH_URL + '/validate',
  method: "get",
}

export const LOGIN = {
  url: AUTH_URL + '/login',
  method: "post",
}

export const REGISTER = {
  url: AUTH_URL + '/register',
  method: "post",
}


// Content Types

export const GET_ALL_TYPES = {
  url: BASE_URL + '/content',
  method: "get",
}

export const ADD_NEW_TYPE = {
  url: BASE_URL + '/content',
  method: "post",
}

export const EDIT_TYPE = (id) => ({
  url: BASE_URL + `/content/${id}`,
  method: "put",
})

export const DELETE_TYPE = (id) => ({
  url: BASE_URL + `/content/${id}`,
  method: "delete",
})

// Entries

export const GET_COLLECTION_BY_TYPE = (tid) => ({
  url: BASE_URL + `/collection?content_type_id=${tid}`,
  method: "get",
})

export const ADD_NEW_ENTRY = {
  url: BASE_URL + '/collection',
  method: "post",
}

export const EDIT_ENTRY = (id) => ({
  url: BASE_URL + `/collection/${id}`,
  method: "put",
})

export const DELETE_ENTRY = (id) => ({
  url: BASE_URL + `/collection/${id}`,
  method: "delete",
})
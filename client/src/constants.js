export const PATHS = {
  HOME: "/",
  LIST: "/reviews",
  ADD: "/add",
  EDIT: (id, pos) => `/edit/${id || ':id'}/${pos || ':pos'}`,
  UPDATE: (id) => `/reviews/${id || ':id'}`,
  DELETE: (id) => `/reviews/delete/${id || ':id'}`,
};

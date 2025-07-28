const getBackendUrl = () =>
  // Check whether in development or browser environment
  window.location.hostname === "natmonlee.github.io"
    ? "http://51.21.202.149:3000"
    : "http://localhost:3000";

export default getBackendUrl;
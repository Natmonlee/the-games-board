const getBackendUrl = () =>
  // Check whether in development or browser environment
  window.location.hostname === "51.21.202.149"
    ? "http://51.21.202.149:3000"
    : "http://localhost:3000";

export default getBackendUrl;
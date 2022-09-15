// getRequestConfig provides the headers for any API request, particularly aiming to provide the Bearer token
export const getRequestConfig = (): { headers: { Authorization: string } } => {
  const token = JSON.parse(localStorage.getItem("user") || "").token;
  const requestConfig = {
    headers: {
      Authorization: token
        ? `Bearer ${token}`
        : "Failed to get token from localStorage",
    },
  };

  return requestConfig;
};

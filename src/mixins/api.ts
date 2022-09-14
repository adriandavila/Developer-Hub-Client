export const getRequestConfig = (): { headers: { Authorization: string } } => {
  const token = JSON.parse(localStorage.getItem("user") || "").token;
  const requestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return requestConfig;
};

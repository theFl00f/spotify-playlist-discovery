const getAuthHeaders = (token: string) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

export default getAuthHeaders;

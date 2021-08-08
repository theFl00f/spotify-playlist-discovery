const getAuthHeaders = (token: string) => {
  return { Authorization: `Bearer ${token}` };
};

export default getAuthHeaders;

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token');

  if (!token) {
    return false;
  }

  try {
    const [, payload] = token.split('.');
    const decodedPayload = JSON.parse(
      atob(payload),
    );

    if (decodedPayload.exp && Date.now() >= decodedPayload.exp * 1000) {
      localStorage.removeItem('token')
      return false
    }

    return true
  } catch (error) {
    console.error('Invalid token:', error)
    return false
  }
}

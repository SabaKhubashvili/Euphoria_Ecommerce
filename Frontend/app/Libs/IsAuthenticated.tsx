import { getCookie } from 'cookies-next';
import jwt_decode from 'jwt-decode';

export const isAuthenticated = () => {
  const token = getCookie('accessToken');
  if (!token) {
    return false;
  }

  try {
    const decoded = jwt_decode(token) as any;
    if (decoded.exp < Date.now() / 1000) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
};


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const apiUrls = {
  Login: `${serverUrl}/api/auth/login`,
  Register: `${serverUrl}/api/auth/register`,
};

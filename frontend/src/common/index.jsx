const backendDomain = "http://localhost:3000";

const summaryApi = {
  signUp: {
    url: `${backendDomain}/api/auth/register`,
    method: "POST",
  },
  signIn: {
    url: `${backendDomain}/api/auth/login`,
    method: "POST",
  },
  current_user: {
    url: `${backendDomain}/api/user/details`,
    method: "GET",
  },
  logout_user: {
    url: `${backendDomain}/api/auth/logout`,
    method: "GET",
  },
};

export default summaryApi;

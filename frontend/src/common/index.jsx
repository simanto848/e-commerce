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
};

export default summaryApi;

import Socket from './Socket'


async function login(email, password) {
  const payLoad = {
    email: email,
    password: password.split(''),
  }

  const options = {
    baseURL: "http://127.0.0.1:2954/api", // Base URL
    url: "/idm/login", // Path of URL
    data: payLoad, // Data to send in Body
  }

  return await Socket.POST(options)
}

async function register(email, password) {
  const payLoad = {
    email: email,
    password: password.split(''),
  }

  const options = {
    baseURL: "http://0.0.0.0:12345/api", // Base URL
    url: "/idm/register", // Path of URL
    data: payLoad, // Data to send in Body
  }

  return await Socket.POST(options)
}

export default {
  login,
  register,
}

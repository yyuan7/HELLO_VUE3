// Output: an array of 2 fake users
function createUserList() {
  return [
    {
      userId: 1,
      avatar:
        "https://pleated-jeans.com/wp-content/uploads/2016/05/drama-cat12-1-480x360.jpg",
      username: "cat",
      password: "cat",
      roles: ["admin"],
      buttons: ["cuser.detail"],
      routes: ["statefee"],
      token: "High Admin Token",
    },
    {
      userId: 2,
      avatar:
        "https://headshots-inc.com/wp-content/uploads/2021/01/Professional-Headshot-Examples-48-980x980.jpg",
      username: "dog",
      password: "dog",
      roles: ["admin"],
      buttons: ["cuser.detail", "cuser.user"],
      routes: ["statefee"],
      token: "Admin Token",
    },
  ];
}

export default [
  // 1) user login: match username & password
  {
    url: "/api/user/login",
    method: "post",
    response: ({ body }) => {
      const { username, password } = body;

      const validateUser = createUserList().find(
        (item) => item.username === username && item.password === password,
      );

      if (!validateUser) {
        return { code: 201, data: { message: "Wrong Username or Password" } };
      }

      const { token } = validateUser;
      return { code: 200, data: { token } };
    },
  },
  // 2) retrieve user info: match token
  {
    url: "/api/user/info",
    method: "get",
    response: (request) => {
      const token = request.headers.token;

      const validateUser = createUserList().find(
        (item) => item.token === token,
      );

      if (!validateUser) {
        return {
          code: 201,
          data: { message: "Fail to fetch user info: Invalid Token" },
        };
      }

      return { code: 200, data: { validateUser } };
    },
  },
];

const NAME = "aifi";
const PASSWORD = "123abc";

export const login = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === NAME && password === PASSWORD) {
        resolve();
      } else {
        reject(new Error("Invalid Credentials"));
      }
    }, 3000);
  });
};

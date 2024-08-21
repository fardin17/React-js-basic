export const userLogin = ({ email, password }) => {
  if (typeof window !== "undefined" && typeof window.localStorage !== "undefined") {
    let userlist = localStorage.getItem("userlist");
    userlist = userlist ? JSON.parse(userlist) : [];
    const isRegesteredUser = userlist.some((user) => user.email === email && user.password === password);
    console.log({ isRegesteredUser });
    return isRegesteredUser ? password : null;
  }
};
export const userSignUp = ({ name, email, password }) => {
  if (typeof window !== "undefined" && typeof window.localStorage !== "undefined") {
    let userlist = localStorage.getItem("userlist");
    userlist = userlist ? JSON.parse(userlist) : [];
    const isRegesteredUser = userlist.some((user) => user.email === email);
    if (!isRegesteredUser) {
      const updatedList = [...userlist, { name, email, password }];
      localStorage.setItem("userlist", JSON.stringify(updatedList));
    }
    return !isRegesteredUser;
  }
};

// export const getUserinfo = async ({ email, password }) => {
//   if (window.localStorage !== undefined) {

//   }
// }

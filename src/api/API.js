import Axios from "axios";
Axios.defaults.baseURL = "http://localhost:8080";

export const loginUser = (data) => {
  return Axios.post("/login", data);
};
export const saveUser = (data) => {
  return Axios.post("/addUser", data);
};

//password
//reset request for change link
export function passwordResetRequest(data) {
  return Axios.get(`/user/password-reset-request?username=${data}`);
}

//change password sending new password
export function changePassword(data) {
  return Axios.post(`/user/change-password?token=${data.token}`, data.user);
}

//contact Us email to user
export function contactUs(data) {
  return Axios.post("/contactUs", data);
}

//uploading image of user
export const uploadPicture = (data) => {
  const file = data.file;
  const formData = new FormData();
  formData.append("file", file);
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return Axios.post(`/upload/${data.userId}`, formData, config);
};

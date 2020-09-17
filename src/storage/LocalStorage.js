export function storeInLocal(data) {
  localStorage.setItem("token", data.jwt);
  localStorage.setItem("userId", data.userId);
  localStorage.setItem("username", data.username);
  localStorage.setItem("name", data.name);
  localStorage.setItem("Role", data.role);
}

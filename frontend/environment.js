let is_prod = true;
const server = is_prod
  ? "https://video-conference-backend-mvd1.onrender.com"
  : "http://localhost:8080";

export default server;

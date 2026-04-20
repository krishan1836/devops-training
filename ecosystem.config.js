module.exports = {
  apps: [
    {
      name: "backend",
      script: "python",
      args: "-m uvicorn backend.app:app --host 127.0.0.1 --port 8000",
    },
    {
      name: "frontend",
      script: "cmd.exe",
      args: "/c npm run dev",
      cwd: "./frontend"
    },
  ],
};
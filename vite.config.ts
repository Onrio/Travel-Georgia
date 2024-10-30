import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  const roothPath = path.resolve(process.cwd());
  const srcPath = `${roothPath}/src`;
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "~": roothPath,
        "@": srcPath,
      },
    },
  };
});

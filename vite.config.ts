import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // anytime you use @ in pathname it knows to start at the /src directory
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});

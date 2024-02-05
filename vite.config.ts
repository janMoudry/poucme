import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // paths
  resolve: {
    alias: {
      pages: "/src/pages",
      components: "/src/components",
      hooks: "/src/hooks",
      type: "/src/types",
      contexts: "/src/contexts",
      assets: "/src/assets",
    },
  },
});

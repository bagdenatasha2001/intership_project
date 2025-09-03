import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        replaceAttrValues: {
          "#000": "currentColor", 
          "#16151C": "currentColor", 
          "#111111": "currentColor", 
          "#1E1E1E": "currentColor", 
          "#2D264B": "currentColor",    
        },
      },
    }),
  ],
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

const __dirname = import.meta.dirname //path.resolve(path.dirname());

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      features: `${path.resolve(__dirname, "./src/features/")}`,
      public: `${path.resolve(__dirname, "./public/")}`,
      pages: path.resolve(__dirname, "./src/pages"),
      stores: `${path.resolve(__dirname, "./src/stores/")}`,
      styles: `${path.resolve(__dirname, "./src/styles/")}`,
    },
  },

})

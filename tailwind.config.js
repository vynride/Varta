import { defineConfig } from "tailwindcss";
import lineClamp from "@tailwindcss/line-clamp";

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [lineClamp],
});

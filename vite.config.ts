import { defineConfig } from "vite"
import monkey from "vite-plugin-monkey"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript: {
        name: "Manaba Answer Viewer",
        namespace: "https://github.com/Gai-H/manaba-answer-viewer",
        version: "0.0",
        description: "manaba の小テストの回答と正解を横並びで表示します。",
        include: [/^https:\/\/manaba\.tsukuba\.ac\.jp\/local\/course_\d+_query_\d+\/?.*$/],
        exclude: [/^https:\/\/manaba\.tsukuba\.ac\.jp\/local\/course_\d+_query_\d+\/?.*answer=1.*$/],
        author: "Gai",
        source: "https://github.com/Gai-H/manaba-answer-viewer",
        license: "MIT",
      },
    }),
  ],
})

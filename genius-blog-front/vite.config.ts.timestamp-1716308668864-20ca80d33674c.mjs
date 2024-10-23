// vite.config.ts
import { defineConfig } from "file:///E:/Project/GeniusWorld/genius-blog-front/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/Project/GeniusWorld/genius-blog-front/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///E:/Project/GeniusWorld/genius-blog-front/node_modules/unplugin-auto-import/dist/vite.js";
import vuetify from "file:///E:/Project/GeniusWorld/genius-blog-front/node_modules/vite-plugin-vuetify/dist/index.js";
import prismjs from "file:///E:/Project/GeniusWorld/genius-blog-front/node_modules/vite-plugin-prismjs/dist/index.js";
import { fileURLToPath, URL } from "node:url";
var __vite_injected_original_import_meta_url = "file:///E:/Project/GeniusWorld/genius-blog-front/vite.config.ts";
var vite_config_default = defineConfig({
  optimizeDeps: {
    include: ["@kangc/v-md-editor/lib/theme/vuepress.js"]
  },
  plugins: [
    vue(),
    vuetify({
      autoImport: true
    }),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"]
    }),
    prismjs({
      languages: "all"
    })
  ],
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./", __vite_injected_original_import_meta_url)),
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      "@data": fileURLToPath(new URL("./src/data", __vite_injected_original_import_meta_url))
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"]
  },
  server: {
    port: 8e3
  },
  css: {
    preprocessorOptions: {
      scss: { charset: false },
      css: { charset: false }
    }
  },
  cacheDir: ".vite_cache"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxQcm9qZWN0XFxcXEdlbml1c1dvcmxkXFxcXGdlbml1cy1ibG9nLWZyb250XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxQcm9qZWN0XFxcXEdlbml1c1dvcmxkXFxcXGdlbml1cy1ibG9nLWZyb250XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9Qcm9qZWN0L0dlbml1c1dvcmxkL2dlbml1cy1ibG9nLWZyb250L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSBcInVucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGVcIjtcbmltcG9ydCB2dWV0aWZ5IGZyb20gXCJ2aXRlLXBsdWdpbi12dWV0aWZ5XCI7XG5pbXBvcnQgcHJpc21qcyBmcm9tIFwidml0ZS1wbHVnaW4tcHJpc21qc1wiO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSBcIm5vZGU6dXJsXCI7XG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgaW5jbHVkZTogW1wiQGthbmdjL3YtbWQtZWRpdG9yL2xpYi90aGVtZS92dWVwcmVzcy5qc1wiXSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIHZ1ZXRpZnkoe1xuICAgICAgYXV0b0ltcG9ydDogdHJ1ZSxcbiAgICB9KSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFtcInZ1ZVwiLCBcInZ1ZS1yb3V0ZXJcIiwgXCJwaW5pYVwiXSxcbiAgICB9KSxcbiAgICBwcmlzbWpzKHtcbiAgICAgIGxhbmd1YWdlczogXCJhbGxcIixcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIn5cIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9cIiwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICBcIkBcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9zcmNcIiwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICBcIkBkYXRhXCI6IGZpbGVVUkxUb1BhdGgobmV3IFVSTChcIi4vc3JjL2RhdGFcIiwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgfSxcbiAgICBleHRlbnNpb25zOiBbXCIuanNcIiwgXCIuanNvblwiLCBcIi5qc3hcIiwgXCIubWpzXCIsIFwiLnRzXCIsIFwiLnRzeFwiLCBcIi52dWVcIl0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDgwMDAsXG4gIH0sXG4gIGNzczoge1xuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIHNjc3M6IHsgY2hhcnNldDogZmFsc2UgfSxcbiAgICAgIGNzczogeyBjaGFyc2V0OiBmYWxzZSB9LFxuICAgIH0sXG4gIH0sXG4gIGNhY2hlRGlyOiBcIi52aXRlX2NhY2hlXCIsXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1QsU0FBUyxvQkFBb0I7QUFDL1UsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sYUFBYTtBQUNwQixPQUFPLGFBQWE7QUFDcEIsU0FBUyxlQUFlLFdBQVc7QUFMNEosSUFBTSwyQ0FBMkM7QUFPaFAsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLDBDQUEwQztBQUFBLEVBQ3REO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixRQUFRO0FBQUEsTUFDTixZQUFZO0FBQUEsSUFDZCxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxTQUFTLENBQUMsT0FBTyxjQUFjLE9BQU87QUFBQSxJQUN4QyxDQUFDO0FBQUEsSUFDRCxRQUFRO0FBQUEsTUFDTixXQUFXO0FBQUEsSUFDYixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxNQUFNLHdDQUFlLENBQUM7QUFBQSxNQUNqRCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLE1BQ3BELFNBQVMsY0FBYyxJQUFJLElBQUksY0FBYyx3Q0FBZSxDQUFDO0FBQUEsSUFDL0Q7QUFBQSxJQUNBLFlBQVksQ0FBQyxPQUFPLFNBQVMsUUFBUSxRQUFRLE9BQU8sUUFBUSxNQUFNO0FBQUEsRUFDcEU7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNLEVBQUUsU0FBUyxNQUFNO0FBQUEsTUFDdkIsS0FBSyxFQUFFLFNBQVMsTUFBTTtBQUFBLElBQ3hCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsVUFBVTtBQUNaLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

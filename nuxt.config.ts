// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: process.env.NODE_ENV !== "development",
  components: {
    dirs: [
      {
        path: "~/components/global",
        global: true,
      },
    ],
  },
  vite: {
    plugins: [],
    // server: {
    //   proxy: {
    //     "/VsWeb/api": {
    //       target: "https://www.vscinemas.com.tw/",
    //       changeOrigin: true,
    //     },
    //   },
    // },
  },
});

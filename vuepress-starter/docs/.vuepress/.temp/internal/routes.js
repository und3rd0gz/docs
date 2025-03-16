export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/gmararash/Desktop/crpt/und3rg0gz.xyz/docs/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"und3rd0gz"} }],
  ["/docs/", { loader: () => import(/* webpackChunkName: "docs_index.html" */"/home/gmararash/Desktop/crpt/und3rg0gz.xyz/docs/vuepress-starter/docs/.vuepress/.temp/pages/docs/index.html.js"), meta: {"title":"Introduction"} }],
  ["/docs/products.html", { loader: () => import(/* webpackChunkName: "docs_products.html" */"/home/gmararash/Desktop/crpt/und3rg0gz.xyz/docs/vuepress-starter/docs/.vuepress/.temp/pages/docs/products.html.js"), meta: {"title":"Products"} }],
  ["/docs/research-meme.html", { loader: () => import(/* webpackChunkName: "docs_research-meme.html" */"/home/gmararash/Desktop/crpt/und3rg0gz.xyz/docs/vuepress-starter/docs/.vuepress/.temp/pages/docs/research-meme.html.js"), meta: {"title":"[Research] Meme-tokens AI predictions"} }],
  ["/docs/tech-meme.html", { loader: () => import(/* webpackChunkName: "docs_tech-meme.html" */"/home/gmararash/Desktop/crpt/und3rg0gz.xyz/docs/vuepress-starter/docs/.vuepress/.temp/pages/docs/tech-meme.html.js"), meta: {"title":"Tech-doc Meme-token AI predictions"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/gmararash/Desktop/crpt/und3rg0gz.xyz/docs/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

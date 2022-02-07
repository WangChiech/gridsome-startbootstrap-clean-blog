const c1 = () => import(/* webpackChunkName: "page--src-pages-post-vue" */ "E:\\GitHub-wj\\gridsome-startbootstrap-clean-blog\\src\\pages\\Post.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "E:\\GitHub-wj\\gridsome-startbootstrap-clean-blog\\src\\pages\\Contact.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "E:\\GitHub-wj\\gridsome-startbootstrap-clean-blog\\src\\pages\\About.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "E:\\GitHub-wj\\gridsome-startbootstrap-clean-blog\\node_modules\\gridsome\\app\\pages\\404.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "E:\\GitHub-wj\\gridsome-startbootstrap-clean-blog\\src\\pages\\Index.vue")

export default [
  {
    path: "/post/",
    component: c1
  },
  {
    path: "/contact/",
    component: c2
  },
  {
    path: "/about/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]

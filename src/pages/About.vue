<template>
  <Layout>
    <header
      class="masthead"
      :style="{'background-image': `url(http://101.35.2.170:1337${$page.allStrapiInfo.edges[0].node.aboutBgc.url})`}"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>About Me</h1>
              <span class="subheading">{{ $page.allStrapiInfo.edges[0].node.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7" v-html="toHtml($page.allStrapiInfo.edges[0].node.aboutMe)">
            
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<page-query>
query {
  allStrapiInfo {
    edges {
      node {
        title
        description
        aboutBgc {
          url
        }
        aboutMe
      }
    }
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'

export default {
  name: 'About',
  methods: {
    toHtml(content) {
      const md = new MarkdownIt()
      const result = md.render(content)
      return result
    }
  }
};
</script>

<style></style>

<template>
  <Layout>
    <header
      class="masthead"
      :style="{'background-image': `url(http://101.35.2.170:1337${$page.strapiPost.bgc.url})`}"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{ $page.strapiPost.title }}</h1>
              <span class="subheading">{{ $page.strapiPost.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <article class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7" v-html="toHtml($page.strapiPost.content)">
            
          </div>
        </div>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  strapiPost(id: $id) {
    title
    description
    content
    bgc {
      url
    }
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'

export default {
  name: 'Post',
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

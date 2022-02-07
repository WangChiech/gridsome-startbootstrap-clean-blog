<template>
  <Layout>
    <header
      class="masthead"
      :style="{'background-image': `url(http://101.35.2.170:1337${$page.allStrapiInfo.edges[0].node.tagsBgc.url})`}"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1># {{ $page.strapiTag.title }}</h1>
              <!-- <span class="subheading">A Blog Theme by Start Bootstrap</span> -->
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <!-- Post preview-->
          <div 
            class="post-preview"
            v-for="(item, index) in $page.strapiTag.posts"
            :key="item.id">
            <g-link :to="`post/${item.id}`">
              <h2 class="post-title">
                {{ item.title }}
              </h2>
              <h3 class="post-subtitle">
                {{ item.description }}
              </h3>
            </g-link>
            <p class="post-meta">
              Posted by
              <g-link to="/contact">{{ item.create_by }}</g-link>
              {{  item.created_at | dateFormat }}
            </p>
            <!-- Divider-->
            <hr v-if=" index < $page.strapiTag.posts - 1" class="my-4" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  strapiTag(id: $id) {
    title
    posts {
      id
      title
      description
      created_at
      create_by
      
    }
  },
  allStrapiInfo {
    edges {
      node {
        tagsBgc {
          url
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'

export default {
  name: 'Tag',
  components: {
    Pager
  }
};
</script>

<style>
.active--exact {
  color: #0085A1;
}
.pager a {
  padding-right: 12px;
}
</style>

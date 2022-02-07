<template>
  <Layout>
    <header
      class="masthead"
      :style="{'background-image': `url(http://101.35.2.170:1337${$page.allStrapiInfo.edges[0].node.homeBgc.url})`}"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{ $page.allStrapiInfo.edges[0].node.title }}</h1>
              <span class="subheading">{{ $page.allStrapiInfo.edges[0].node.description }}</span>
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
            v-for="(item, index) in $page.post.edges"
            :key="item.node.id">
            <g-link :to="`post/${item.node.id}`">
              <h2 class="post-title">
                {{ item.node.title }}
              </h2>
              <h3 class="post-subtitle">
                {{ item.node.description }}
              </h3>
            </g-link>
            <p class="post-meta">
              Posted by
              <g-link to="/contact">{{ item.node.create_by }}</g-link>
              {{  item.node.created_at | dateFormat }}
            </p>
            <p>
              <span v-for="tag in item.node.tags" :key="tag.id" class="tag-item">
                <g-link :to="`/tag/${tag.id}`">{{ tag.title }}</g-link>
              </span>
            </p>
            <!-- Divider-->
            <hr v-if=" index < $page.post.edges.length - 1" class="my-4" />
          </div>
          <Pager class="pager" :info="$page.post.pageInfo"/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($page: Int) {
  post: allStrapiPost(perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        description
        created_at
        create_by
        tags {
          id
          title
        }
      }
    }
  }
  allStrapiInfo {
    edges {
      node {
        title
        description
        homeBgc {
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
  name: 'Index',
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
.tag-item {
  padding-right: 12px;
}
</style>

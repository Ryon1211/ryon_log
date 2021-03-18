<template>
  <main>
    <div class="main-full-vh-top">
      <div class="container content-wrapper py-6">
        <p class="subtitle is-3 has-text-centered">Latest Posts</p>
        <ContentCard :posts="latestPosts" />
      </div>
      <div class="container is-flex is-justify-content-center pb-6">
        <nuxt-link 
          class="button is-outlined is-large px-6"
          to="/blog/page/1">
          もっと読む
        </nuxt-link>
      </div>
    </div>
    <Tags :tags="tags" />
  </main>
</template>

<script>
export default {
  async asyncData({ $getContent, $limit }) {
    const tags = await $getContent.getTags();
    const latestPosts = await $getContent.getPosts('blog',{ 
        limit: $limit.maxLimit,
    });

    return {
      tags,
      latestPosts
    }
  },

    data() {
      return {
        currentPage: Number(this.$route.params.page),
        noPosts: false,
      }
    },

    head() {
      return {
        title: 'Ryon Log',
        meta: [{
          hid: 'description',
          name: 'description',
          content: 'Ryon Logトップページ。Ryonが学習したことや日々のことなどを書くブログです。' }
        ],
      }
    },
  }
</script>
<template>
  <main>
    <div class="main-full-vh-content">
      <HeroHeader :title="headTitle" :description="headDescription" />
      <div class="container is-flex is-justify-content-center">
        <SearchForm />
      </div>
      <ContentContainer :noPosts="noPosts" :posts="posts" />
      <Pagination :lastPage="lastPage" :currentPage="currentPage" />
    </div>
    <Tags :tags="tags" />
    <Breadcrumb :props="currentPage"/>
  </main>
</template>

<script>
  export default {
    async asyncData({ $getContent, $limit, params }) {
      // 登録されているタグをすべて取得
      const tags = await $getContent.getTags();
      // 記事数を取得
      const countPosts = await $getContent.countPosts('blog');
      // 記事を１ページあたりの上限数(maxLimit)とページ数でオフセットして取得する
      const posts = await $getContent.getPosts('blog',{ 
          limit: $limit.maxLimit,
          skip: $limit.maxLimit * (params.page - 1)
      });

      return {
        lastPage: Math.ceil(countPosts / $limit.maxLimit),
        countPosts,
        tags,
        posts
      }
    },

    data() {
      return {
        headTitle: 'Blog',
        headDescription:'アウトプットから日々のことまでいろいろ',
        currentPage: Number(this.$route.params.page),
        noPosts: false,
      }
    },

    mounted() {
      this.noPosts = this.countPosts === 0 ? true : false;
    },

    head() {
      return {
        title: `Page${this.$route.params.page} | Ryon Log`,
        meta: [{
          hid: 'description',
          name: 'description',
          content: 'Ryon Log ブログ記事の一覧ページ。Ryonが学習したことのアウトプットや日々のことなどを書くブログです。' }
        ],
      }
    },
  }
</script>
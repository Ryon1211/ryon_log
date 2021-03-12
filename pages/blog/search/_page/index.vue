<template>
  <main class="main-full-vh">
    <div class="main-full-vh-content">
      <HeroHeader :title="headTitle" :description="headDescription" />
      <div class="container is-flex is-justify-content-center">
        <SearchForm :queryStr="queryStr"/>
      </div>
      <ContentContainer :noPosts="noPosts" :posts="posts" />
      <Pagination :lastPage="lastPage" :currentPage="currentPage" />
    </div>
    <Tags :tags="tags" />
    <Breadcrumb :props="queryStr" />
  </main>
</template>
<script>
export default {
  async asyncData( { $getContent } ) {
    // 登録されているタグをすべて取得
    const tags = await $getContent.getTags();
    
    return { tags }
  },

  data() {
    return {
      headTitle: '検索結果',
      headDescription: '',
      noPosts: false,
      queryStr: this.$route.query.s,
      currentPage: Number(this.$route.params.page),
      lastPage: 0,
      posts: {}
    }
  },

  watch: {
    queryStr() {
      this.getResult();
    }
  },

  watchQuery: true,

  methods: {
    async getResult() {
      const params = this.$route.params;
      this.changeDescription();

      // 記事数を取得
      const _countPosts = await this.$getContent.countPosts('blog', {'query': this.queryStr});
      // 記事を１ページあたりの上限数(maxLimit)とページ数でオフセットして取得する
      const posts = await this.$getContent.getPosts('blog',{ 
          limit: this.$limit.maxLimit,
          skip: this.$limit.maxLimit * (params.page - 1),
          'query': this.queryStr
      });
      
      if(!_countPosts){
        this.noPosts = true;
      }

      this.lastPage = Math.ceil(_countPosts / this.$limit.maxLimit);
      this.posts = posts;
    },

    changeDescription() {
      if(this.queryStr !== undefined){
        this.headDescription = `「${ this.queryStr }」の検索結果`;
      }
    }
  },

  head() {
    return {
      title: `${ this.queryStr }の検索結果 | Ryon Log`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: `Ryon Log ブログの検索結果ページ。検索キーワード「${ this.queryStr }」の検索結果です。` }
      ],
    }
  },

  created() {
    this.getResult();
  },
}
</script>
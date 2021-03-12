<template>
  <main class="main-full-vh">
    <div class="main-full-vh-content">
      <HeroHeader :title="headTitle" :description="headDescription" />
      <ContentContainer :noPosts="noPosts" :posts="posts" />
      <Pagination :lastPage="lastPage" :currentPage="currentPage" />
    </div>
    <Tags :tags="tags" />
    <Breadcrumb :props="tag" />
  </main>
</template>

<script>
export default {
  async asyncData({ $getContent, $limit, params }) {
    // 登録されているタグをすべて取得
    const tags = await $getContent.getTags();

    // タグをslugから指定して、タグの情報を取得
    const tagInfo = await $getContent.getTagInfo({
      'fields.slug': params.slug
    });

    // 記事数を取得
    const countPosts = await $getContent.countPosts('blog', {
        // 記事に登録されているタグのIDで条件指定
        'fields.tags.sys.id': tagInfo.sys.id,
    });

    // タグ情報をもとに記事を取得
    const posts = await $getContent.getPosts('blog', {
        limit: $limit.maxLimit,
        skip: $limit.maxLimit * (params.page - 1),
        // 記事に登録されているタグのIDで条件指定
        'fields.tags.sys.id': tagInfo.sys.id
      });

  return {
      lastPage: Math.ceil(countPosts / $limit.maxLimit),
      countPosts,
      posts,
      tags,
      tag: tagInfo
    }
  },

  data() {
    return {
      headTitle: '',
      headDescription: 'Tagで記事を絞り込んでいます',
      currentPage: Number(this.$route.params.page),
      noPosts: false,
    }
  },

  mounted() {
      this.noPosts = this.countPosts === 0 ? true : false;
      this.headTitle = this.tag.fields.name;
  },
  
  head() {
    return {
      title: ` Tag検索 ${ this.tag.fields.name } | Ryon Log`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: `Ryon Log ブログのタグ検索ページ。「${ this.tag.fields.name }」の検索結果です。`}
      ],
    }
  },
}
</script>

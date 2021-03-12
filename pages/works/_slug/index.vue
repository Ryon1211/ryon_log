<template>
  <main>
    <div class="main-full-vh">
      <ArticleHeadBanner :post="post" />
      <ArticleTitle :post="post" />
      <ArticleContainer :post="post" />
    </div>
    <Breadcrumb :props="post"/>
  </main>
</template>

<script>
export default {
  async asyncData( { $getContent, params } ) {
    const post = await $getContent.getPost('works', { 'fields.slug': params.slug });
    return { post }
  },

  head() {
    return {
      title: `${ this.post.fields.title } | Ryon Log`,
      meta: [
        {
          hid: 'description', 
          name: 'description',
          content: `${ this.post.fields.metaDescription }` 
        }
      ],
    }
  },
}
</script>

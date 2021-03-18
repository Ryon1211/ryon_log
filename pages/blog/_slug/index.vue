<template>
  <main>
    <div class="main-full-vh-content">
      <ArticleHeadBanner :post="post" />
      <ArticleTitle :post="post" />
      <ArticleContainer :post="post" />
    </div>
    <Tags :tags="tags" />
    <Breadcrumb :props="post" />
  </main>
</template>

<script>
export default {
  async asyncData( { $getContent, params } ) {
    const post = await $getContent.getPost('blog', { 'fields.slug': params.slug });
    const tags = await $getContent.getTags();

    return {
      post,
      tags
    }
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

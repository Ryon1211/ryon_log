<template>
  <div class="container">
    <div class="columns is-justify-content-center">
      <div class="column is-8">   
        <div class="menu section">
          <p class="menu-label">目次</p>
          <div class="menu-list is-6" v-html="$md.render(post.fields.outline)"></div>
        </div>
        <div class="blog-content section" v-html="$md.render(post.fields.article)"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>
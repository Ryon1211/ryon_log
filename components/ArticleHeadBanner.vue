<template>
  <div class="container">
    <div class="columns is-justify-content-center">
      <div class="column is-8">
        <figure class="image is-3by1">
          <img class="is-objectfit" :alt="post.fields.headBanner.fields.description" :src="$assetUrl(post.fields.headBanner)">
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>
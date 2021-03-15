<template>
  <div v-if="posts" class="columns is-flex-wrap-wrap is-align-items-stretch">
    <div v-for="(post, index) in posts" :key="index" class="column is-one-quarter">
      <div class="card pb-3 blog-card-h100p hover-effect-card">
          <nuxt-link :to="`/works/${post.fields.slug}`">
            <div class="card-image">
              <figure class="image is-3by1">
                <img class="is-objectfit" :src="$assetUrl(post.fields.headBanner)" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-4 has-text-black">{{ post.fields.title }}</p>
              <div class="content">
                <p class="has-text-black block">{{ post.fields.subTitle }}</p>
              </div>
              <p class="has-text-black mb-3">使用した主な技術</p>
              <div class="content tags mx-4">
                <span class="tag is-light has-text-dark" v-for="item in post.fields.technology" :key="item">
                  {{ item }}
                </span>
              </div>
            </div>
          </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['posts'],
}
</script>
<template>
  <div v-if="posts" class="columns is-flex-wrap-wrap is-align-items-stretch">
    <div v-for="(post, index) in posts" :key="index" class="column is-one-quarter">
      <div class="card pb-3 blog-card-h100p hover-effect-card">
          <nuxt-link :to="`/blog/${post.fields.slug}`">
            <div class="card-image">
              <figure class="image is-16by9">
                <img class="is-objectfit" :src="$assetUrl(post.fields.headBanner)" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <p class="has-text-black">
                  <fa :icon="['far','edit']" area-hidden="true" />
                  {{ $dateParse(post.fields.createDate) }}
                </p>
                <p class="title is-4 has-text-black">{{ post.fields.title }}</p>
              </div>
            </div>
          </nuxt-link>
            <div class="content tags mx-4">
              <span class="tag is-light hover-effect-tag" v-for="tag in post.fields.tags" :key="tag.fields.name">
                  <nuxt-link :to="`/blog/tags/${tag.fields.slug}/1`" class="has-text-dark">{{ tag.fields.name }}</nuxt-link>
              </span>
            </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['posts'],
}
</script>
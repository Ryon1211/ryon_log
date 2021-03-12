<template>
  <div class="hero is-white">
    <div class="hero-body">
      <div class="container">
        <ul class="buttons mt-5 is-justify-content-center">
            <li class="button is-outlined is-small" v-for="tag in tags" :key="tag.fields.name">
              <nuxt-link :to="`/blog/tags/${tag.fields.slug}/1`">
                {{ tag.fields.name }}
              </nuxt-link>
            </li>
        </ul>
        </div>  
    </div>
  </div>
</template>
<script>
export default {
  props:['tags'],
}
</script>
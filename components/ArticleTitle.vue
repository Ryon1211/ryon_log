<template>
      <div class="container">
        <div class="columns is-justify-content-center">
          <div class="column is-8 section">   
            <h1 class="title is-3">{{ post.fields.title }}</h1>
            <p class="subtitle is-4">{{ post.fields.subTitle }}</p>
            <div>
              <span>                  
                <fa class="blog-icon" :icon="['far','edit']" size="xs" area-hidden="true" />
                {{ $dateParse(post.fields.createDate) }}
              </span>
              <span class="ml-6" v-if="post.fields.updateDate">
                <fa class="blog-icon" :icon="['fas','redo']" size="xs" area-hidden="true" />
                {{ $dateParse(post.fields.updateDate) }}
              </span>
            </div>
            <template v-if="post.fields.tags">
              <ul class="buttons mt-5">
                <li class="button is-outlined is-small" v-for="tag in post.fields.tags" :key="tag.fields.name">
                  <nuxt-link :to="`/blog/tags/${tag.fields.slug}`">{{ tag.fields.name }}</nuxt-link>
                </li>
              </ul>
            </template>
            <template v-if="post.fields.technology">
              <p class="mt-4 mb-2">使用した主な技術</p>
              <ul class="buttons works-tech">
                <li class="button is-outlined is-small" v-for="item in post.fields.technology" :key="item">
                  {{ item }}
                </li>
              </ul>
            </template>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  props:['post']
}
</script>
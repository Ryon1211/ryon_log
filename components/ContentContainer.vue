<template>
    <div class="container content-wrapper">
      <template v-if="!noPosts">
        <ContentCard :posts="posts" />
      </template>
      <template v-if="noPosts">
        記事がありません
      </template>
    </div>
</template>

<script>
export default {
  props:['noPosts', 'posts']
}
</script>
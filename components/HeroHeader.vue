<template>
  <div class="hero is-narrow is-light is-bold">
    <div class="hero-body">
      <div class="container">
        <p class="subtitle is-3 has-text-centered">{{ title }}</p>
        <p class="has-text-centered">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title','description'],
}
</script>
<template>
    <div v-if="!$store.state.isMobile" class="container">
      <nav class="breadcrumb breadcrumb-fontsize px-6 py-2" aria-label="breadcrumbs">
        <ul>
          <li><nuxt-link class="" to="/">Home</nuxt-link></li>
          <li v-for="location in locations" :key="location.name">
            <template v-if="location.path">
              <nuxt-link :to="location.path" class="text-hidden-overflow">{{ location.name }}</nuxt-link>
            </template>
            <template v-if="!location.path">
              <span class="px-3 text-hidden-overflow">{{ location.name }}</span>
            </template>
          </li>
        </ul>
      </nav>
    </div>
</template>
<script>
export default {
  props: ['props'],

  data() {
    return {
      locations: []
    }
  },

  watch: {
    props() {
      this.breadCrumb
    }
  },

  computed: {
    breadCrumb(){
      const routeName = this.$route.name;

      this.locations = [];

      if(routeName === "profile") {
        this.locations.push(
          { name: "Profile", path: "" });

      }else if(routeName === "blog-page-page") {
          this.locations.push(
            { name: "Blog", path: "/blog/page/1" },
            { name: `Page ${ this.props }`, path: '' });

      }else if(routeName === "blog-slug") {
          this.locations.push(
            { name: "Blog", path: "/blog/page/1" },
            { name: this.props.fields.title, path: '' });

      }else if(routeName === "blog-tags-slug-page") {
          this.locations.push(
            { name: "Blog", path: "/blog/page/1" },
            { name: this.props.fields.name, path: '' });

      }else if(routeName === "blog-search-page") {
          this.locations.push(
            { name: "Blog", path: "/blog/page/1" },
            { name: `「${ this.props }」の検索結果`, path: '' });

      }else if(routeName === "works-slug") {
          this.locations.push(
            { name: "Profile", path: "/profile" },
            { name: this.props.fields.title, path: '' });
      }
    }
  },
  
  mounted() {
    this.breadCrumb
  }
}
</script>
<template>
  <div class="blog-search">
    <div class="control has-icons-left">
      <input 
        v-model="searchText" 
        @keydown.enter="submit($event.keyCode)" 
        class="input" 
        type="text" 
        placeholder="Search">
      <span class="icon is-small is-left">
        <fa :icon="['fas','search']" area-hidden="true" />
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props:[ 'queryStr' ],
  data() {
    return {
      searchText: this.queryStr === '' ? '' : this.queryStr 
    }
  },

  methods: {
    submit(keyCode) {
      if(keyCode === 13){
        const qu = this.$route.query ? this.$route.query.s : null;
        let formData = this.searchText.trim();

        if(formData && formData !== qu){
          this.$router.push({ path: '/blog/search/1', query: { s: formData } });
        }
        return;
      }
    }
  }
}
</script>
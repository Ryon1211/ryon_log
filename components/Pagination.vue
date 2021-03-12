<template>
  <div class="container content-wrapper">
    <nav 
      v-if="lastPage !== 0" 
      class="pagination is-rounded is-middle" 
      role="navigation" 
      aria-label="pagination">

      <nuxt-link 
        v-if="currentPage !== 1" 
        :to="`${ path }/${ currentPage - 1 }`" 
        class="pagination-previous">Prev</nuxt-link>

      <nuxt-link
        v-if="this.$route.params.page !== String(this.lastPage)" 
        :to="`${ path }/${ currentPage + 1 }`" 
        class="pagination-next">Next</nuxt-link>

      <ul class="pagination-list">
        <li v-for="i of this.firstPageBlock" :key="i">
          <nuxt-link :to="`${ path }/${ i }`" 
            :class="[ currentPage === i ? 'is-current': '']" 
            class="pagination-link" 
            aria-label="Goto page 1">{{ i }}</nuxt-link>
        </li>
        <li v-if="frontDot">...</li>
        <li v-for="i of this.secondPageBlock" :key="i">
          <nuxt-link :to="`${ path }/${ i }`" 
            :class="[ currentPage === i ? 'is-current': '']" 
            class="pagination-link" 
            :aria-label="`Goto page ${i}`">{{ i }}</nuxt-link>
        </li>
        <li v-if="endDot">...</li>
        <li v-for="i of this.endPageBlock" :key="i">
          <nuxt-link :to="`${ path }/${ i }`" 
            :class="[ currentPage === i ? 'is-current': '']" 
            class="pagination-link" 
            :aria-label="`Goto page ${i}`">{{ i }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: [
    'lastPage',
    'currentPage'
  ],
  
  data() {
    return {
      path: this.$route.path.replace(`/${this.$route.params.page}`,''),
      frontDot: false,
      endDot: false,
      range: 5
    }
  },
  
  methods: {
    calcPageNums(start, end) {
      const pageNums = [];
      for (let i = start; i <= end; i++) {
        if(i !== "" && 0 < i){
          pageNums.push(i);
        }
      }
      return pageNums;
    }
  },

  computed: {
    firstPageBlock() {
      return this.calcPageNums(1,1);
    },
    secondPageBlock() {
      let start = "";
      let end = "";

      if (this.currentPage < this.range - 1) {
        // 後方の…
          if(this.range < this.lastPage) {
            this.endDot = true;
            end = this.range -1;
          }else {
            end = this.lastPage - 1;
          }

          start = 2;

      } else if(this.currentPage > this.lastPage - 2) {
          if(this.range < this.lastPage) {
            this.frontDot = true;
            start = this.lastPage -3;
          }else {
            start = 2;
          }

          end = this.lastPage - 1;

      } else {
          this.frontDot = true;
          this.endDot = true;
          start = this.currentPage - Math.floor(this.range / 3);
          end = this.currentPage + Math.floor(this.range / 3);
      }
      
      return this.calcPageNums(start,end);
    },
    endPageBlock() {
      if(1 < this.lastPage){
        return this.calcPageNums(this.lastPage, this.lastPage);
      }
    }
  }
}
</script>
<template>
  <header class="is-relative">
    <nav class="navbar has-shadow is-spaced">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link to="/">
            <span class="title pl-3" style="line-height: normal">{{ this.title }}</span>
          </nuxt-link>
          <a @click.prevent="isMenuActive = !isMenuActive" 
            :class="[ isMobile && isMenuActive ? 'is-active': '']" 
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu" :class="[ isMobile && isMenuActive ? 'is-active': '']">
          <ul class="navbar-end">
            <li v-for="item in this.items" :key="item.title">
              <nuxt-link
                :to="item.to"
                @click.native.prevent="roterPush"
                event="" 
                class="navbar-item"
               >
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </header>
</template>
<script>
  export default {
    props:['isMobile'],
    data(){
      return {
        isMenuActive: false,
        title: 'Ryon Log',
        items: [
          {
            title: 'Blog',
            to: '/blog/page/1'
          },
          {
            title: 'Profile',
            to: '/profile'
          }
        ],  
      }
    },

    methods: {
      roterPush(event) {
        if(this.isMobile) {
          this.$router.push({ path: event.target.pathname })
          this.isMenuActive = false;

        } else {
          this.$router.push({ path: event.target.pathname })
        }
      },
    }
  }
</script>
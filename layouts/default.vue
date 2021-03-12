<template>
  <div>
    <Header :isMobile=isMobile />
    <Nuxt />
    <Footer />
  </div>  
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
    }
  },
  methods: {
    widthHandler() {
      this.isMobile = window.innerWidth <= 1023 ? true : false
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener('resize', this.widthHandler)
      this.widthHandler();
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('resize', this.widthHandler)
    }
  },
  head() {
    return {
      title: 'Ryon Log',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Ryonが学習したことや日々のことなどを書く予定のブログ。それがRyon Logです。' 
        }
      ]
    }
  }
}
</script>
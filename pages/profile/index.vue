<template>
  <main>
    <div class="main-full-vh">
      <HeroHeader :title="headTitle" :description="headDescription" />
      <div class="container py-6">
        <div class="column is-flex is-flex-direction-column is-align-items-center">
          <div class="image is-128x128 block">
            <img class="is-rounded" src="~/assets/images/icon.png" alt="" style="background-color: rgb(186 230 234)">
          </div>
          <p class="block">
            Ryon
          </p>
          <p class="block">
            Webエンジニアへのジョブチェンジを目標にプログラミングを学習中です。<br>
            学習したことのアウトプットと自分用メモとしてこのブログを作りました。<br>
            九州出身で現在は試される大地にてWeb系とは畑違いのお仕事してます。
          </p>
          <div class="block">
            <fa class="blog-icon" :icon="['fab','github']" size="2x" area-hidden="true" />
          </div>
        </div>
      </div>
      <div class="container content-wrapper">
        <p class="subtitle is-3 has-text-centered">今まで作ったもの</p>
        <template v-if="!noPosts">
          <WorksCard :posts="posts" />
        </template>
        <template v-if="noPosts">
          記事がありません
        </template>
      </div>   
    </div>
    <Breadcrumb />
  </main>
</template>

<script>
  export default {
    async asyncData({ $getContent }) {
      // 記事数を取得
      const countPosts = await $getContent.countPosts('works');

      // 記事一覧の取得
      const posts = await $getContent.getPosts('works',{ 
        select: 'fields.slug,fields.title,fields.subTitle,fields.technology,fields.headBanner',
      });

      return {
        countPosts,
        posts
      }
    },

    data() {
      return {
        headTitle: 'Profile',
        headDescription: 'Ryonについて',
        noPosts: false
      }
    },

    mounted() {
      this.noPosts = this.countPosts === 0 ? true : false;
    },

    head() {
      return {
        title:  'Profile | Ryon Log',
        meta: [{
        hid: 'description',
        name: 'description',
        content: 'Ryonについてのページ。' }
      ],
    }
  }
}
</script>
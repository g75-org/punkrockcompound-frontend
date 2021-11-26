<template>
  <div>
    <section>
      <h1>{{ post.title }}</h1>
      <p>{{ post.description }}</p>
      <nuxt-content :document="post"></nuxt-content>
      <!-- security issue  -->
      <br />
      <hr />
      <br />

      <div v-html="mdBio"></div>
      <!-- <div>{{ mdBio }}</div> -->
    </section>
    <!-- <pre>{{ posts }}</pre> -->
  </div>
</template>

<script>
// localhost:1337/bands/11
export default {
  async asyncData({ $axios, $md, $content }) {
    // console.log('this is running')
    const post = await $content('hello').fetch()
    const bands = await $axios.$get('http://localhost:1337/bands/11')
    const mdBio = $md.render(bands.bio)
    // console.log('this is here in the md ', posts)
    // console.log('is there bands ', bands)
    return {
      bands,
      mdBio,
      post,
    }
  },
}
</script>

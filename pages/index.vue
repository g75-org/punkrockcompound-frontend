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
  // do not have a data end point yet
}
</script>

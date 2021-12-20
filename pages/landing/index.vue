<template>
  <div>
    <section class="relative">
      <img
        class="object-fill w-screen h-2/5"
        :src="`http://localhost:1337${featured.coverMain[0].url}`"
        alt="ablum cover"
      />
      <section
        class="absolute bottom-0 left-0 text-white bg-black opacity-80 w-screen px-4 py-4 shad"
      >
        <h2>{{ featured.name }}</h2>
      </section>
    </section>
    <SongPlayer :album="album" />
    <MobileSlider :bandsInSlider="bandsInSlider" />
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi }) {
    const bands = await $strapi.find('bands')
    // Gets a random band from the bands array
    // const featured = bands[Math.floor(Math.random() * bands.length)]
    const featured = bands[0]
    // Picks out an album from the featured band
    const album = featured.albums[0]
    // filters out the featured band from the slider
    const bandsInSlider = bands.filter((b) => {
      return b.name !== featured.name
    })
    // now to get the audio player going

    return {
      bands,
      featured,
      bandsInSlider,
      album,
    }
  },
  data() {
    return {
      message: 'hello',
    }
  },
}
</script>

<style land="css" scoped>
* {
  box-sizing: border-box;
}
</style>

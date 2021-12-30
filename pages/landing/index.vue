<template>
  <div>
    <section class="relative">
      <LiveLink style="z-index: 999999999999999" />
      <img
        class="object-fill w-screen h-2/5"
        :src="`http://localhost:1337${featured.coverMainUrl}`"
        alt="ablum cover"
      />
      <section
        class="absolute bottom-0 left-0 text-white bg-black opacity-80 w-screen px-4 py-4 shad"
      >
        <h2>{{ featured.name }}</h2>
      </section>
    </section>
    <SongPlayer
      :suffulePlay="true"
      :albumPlayer="false"
      title="coming up next"
      :album="album"
    />
    <MobileSlider :bandsInSlider="bandsInSlider" />
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi }) {
    const userProfileId = await $strapi.user
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
      userProfileId,
    }
  },
  data() {
    return {
      bandId: null,
      message: 'hello',
    }
  },
  mounted() {
    this.bandId = this.$strapi.user.band
  },
}
</script>

<style land="css" scoped>
* {
  box-sizing: border-box;
}
</style>

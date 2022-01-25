<template>
  <div>
    <section v-if="featured" class="relative">
      <LiveLink style="z-index: 999999999999999" />
      <img
        class="object-fill w-screen h-2/5"
        :src="`${featured.coverMainUrl}`"
        alt="ablum cover"
      />
      <section
        class="absolute bottom-0 left-0 text-white bg-black opacity-80 w-screen px-4 py-4 shad"
      >
        <h2>{{ featured.name }}</h2>
      </section>
    </section>
    <SongPlayer
      v-if="featured && album"
      :suffulePlay="true"
      :albumPlayer="false"
      title="coming up next"
      :album="album"
    />
    <MobileSlider :sliderContent="sliderContent" />
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi }) {
    const userProfileId = await $strapi.user

    const bands = await $strapi.find('bands')
    // Gets a random band from the bands array
    // const featured = bands[Math.floor(Math.random() * bands.length)]
    const featured = bands[0] || null
    // Picks out an album from the featured band
    const album = featured?.albums[0] || null
    // filters out the featured band from the slider
    const sliderContent = bands
      .filter((b) => b.name !== featured.name)
      .map((slider) => {
        return {
          // id: slider.id,
          name: slider.name,
          src: slider.coverMainUrl,
        }
      })
    // now to get the audio player going

    return {
      bands,
      featured,
      sliderContent,
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
    if (this.userProfileId) {
      this.bandId = this.userProfileId.band
    } else {
      console.log('there is no user logged in to the system yet')
    }
  },
}
</script>

<style land="css" scoped>
* {
  box-sizing: border-box;
}
</style>

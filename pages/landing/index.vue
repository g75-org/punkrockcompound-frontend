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
    <section class="px-4">
      <h2>View Bands</h2>
      <carousel :perPageCustom="[[300, 1]]">
        <slide v-for="(band, index) in bandsInSlider" :key="index">
          <div class="p-1">
            <img
              style="height: 250px"
              class="object-cover w-full"
              :src="`http://localhost:1337${band.coverMain[0].url}`"
              alt=""
            />
            <div class="w-full h-14 bg-black p-4">
              <p class="text-green-400 mt-0 text-lg">{{ band.name }}</p>
            </div>
          </div>
        </slide>
      </carousel>
    </section>
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

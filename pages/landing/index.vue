<template>
  <!-- This is the image and the band title gotten from the featured band cover and title  -->
  <div>
    <section class="relative">
      <img
        style="min-height: 40vh"
        :src="`http://localhost:1337${featured.albums[0].Cover.url}`"
        alt="ablum cover"
        class="object-fill w-screen"
      />
      <section
        class="absolute bottom-0 left-0 text-white bg-black opacity-80 w-screen px-4 py-4 shad"
      >
        <h2>{{ featured.name }}</h2>
      </section>
    </section>

    <!-- ========================This is the image and the band title gotten from the featured band cover and title  the en -->
    <!-- song player ============ -->
    <section class="bg-white py-6 px-4 w-screen">
      <div class="w-screen max-w-full">
        <p class="m-0 p-0">{{ album.songs[0].songTitle }}</p>
      </div>
      <div class="flex items-center pt-2 gap-3">
        <div class="flex-grow">
          <img style="height: 20px" src="/play.svg" alt="" />
        </div>
        <div class="w-5/6 bg-red-700 h-1"></div>
        <div class="flex-grow">
          <img style="height: 10px" src="/fast-forward.svg" alt="" />
        </div>
      </div>
    </section>
    <!-- here is the problem -->
    <section class="bg-white">
      <div class="w-full mt-6 h-auto shadow-sm">
        <h6 class="pl-4">Coming up next</h6>
        <div v-for="song in album.songs" :key="song.id" class="w-full">
          <div
            class="flex justify-start w-screen items-center justify-self-start"
          >
            <img
              style="height: 10px; justify-self: flex-start"
              src="play.svg"
              alt=""
              class="px-4"
            />
            <p class="py-2 mt-0">{{ song.songTitle }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- The vue plugin is client only and does not work on the server side rendering ... look at the docs -->
    <!-- Slider is for user to see the bands and should be wraped in a nuxt link to link to the band page -->
    <section class="px-4">
      <h2>View Bands</h2>

      <!-- want the styles to be mobile only 300px -->
      <carousel :perPageCustom="[[300, 1]]">
        <slide>
          <div class="p-1">
            <img
              style="height: 300px; width: 500px"
              src="weezer_cover.jpeg"
              alt=""
            />
          </div>
        </slide>
        <slide>
          <div class="p-1">
            <img src="weezer_cover.jpeg" alt="" />
          </div>
        </slide>
        <slide>
          <div class="p-1">
            <img src="weezer_cover.jpeg" alt="" />
          </div>
        </slide>
        <slide>
          <div class="p-1">
            <img src="weezer_cover.jpeg" alt="" />
          </div>
        </slide>
      </carousel>
    </section>
    <!-- filler section to give space -->
    <section class="py-10 w-screen h-24">
      <h4>Hello this is filler text</h4>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi }) {
    const bands = await $strapi.find('bands')
    // const featured = bands[Math.floor(Math.random() * bands.length)]

    const featured = bands[0]
    const album = featured.albums[0]

    return {
      bands,
      featured,
      album,
    }
  },
  data() {
    return {
      name: 'nick',
      music: null,
      featured: null,
    }
  },
}
</script>

<style land="css" scoped>
* {
  box-sizing: border-box;
}
</style>

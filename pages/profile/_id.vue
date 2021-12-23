<template>
  <div>
    <section
      style="z-index: -999"
      class="h-96 relative flex justify-center items-end"
    >
      <img
        class="absolute top-0 left-0 object-cover w-full h-full"
        :src="`http://localhost:1337${band.coverMain[0].url}`"
        alt=""
      />
      <!-- <div
        class="background_color_opacity absolute bottom-0 flex justify-center items-center h-20 left-0 w-full"
      > -->
      <p class="z-10 font-extrabold text-7xl text-center text-white mt-0 pb-24">
        {{ band.name }}
      </p>
      <!-- </div> -->
    </section>
    <!-- This is the bio section -->
    <section class="h-full w-full">
      <!-- bio card -->
      <section
        style="margin-top: -50px"
        class="w-11/12 bg-black shadow-2xl text-white px-8 py-8 z-50 mx-auto"
      >
        <h2 class="font-bold">Bio</h2>
        <p class="text-white">{{ band.bio }}</p>
      </section>
    </section>
    <!-- Additional Information -->
    <section class="px-4">
      <h4>Band Info</h4>
      <!-- container for the list items -->
      <div class="flex">
        <h6 class="flex-1">Members</h6>
        <div class="flex-1">
          <span v-for="member in members" :key="member">{{ member }},</span>
        </div>
      </div>
      <!-- genre -->
      <div class="flex">
        <h6 class="flex-1">Genre</h6>
        <div class="flex-1">
          <p>{{ genre }}</p>
        </div>
      </div>
      <!-- container for the list items -->
      <div class="flex pt-4">
        <h6 class="flex-1 mt-0">Links</h6>
        <div class="flex-1">
          <nuxt-link to="/" v-for="link in links" :key="link">
            {{ link.text }},</nuxt-link
          >
        </div>
      </div>
    </section>
    <!-- Put the album slider here  -->
    <section class="px-4 pt-8">
      <h3 class="font-bold">Albums</h3>
      <carousel :perPageCustom="[[300, 1]]">
        <slide v-for="album in band.albums" :key="album.id">
          <nuxt-link :to="`/profile/${album.id}`">
            <div class="p-1">
              <img
                style="height: 250px"
                class="object-cover w-full"
                :src="`http://localhost:1337${album.Cover.url}`"
                alt=""
              />
              <div class="w-full h-14 bg-black p-4">
                <p class="text-green-400 mt-0 text-lg">{{ album.title }}</p>
              </div>
            </div>
          </nuxt-link>
        </slide>
      </carousel>
    </section>
    <!-- Video Slider  -->
    <section class="px-4">
      <h3 class="font-bold">Videos</h3>
      <carousel :perPageCustom="[[300, 1]]">
        <slide v-for="album in band.albums" :key="album.id">
          <nuxt-link :to="`/profile/${album.id}`">
            <div class="p-1">
              <img
                style="height: 250px"
                class="object-cover w-full"
                :src="`http://localhost:1337${album.Cover.url}`"
                alt=""
              />
              <div class="w-full h-14 bg-black p-4">
                <p class="text-green-400 mt-0 text-lg">{{ album.title }}</p>
              </div>
            </div>
          </nuxt-link>
        </slide>
      </carousel>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi, params }) {
    const band = await $strapi.findOne('bands', params.id) // When calling /abc the slug will be "abc"
    return { band }
  },
  data() {
    return {
      members: ['Jack Richards', 'Peter Michales', 'Rod Dick', 'Nick Rogers'],
      genre: 'Punk Rock',
      upcomingEvents: [
        'At the Dean Oct 1 7:00pm',
        'The Wicked Nov 10 7:00pm',
        'At the Dean Oct 1 7:00pm',
      ],
      links: [
        {
          text: 'thepunks.com',
          link: 'https:google.com',
          icon: 'web.svg',
        },
        {
          text: 'facebook.com',
          link: 'https:google.com',
          icon: 'facebook.svg',
        },
        {
          text: 'twiiter',
          link: 'https:google.com',
          icon: 'twitter.svg',
        },
      ],
    }
  },
}
</script>

<style scoped>
.background_color_opacity {
  background: rgb(0 0 0 / 71%);
}
</style>

<template>
  <section class="px-4">
    <h2>View Bands</h2>

    <carousel :perPageCustom="[[300, 1]]">
      <slide v-for="band in bandsInSlider" :key="band.id">
        <nuxt-link :to="`/profile/${band.id}`">
          <div class="p-1">
            <img
              style="height: 250px"
              class="object-cover w-full"
              :src="`http://localhost:1337${band.coverMainUrl}`"
              alt=""
            />
            <div class="w-full h-14 bg-black p-4">
              <p class="text-green-400 mt-0 text-lg">{{ band.name }}</p>
            </div>
          </div>
        </nuxt-link>
      </slide>
    </carousel>
  </section>
</template>

<script>
export default {
  props: {
    bandsInSlider: {
      Type: Object || Array,
      required: true,
    },
  },
}
</script>

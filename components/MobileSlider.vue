<template>
  <section class="px-4">
    <h2>View Bands</h2>

    <carousel :perPageCustom="[[300, 1]]">
      <slide v-for="(content, i) in sliderContent" :key="i">
        <nuxt-link v-if="content.id" :to="`/profile/${content.id}`">
          <div class="p-1">
            <img
              style="height: 250px"
              class="object-cover w-full"
              :src="`${content.src}`"
              alt=""
            />
            <div class="w-full h-14 bg-black p-4">
              <p class="text-green-400 mt-0 text-lg">{{ content.name }}</p>
            </div>
          </div>
        </nuxt-link>
        <div v-else>
          <div class="p-1">
            <img
              style="height: 250px"
              class="object-cover w-full"
              :src="`${content.src}`"
              alt=""
            />
            <div class="w-full h-14 bg-black p-4">
              <p class="text-green-400 mt-0 text-lg">{{ content.name }}</p>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </section>
</template>

<script>
export default {
  props: {
    sliderContent: {
      Type: Object || Array,
      required: true,
    },
  },
}
</script>

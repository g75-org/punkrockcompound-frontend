<template>
  <div>
    <div
      v-if="primary == true"
      class="text-accent bg-primary px-6 py-2 inline-block shadow-md"
      :class="{ slant: slant }"
    >
      {{ title }}
    </div>
    <div
      v-else-if="secondary == true"
      class="text-black bg-white border border-black px-6 py-2 inline-block shadow-md"
      :class="{ slant: slant }"
    >
      {{ title }}
    </div>

    <div
      v-else-if="round == true"
      class="flex justify-center items-center text-5xl shadow-lg text-white"
      style="height: 70px; width: 70px; background: red; border-radius: 50%"
    >
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      defalut: () => 'Button',
    },
    round: {
      type: Boolean,
      required: false,
      defalut: () => false,
    },
    primary: {
      type: Boolean,
      required: false,
      defalut: () => false,
    },
    secondary: {
      type: Boolean,
      required: false,
      defalut: () => false,
    },
    slant: {
      type: Boolean,
      required: true,
      defalut: () => false,
    },
    color: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>

<style scoped>
.slant {
  transform: rotate(-2deg);
}
</style>

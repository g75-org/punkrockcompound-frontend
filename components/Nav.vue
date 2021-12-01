<template>
  <div class="w-screen p-4 flex items-center">
    <!-- mobile view -->
    <div class="flex items-center">
      <div class="pr-2">
        <img
          style="height: 50px; width: 50px"
          src="/logo_icon.svg"
          alt="punk rock compound icon"
        />
      </div>
      <div :class="{ blackTitle: isOpen, whiteTitle: !isOpen }">
        Punk Rock Compound
      </div>
    </div>
    <div
      @click="toggleMenu"
      class="transition-all flex-grow justify-center flex flex-col items-end z-20"
    >
      <div
        style="height: 4px"
        class="menu w-10 bg-black"
        :class="{ openOne: isOpen, close: !isOpen }"
      ></div>
      <div
        style="height: 4px"
        class="w-10 bg-black"
        :class="{ openTwo: isOpen, close: !isOpen }"
      ></div>
      <div
        style="height: 4px"
        class="w-10 bg-black"
        :class="{ openHide: isOpen }"
      ></div>
    </div>
    <!-- mobile slide in menu -->
    <!-- end of mobile vue -->

    <!-- <nav class="hidden lg:block">
      <ul>
        <li>link one</li>
        <li>link one</li>
        <li>link one</li>
        <li>link one</li>
        <li>link one</li>
      </ul>
    </nav> -->
    <section
      :class="{ modal: isOpen, closeMenu: !isOpen }"
      class="flex flex-col justify-around items-center py-10"
    >
      <p style="color: white">Home</p>
      <p style="color: white">Radio</p>
      <p style="color: white">Music videos</p>
      <p style="color: white">News</p>
      <p style="color: white">Login / Signup</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style scoped>
.bottom_box {
  position: fixed;
  bottom: 0;
  left: 0;
  background: red;
  color: black;
  height: 60px;
  width: 100vw;
  z-index: -8;
}
.blackTitle {
  color: white;
}

.whiteTitle {
  color: black;
}
.modal {
  transition: all;
  transition-duration: 1s;
  background-color: black;
  position: absolute;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  opacity: 1;
  z-index: -9;
}
.openOne {
  transition: all;
  transition-duration: 500ms;
  margin-bottom: -4px;
  transform: rotate(45deg);
  background-color: white;
}
.openTwo {
  transition: all;
  transition-duration: 500ms;
  transform: rotate(-45deg);
  background-color: white;
}
.close {
  transition: all;
  transition-duration: 500ms;
  margin-bottom: 4px;
  transform: rotate(0);
}
.closeMenu {
  transition: all;
  transition-duration: 1s;
  position: absolute;
  height: 100vh;
  width: 100vw;
  left: -100vw;
  top: 0;
  opacity: 1;
  z-index: -9;
}
</style>

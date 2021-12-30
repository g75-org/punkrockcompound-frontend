<template>
  <div class="w-screen p-4 flex items-center bg-white shad">
    <!-- mobile view -->

    <!-- mobile header  -->

    <!-- mobile logo -->
    <div class="flex items-center z-40">
      <div class="pr-2">
        <img
          style="height: 50px; width: 50px"
          src="/logo_icon.svg"
          alt="punk rock compound icon"
        />
      </div>
      <div
        :class="{ blackTitle: isOpen, whiteTitle: !isOpen }"
        class="transition-all"
      >
        Punk Rock Compound
      </div>
    </div>
    <!-- end of mobile logo -->

    <!-- Menu Icon -->
    <div
      @click="toggleMenu"
      class="transition-all flex-grow justify-center flex flex-col items-end z-20"
    >
      <div
        style="height: 3px"
        class="menu w-8 bg-black"
        :class="{ openOne: isOpen, close: !isOpen }"
      ></div>
      <div
        style="height: 3px"
        class="w-8 bg-black"
        :class="{ openTwo: isOpen, close: !isOpen }"
      ></div>
      <div
        style="height: 3px"
        class="w-8 bg-black"
        :class="{ openMid: isOpen }"
      ></div>
    </div>
    <!-- end of menu icon -->

    <!-- Mobile menu slide out  -->
    <section
      v-if="bandId"
      :class="{ modal: isOpen, closeMenu: !isOpen }"
      class="flex flex-col justify-around items-center py-10 z-10"
    >
      <span @click="toggleMenu">
        <nuxt-link to="/landing">
          <p style="color: white">Home</p>
        </nuxt-link>
      </span>
      <span @click="toggleMenuProfile">
        <nuxt-link :to="!bandId ? '/profile' : `/profile/${bandId}`">
          <p style="color: white">Profile id</p>
        </nuxt-link>
      </span>
      <span @click="toggleMenu">
        <nuxt-link :to="!bandId ? '/profile' : `/profile/${bandId}`">
          <p style="color: white">Videos</p>
        </nuxt-link>
      </span>
      <span @click="toggleMenu">
        <nuxt-link :to="!bandId ? '/profile' : `/profile/${bandId}`">
          <p style="color: white">Bands</p>
        </nuxt-link>
      </span>
      <span @click="logOutMethod">
        <nuxt-link to="/">
          <p style="color: white">Login/Signout</p>
        </nuxt-link>
      </span>
    </section>

    <section
      v-else
      :class="{ modal: isOpen, closeMenu: !isOpen }"
      class="flex flex-col justify-around items-center py-10 z-10"
    >
      <span @click="toggleMenu">
        <nuxt-link to="/landing">
          <p style="color: white">Home</p>
        </nuxt-link>
      </span>
      <span @click="toggleMenuProfile">
        <nuxt-link to="/profile">
          <p style="color: white">Profile</p>
        </nuxt-link>
      </span>
      <span @click="toggleMenu">
        <nuxt-link to="/videos">
          <p style="color: white">Videos</p>
        </nuxt-link>
      </span>
      <span @click="toggleMenu">
        <nuxt-link to="/bands">
          <p style="color: white">Bands</p>
        </nuxt-link>
      </span>
      <span @click="logOutMethod">
        <nuxt-link to="/">
          <p style="color: white">Login/Signout</p>
        </nuxt-link>
      </span>
    </section>
    <!-- end of mobile menu slide out -->

    <!-- this is a new componet the all bands view  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      user: this.$strapi.user || null,
      bandId: null,
    }
  },

  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    async toggleMenuProfile() {
      this.isOpen = !this.isOpen
      const user = await this.$strapi.user
      console.log('this is getting the user', user)
      this.bandId = await this.user.band
      console.log('this is band id in togglle ', this.bandId)
    },
    async logOutMethod() {
      await this.$strapi.logout()
      this.bandId = null
      this.isOpen = !this.isOpen
    },
  },
  // Get the user to his profile page
  async updated() {
    if (this.$strapi.user) {
      await console.log('user', this.$strapi.user)
      if (this.$strapi.user.band) {
        this.bandId = await this.$strapi.user.band.id
      }
    }
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
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  opacity: 1;
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

.openMid {
  display: none;
}

.shad {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>

<template>
  <div class="relative">
    <LiveLink style="z-index: 999999999999999" />
    <div
      style="z-index: 9999999999999999999999 !important"
      v-if="userId === band.users_permissions_user.id"
      class="absolute top-10 right-10"
    >
      <div @click="edit('MainCoverEdit')">
        <img
          class="h-10 w-10"
          src="http://localhost:3000/editing_white.svg"
          alt=""
        />
      </div>
    </div>
    <section
      style="z-index: -999"
      class="h-96 relative flex justify-center items-end"
    >
      <img
        class="absolute top-0 left-0 object-cover w-full h-full"
        :src="`${band.coverMainUrl}`"
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
        v-if="!editBioForm"
        style="margin-top: -50px"
        class="w-11/12 bg-black shadow-2xl text-white px-8 py-8 z-50 mx-auto"
      >
        <div class="flex items-center">
          <h2 class="flex-grow font-bold">Bio</h2>
          <img
            @click="editBio()"
            v-if="userId === band.users_permissions_user.id"
            class="h-8 w-8"
            src="http://localhost:3000/editing_white.svg"
            alt=""
          />
        </div>

        <div class="container_html" v-html="band.bio"></div>
      </section>
      <BioEdit v-else :bandId="band.id" @closeBioForm="log" />
    </section>
    <!-- Additional Information -->
    <section v-if="!editBandInfo" class="px-4 pt-6 mt-4">
      <div class="flex items-center">
        <h2 class="flex-grow font-bold">Band Info</h2>
        <img
          @click="changeEditBandInfo"
          v-if="userId === band.users_permissions_user.id"
          class="h-8 w-8"
          src="http://localhost:3000/editing.svg"
          alt=""
        />
      </div>
      <!-- container for the list items -->
      <div class="flex">
        <h6 class="flex-1 font-medium">Members</h6>
        <div class="flex-1">
          <p
            style="margin-top: 12px"
            v-for="member in band.members"
            :key="member.memberName"
            class="inline-block"
          >
            {{ member.memberName }},
          </p>
        </div>
      </div>
      <!-- genre -->
      <div class="flex">
        <h6 class="flex-1 font-medium">Genre</h6>
        <div style="margin-top: 12px" class="flex-1">
          <p>{{ band.genre }}</p>
        </div>
      </div>
      <!-- container for the list items -->
      <!-- <div class="flex pt-4">
        <h6 class="flex-1 mt-0 font-medium">Links</h6>
        <div class="flex-1">
          <nuxt-link v-for="(link, index) in links" :key="link + index" to="/">
            {{ link.text }},</nuxt-link
          >
        </div>
      </div> -->
    </section>
    <section v-else class="pl-8">
      <FormulateForm v-model="bandInfo" @submit="submitBandInfo">
        <FormulateInput
          id="name"
          name="name"
          label="band Name"
          imput-class="red"
          type="text"
          placeholder="enter your band name"
          :value="band.name"
        />

        <FormulateInput
          id="genre"
          name="genre"
          label="genre"
          type="text"
          placeholder="punk"
          :value="band.genre"
        />
        <FormulateInput
          id="phone"
          name="phone"
          label="phone"
          type="text"
          placeholder="xxx-xxx-xxxx"
          :value="band.phone"
        />
        <FormulateInput
          id="city"
          name="city"
          label="city"
          type="text"
          placeholder="Chicago"
          :value="band.city"
        />
        <FormulateInput
          id="state"
          name="state"
          label="state"
          type="text"
          placeholder="IL"
          :value="band.state"
        />
        <FormulateInput
          id="email"
          name="email"
          label="email"
          type="text"
          placeholder="youremail@gmail.com"
          :value="band.email"
        />
        <FormulateInput
          type="group"
          name="members"
          :repeatable="true"
          label="Who is the band?"
          add-label="+ Add Member"
        >
          <FormulateInput
            name="memberName"
            validation="required"
            label="memberName"
          />
        </FormulateInput>

        <FormulateInput type="submit" label="next" />
      </FormulateForm>
    </section>
    <!-- Put the album slider here  -->
    <section v-if="songList" class="px-4 pt-8">
      <div class="flex items-center">
        <h2 class="flex-grow font-bold">Albums</h2>
        <img
          v-if="userId === band.users_permissions_user.id"
          class="h-8 w-8"
          src="http://localhost:3000/editing.svg"
          alt=""
        />
      </div>
      <carousel :pagination-padding="5" :per-page-custom="[[300, 1]]">
        <slide v-for="(album, index) in band.albums" :key="album + index">
          <div class="p-1" @click="changeAlbum(index)">
            <img
              style="height: 250px"
              class="object-cover w-full"
              :src="`${album.coverUrl}`"
              alt=""
            />
            <div class="w-full h-14 bg-black p-4">
              <p class="text-green-400 mt-0 text-lg">{{ album.title }}</p>
            </div>
          </div>
        </slide>
      </carousel>
    </section>
    <section v-if="songList" class="py-2">
      <SongPlayer
        :albumPlayer="true"
        :suffulePlay="false"
        :title="songList.title"
        v-if="songList"
        :album="songList"
      />
    </section>
    <!-- This is the edit popups -->
    <section
      v-if="popEdit"
      style="z-index: 99999999999999999999999999999999999999999"
      class="h-full w-full bg-transparent flex absolute z-40 top-20 left-0 items-center justify-center"
    >
      <section class="h-full w-screen">
        <component
          :bandId="band.id"
          class="bg-white text-black"
          v-bind:is="editComp"
          @close="close"
        ></component>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi, params }) {
    const band = await $strapi.findOne('bands', params.id) // When calling /abc the slug will be "abc"
    console.log('getting the band')
    return { band }
  },
  data() {
    return {
      bandInfo: {},
      editBandInfo: false,
      editBioForm: false,
      userId: null,
      songList: null,
      popEdit: false,
      editComp: 'MainCoverEdit',
      members: ['Jack Richards', 'Peter Michales', 'Rod Dick', 'Nick Rogers'],
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
  mounted() {
    if (this.$strapi.user) {
      this.userId = this.$strapi.user.id
    }
    if (this.band.albums) {
      this.songList = this.band.albums[0]
    }
  },

  methods: {
    async submitBandInfo() {
      const { name, genre, phone, members, email, city, state } = this.bandInfo
      const bandUpdated = await this.$strapi.update('bands', this.bandId, {
        name,
        genre,
        phone,
        members,
        email,
        city,
        state,
      })
      console.log(bandUpdated)
    },
    log() {
      console.log('hello')
      this.editBioForm = false
    },
    changeEditBandInfo() {
      this.editBandInfo = true
    },
    changeAlbum(albumIndex) {
      this.songList = this.band.albums[albumIndex]
    },
    edit(typeEdit) {
      this.editComp = typeEdit
      console.log('this is the edit logger ')
      this.popEdit = true
    },
    editBio() {
      this.editBioForm = true
    },
    close() {
      if (this.editBio) {
        this.popEdit = false
      }
      this.popEdit = false
    },
  },
}
</script>

<style scoped>
.background_color_opacity {
  background: rgb(0 0 0 / 71%);
}

div.container_html > {
  color: red !important;
}
</style>

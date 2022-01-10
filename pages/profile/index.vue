<template>
  <div>
    <section class="w-full px-10">
      <h1 class="text-2xl text-center">Create Band Profile</h1>
      <FormulateForm
        v-if="step === 1"
        v-model="formValues"
        @submit="submitHandler"
      >
        <FormulateInput
          ref="file"
          name="coverMainUrl"
          id="coverImage"
          label="Cover Image"
          imput-class="red"
          type="image"
          @change="handleFileUpload($event)"
          placeholder="Upload A Picture"
        />

        <FormulateInput
          id="name"
          name="name"
          label="band Name"
          imput-class="red"
          type="text"
          placeholder="enter your band name"
        />
        <p class="text-lg font-bold">Bio</p>
        <ClientOnly>
          <!-- Use the component in the right place of the template -->
          <tiptap-vuetify v-model="content" :extensions="extensions" />

          <template #placeholder> Loading... </template>
        </ClientOnly>

        <FormulateInput
          id="genre"
          name="genre"
          label="genre"
          type="text"
          placeholder="punk"
        />
        <FormulateInput
          id="phone"
          name="phone"
          label="phone"
          type="text"
          placeholder="xxx-xxx-xxxx"
        />
        <FormulateInput
          id="city"
          name="city"
          label="city"
          type="text"
          placeholder="Chicago"
        />
        <FormulateInput
          id="state"
          name="state"
          label="state"
          type="text"
          placeholder="IL"
        />
        <FormulateInput
          id="email"
          name="email"
          label="email"
          type="text"
          placeholder="youremail@gmail.com"
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
      <!-- step two of form  -->
      <FormulateForm
        v-if="step === 2"
        v-model="formValuesTwo"
        @submit="submitHandlerTwo"
      >
        <FormulateInput
          @change="logger"
          type="group"
          name="albums"
          label="Who is the band?"
          add-label="+ Add Member"
          validation="required"
        >
          <!-- <FormulateInput
            name="albumCover"
            validation="required"
            @change="handleFileUplaodAlbumCover($event)"
            label="Album cover image"
            type="image"
          /> -->
          <FormulateInput
            @change="albumTitleChange($event)"
            name="title"
            validation="required"
            label="Album title"
          />
          <FormulateInput
            @change="logger"
            @repeatableAdded="songIndexChange"
            type="group"
            name="songs"
            :repeatable="true"
            label="add song"
            add-label="add song"
          >
            <FormulateInput
              @change="loggerSongTitle($event)"
              name="songTitle"
              validation="required"
              label="Song title"
              type="text"
            />
            <FormulateInput
              @change="handleFileUploadSong($event)"
              name="songAudio"
              validation="required"
              label="Song File"
              type="file"
            />
          </FormulateInput>
        </FormulateInput>
        <FormulateInput type="submit" label="next" />
      </FormulateForm>
    </section>
  </div>
</template>

<script>
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
} from 'tiptap-vuetify'

// import Editor from '../../components/Editor'
export default {
  components: { TiptapVuetify },
  data() {
    return {
      step: 1,
      extensions: [
        Blockquote,
        Link,
        Underline,
        Strike,
        Italic,
        ListItem,
        BulletList,
        OrderedList,
        [
          Heading,
          {
            options: {
              levels: [1, 2, 3],
            },
          },
        ],
        Bold,
        Link,
        Code,
        HorizontalRule,
        Paragraph,
        HardBreak,
      ],
      formValues: {},
      formValuesTwo: {},
      file: '',
      fileSong: '',
      songUrl: '',
      songTitle: '',
      fileAlbumCover: '',
      content: '',
      userId: '',
      coverMainId: '',
      songArray: [{}],
      songIndex: 0,
      albumTitle: '',
    }
  },

  mounted() {
    if (this.$strapi.user) {
      this.userId = this.$strapi.user.id
    }
  },
  methods: {
    nextAddMusic() {
      this.createdBandInfo = true
    },
    logger() {
      console.log(this.formValuesTwo.albums[0], 'songtitle ')
    },
    albumTitleChange($event) {
      this.albumTitle = $event.target.value
    },
    songIndexChange() {
      return this.songIndex + 1
    },
    loggerSongTitle($event) {
      return (this.songArray[this.songIndex].songTitle = $event.target.value)
    },
    async handleFileUpload($event) {
      console.log($event.target)
      this.file = await $event.target.files[0]
      console.log(this.file)
    },
    async handleFileUploadSong($event) {
      this.fileSong = await $event.target.files[0]
      console.log(this.fileSong)
      // console.log(this.fileSong)
      // const formData = new FormData()
      // await formData.append('files', this.fileSong)
      // const song = await this.$strapi.create('upload', formData)
      // this.songUrl = song[0].url
    },
    // async handleFileUplaodAlbumCover($event) {
    //   console.log($event.target)
    //   this.fileAlbumCover = await $event.target.files[0]
    // },

    async submitHandler() {
      // need to do something here
      // go to next form
      // add data attribute
      const formData = new FormData()
      await formData.append('files', this.file)
      const image = await this.$strapi.create('upload', formData)
      // save the image url for the cover of the band ... use later in last step of the form
      this.coverMainUrlLocal = image[0].url
      this.coverMainId = image[0].id
      console.log(image)
      // Move to next step in the form
      this.step = 2
    },

    async submitHandlerTwo() {
      // console.log(al, 'this is the al from the build songs ')
      const { name, genre, phone, members, email, city, state } =
        this.formValues
      const band = await this.$strapi.create('bands', {
        name,
        coverMainUrl: this.coverMainUrlLocal,
        coverMainId: this.coverMainId,
        albums: [{ title: this.albumTitle, songs: this.songArray }],
        genre,
        phone,
        email,
        bio: this.content,
        city,
        members,
        state,
        users_permissions_user: this.userId,
        // members,
      })
      console.log(band, 'this is the final band ')

      this.step = 2
    },
  },
}
</script>
<style>
.formulate-input-element--text {
  border: 1px solid red;
}
</style>

<template>
  <div>
    <h1 class="text-2xl text-center">Create Band Profile</h1>
    <section class="w-full px-10">
      <!-- <label
        >File
        <input ref="file" type="file" @change="handleFileUpload($event)" />
      </label> -->
      <FormulateForm v-model="formValues" @submit="submitHandler">
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
        <!-- <section class="py-6">
          <Editor v-model="content" />
        </section> -->
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
          placeholder="xxx-xxx-xxxx"
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
          placeholder="xxx-xxx-xxxx"
        />

        <FormulateInput
          type="group"
          name="members"
          :repeatable="true"
          label="Who is the band?"
          add-label="+ Add Member"
          validation="required"
        >
          <FormulateInput
            name="memberName"
            validation="required"
            label="memberName"
          />
        </FormulateInput>
        <FormulateInput type="submit" label="Create Profile" />
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
  // components: {
  //   Editor,
  // },
  data() {
    return {
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
      file: '',
      content: '',
      userId: '',
    }
  },

  mounted() {
    if (this.$strapi.user) {
      this.userId = this.$strapi.user.id
    }
  },
  methods: {
    async handleFileUpload($event) {
      this.file = await $event.target.files[0]
    },
    async submitHandler() {
      const formData = new FormData()
      await formData.append('files', this.file)
      const image = await this.$strapi.create('upload', formData)
      const { name, genre, phone, members, email, city, state } =
        this.formValues
      console.log('hello', members)
      const band = await this.$strapi.create('bands', {
        name,
        coverMainUrl: image[0].url,
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
      console.log(band)
    },
  },
}
</script>
<style>
.formulate-input-element--text {
  border: 1px solid red;
}
</style>

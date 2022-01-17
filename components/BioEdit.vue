<template>
  <div>
    <h2 class="text-center">Edit Band Bio</h2>
    <ClientOnly>
      <!-- Use the component in the right place of the template -->
      <tiptap-vuetify v-model="content" :extensions="extensions" />

      <template #placeholder> Loading... </template>
    </ClientOnly>
    <button class="btn ml-10" v-on:click="closeForm">Cancel</button>
    <button class="btn ml-10" v-on:click="submitBio">Submit</button>
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
export default {
  props: {
    bandId: {
      type: Number,
    },
  },
  components: { TiptapVuetify },
  emits: ['closeBioForm'],
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
      content: '',
    }
  },
  methods: {
    closeForm(event) {
      this.$emit('closeBioForm')
    },
    async submitBio() {
      console.log(this.content)
      const bandUpdated = await this.$strapi.update('bands', this.bandId, {
        bio: this.content,
      })
      console.log(bandUpdated)
      this.$emit('closeBioForm')
    },
  },
}
</script>

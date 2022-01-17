<template>
  <div class="p-10">
    <h2 class="text-center">Edit Band Cover</h2>
    <FormulateForm v-model="formValues" @submit="submitHandler">
      <FormulateInput
        ref="file"
        name="coverMainUrl"
        id="coverImage"
        label="Cover Image"
        type="image"
        @change="handleFileUpload($event)"
        placeholder="Upload A Picture"
      />
      <FormulateInput type="submit" label="edit band cover" />
      <button class="btn" v-on:click="closeForm">Cancel</button>
    </FormulateForm>
  </div>
</template>

<script>
export default {
  props: {
    bandId: {
      type: Number,
    },
  },
  emits: ['close'],
  data() {
    return {
      file: '',
      formValues: {},
      coverMainUrlLocal: '',
    }
  },
  methods: {
    closeForm(event) {
      this.$emit('close')
    },
    async submitHandler() {
      const formData = new FormData()
      formData.append('files', this.file)
      const image = await this.$strapi.create('upload', formData)
      this.coverMainUrlLocal = image[0].url
      //   now you have to update the bands profile header
      const bandUpdated = await this.$strapi.update('bands', this.bandId, {
        coverMainUrl: this.coverMainUrlLocal,
      })
      console.log(bandUpdated)
      this.$emit('close', bandUpdated)
    },
    async handleFileUpload($event) {
      this.file = await $event.target.files[0]
      console.log(this.file)
    },
  },
}
</script>

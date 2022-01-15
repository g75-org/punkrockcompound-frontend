<template>
  <div>
    <h2>Edit Band Cover</h2>
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
    </FormulateForm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: '',
      formValues: '',
      coverMainUrlLocal: '',
    }
  },
  methods: {
    async submitHandler() {
      const formData = new FormData()
      formData.append('files', this.file)
      const image = await this.$strapi.create('upload', formData)
      this.coverMainUrlLocal = image[0].url
      //   now you have to update the bands profile header
      const bandUpdated = await this.$strapi.update('bands', this.band.id, {
        coverUrl: this.coverMainUrlLocal,
      })
      console.log(bandUpdated)
    },
  },
  async handleFileUpload($event) {
    this.file = await $event.target.files[0]
    console.log(this.file)
  },
}
</script>

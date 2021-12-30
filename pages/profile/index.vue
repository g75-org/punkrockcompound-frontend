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
          id="coverImage"
          label="Cover Image"
          imput-class="red"
          type="image"
          @change="handleFileUpload($event)"
          placeholder="Upload A Picture"
        />

        <FormulateInput
          id="bandName"
          label="bandName"
          imput-class="red"
          type="text"
          placeholder="enter your band name"
        />

        <FormulateInput
          id="genre"
          label="genre"
          type="text"
          placeholder="punk"
        />
        <FormulateInput
          id="phone"
          label="phone"
          type="text"
          placeholder="xxx-xxx-xxxx"
        />
        <FormulateInput
          id="members"
          label="members"
          type="text"
          placeholder="puxxx-xxx-xxxxnk"
        />
        <FormulateInput type="submit" label="Create Profile" />
      </FormulateForm>
      <h1>Hello</h1>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValues: {},
      file: '',
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
      console.log(image[0].url)
    },
  },
}
</script>
<style>
.formulate-input-element--text {
  border: 1px solid red;
}
</style>

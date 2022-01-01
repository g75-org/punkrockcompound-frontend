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
        <section class="py-6">
          <Editor />
        </section>

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
            name="name"
            validation="required"
            label="members name"
          />
        </FormulateInput>
        <FormulateInput type="submit" label="Create Profile" />
      </FormulateForm>
    </section>
  </div>
</template>

<script>
import Editor from '../../components/Editor'
export default {
  components: {
    Editor,
  },
  data() {
    return {
      formValues: {},
      file: '',
      content: '',
    }
  },
  methods: {
    async handleFileUpload($event) {
      this.file = await $event.target.files[0]
    },
    submitHandler() {
      // const formData = new FormData()
      // await formData.append('files', this.file)
      // const image = await this.$strapi.create('upload', formData)
      // console.log(image)
      const { name, coverMainUrl, genre, phone, members } = this.formValues
      console.log(this.formValues)
      console.log(name, coverMainUrl, genre, phone, members)
    },
  },
}
</script>
<style>
.formulate-input-element--text {
  border: 1px solid red;
}
</style>

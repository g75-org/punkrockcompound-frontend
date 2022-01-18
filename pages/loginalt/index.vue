<template>
  <div>
    <section class="w-full h-36 mt-10 flex">
      <FormulateForm v-model="loginForm">
        <FormulateInput name="email" label="email" validation="required" />
        <FormulateInput
          name="password"
          label="password"
          validation="required"
        />
        <FormulateInput type="submit" label="Sign up" />
      </FormulateForm>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {},
    }
  },
}
</script>

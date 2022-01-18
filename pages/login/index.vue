<template>
  <div class="container">
    <!-- basic-login -->
    <div class="flex flex-col items-center mt-20">
      <div class="flex flex-col my-auto border-4 border-primary max-w-4xl p-16">
        <div class="flex flex-row items-center">
          <div class="w-1/4">email:</div>
          <input
            v-model="identifier"
            class="border ml-4 pl-4 w-3/4"
            type="text"
          />
        </div>
        <div class="flex flex-row items-center mt-2">
          <div class="w-1/4">password:</div>
          <input
            v-model="password"
            class="border border-primary ml-4 pl-4 w-3/4"
          />
        </div>
        <button class="button-1 mt-4" @click="login">login</button>
        <button class="button-1 mt-4" @click="logoutUser">logout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['login'],
  data: () => {
    return {
      identifier: '',
      password: '',
      token: null,
      user: null,
    }
  },
  methods: {
    async logoutUser() {
      await this.$strapi.logout()
      this.$router.push('/')
    },
    async login() {
      const { user, jwt: token } = await this.$strapi.login({
        identifier: this.identifier,
        password: this.password,
      })
      this.token = token
      this.user = user
      this.$router.push('/')
    },
  },
}
</script>

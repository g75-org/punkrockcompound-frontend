<template>
  <div class="container">
    <!-- basic-login -->
    <div class="flex flex-col items-center mt-20">
      <div class="flex flex-col my-auto border-4 border-primary max-w-4xl p-16">
        <div class="flex flex-row items-center">
          <div class="w-1/4">email:</div>
          <input
            v-model="identifier"
            class="border border-primary ml-4 pl-4 w-3/4"
            type="text"
          />
        </div>
        <div class="flex flex-row items-center mt-2">
          <div class="w-1/4">password:</div>
          <input
            v-model="password"
            class="border border-primary ml-4 pl-4 w-3/4"
            :type="showPass ? 'text' : 'password'"
          />
        </div>
        <button class="button-1 mt-4" @click="login">login</button>
        <button class="button-1 mt-4" @click="login">login</button>
        <section>{{ identifier }}</section>
      </div>
    </div>

    <!-- if logginIn show stuff -->
    <div v-if="token" class="mt-16">
      <hr />
      token: {{ token }}
    </div>
    <pre v-if="user">user: {{ user }}</pre>

    <div>
      <div>{{ identifier }}</div>
      <div>{{ password }}</div>
      <div v-show="isDev">isDev: {{ isDev }}</div>
      <div>backendUrl: {{ backendUrl }}</div>
      <div>frontendUrl: {{ frontendUrl }}</div>
    </div>
    <hr />
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, $config: { backendUrl, frontendUrl, isDev } }) {
    const page = await $content('index').fetch()
    return {
      page,
      backendUrl,
      frontendUrl,
      isDev,
      // identifier: isDev ? 'admin@email.com' : '',
      // password: isDev ? 'password' : '',
      identifier: '',
      password: '',
      bands: null,
    }
  },
  emits: ['login'],
  data: () => {
    return {
      showPass: false,
      token: null,
      user: null,
    }
  },
  methods: {
    async login() {
      const { user, jwt: token } = await this.$strapi.login({
        identifier: this.identifier,
        password: this.password,
      })
      console.log(user, token) // eslint-disable-line no-console
      this.token = token
      this.user = user
      this.$router.push('/')
    },
  },
}
</script>

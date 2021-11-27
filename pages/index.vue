<template>
  <div class="container">
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
      </div>
    </div>

    <div v-if="token">token: {{ token }}</div>
    <pre v-if="user">{{ user }}</pre>

    <div class="container">
      {{ identifier }}
      {{ password }}
      <p>
        isDev: {{ isDev }}
        <br>
        backendUrl: {{ backendUrl }}
        <br />
        frontendUrl: {{ frontendUrl }}
      </p>
      <hr />
      <nuxt-content :document="page" />
    </div>
  </div>
</template>

<script>
// localhost:1337/bands/11
export default {
  async asyncData({ $content, $config: { backendUrl, frontendUrl, isDev } }) {
    const page = await $content('index').fetch()
    return {
      page,
      backendUrl,
      frontendUrl,
      isDev,
      identifier: isDev ? 'admin@email.com' : '',
      password: isDev ? 'password' : '',
    }
  },
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
    },
  },
}
</script>

<template>
  <!-- style guide  -->
  <div>
    <!-- font style guide  -->
    <section class="w-screen px-6 py-6 md:margin-auto">
      <section class="w-full mx-auto my-4 md:w-3/5">
        <div class="w-full m-auto">
          <!-- main Heading in style guide -->
          <h2 class="mb-2">Font One : Candal</h2>
          <hr class="w-full my-2 border border-black" />
          <section>
            <div class="flex flex-col">
              <!-- accent font in style guideßß -->
              <section class="w-full m-auto">
                <code class="language-css">
                  font-family: 'Candal', sans-serif
                </code>
              </section>
              <section class="w-full m-auto">
                <h1 class="mb-2 font-bold">Heading 1</h1>
                <code class="language-css"> font-size: 3em; </code>
              </section>
              <section class="w-full m-auto">
                <h2 class="mb-2 font-bold">Heading 2</h2>
                <code class="language-css"> font-size: 2.5em; </code>
              </section>
              <section class="w-full m-auto font-bold">
                <h3 class="mb-2">Heading 3</h3>
                <code class="language-css"> font-size: 2em; </code>
              </section>
              <section class="w-full m-auto font-bold">
                <h4 class="mb-2">Heading 4</h4>
                <code class="language-css"> font-size: 1.5em; </code>
              </section>
            </div>
          </section>
        </div>
        <hr class="border border-black my-10" />
      </section>

      <!-- end of font style guide  -->
      <section class="w-full mx-auto my-4 md:w-3/5">
        <div class="w-full m-auto">
          <!-- main Heading in style guide -->
          <h2 class="mb-2 font-headingTwo font-bold">
            Font Two : Sans Source Pro
          </h2>
          <section>
            <div class="flex flex-col">
              <!-- accent font in style guideßß -->
              <section class="w-full m-auto">
                <code class="language-css">
                  font-family: 'Sans Source Pro', sans-serif
                </code>
              </section>
              <section class="w-full m-auto">
                <h1 class="mb-2 font-headingTwo font-bold">Heading 1</h1>
                <code class="language-css"> font-size: 3em; </code>
              </section>
              <section class="w-full m-auto">
                <h2 class="mb-2 font-headingTwo font-bold">Heading 2</h2>
                <code class="language-css"> font-size: 2.5em; </code>
              </section>
              <section class="w-full m-auto font-bold">
                <h3 class="mb-2 font-headingTwo">Heading 3</h3>
                <code class="language-css"> font-size: 2em; </code>
              </section>
              <section class="w-full m-auto font-bold">
                <h4 class="mb-2 font-headingTwo">Heading 4</h4>
                <code class="language-css"> font-size: 1.5em; </code>
              </section>
            </div>
          </section>
        </div>
        <hr class="border border-black my-10" />
      </section>
      <!-- Colors -->
      <section class="w-full mx-auto my-4 md:w-3/5">
        <div class="w-full md:w-3/5">
          <h2>Colors One</h2>
        </div>
        <!-- Coolors Palette Widget -->
        <div class="flex flex-col gap-6">
          <div v-for="(colorHex, index) in colors" :key="colorHex + index">
            <div :style="{ backgroundColor: `#${colorHex}` }" class="h-28 p-6">
              <p class="text-white">#{{ colorHex }}</p>
            </div>
          </div>
        </div>
        <hr class="border border-black my-10" />
      </section>
      <!-- Buttons -->
      <section class="w-full mx-auto my-4 md:w-3/5">
        <div class="w-full md:w-3/5">
          <h2>Buttons One</h2>
        </div>
        <!-- Coolors Palette Widget -->
        <div class="block md:flex">
          <div class="md:w-2/5">
            <Button
              :primary="true"
              :secondary="false"
              title="button Test"
              :slant="false"
              color="primary"
            />
            <br />
            <Button
              :secondary="true"
              title="button Test"
              color="primary"
              :slant="false"
            />
            <br />
            <Button :round="true" title="+" :slant="true" color="primary" />
            <br />
          </div>
          <div class="px-6 w-full">
            <p class="mt-8 md:w-full md:m-0">
              primary:boolean : red button, slant:boolean : sland the text and
              button, color:String : override color of text secondary:boolean:
              white colored button,
            </p>
          </div>
        </div>
        <hr class="border border-black my-10" />
        <p>Round Button</p>
        <div
          class="flex justify-center items-center text-5xl shadow-lg text-white"
          style="height: 70px; width: 70px; background: red; border-radius: 50%"
        >
          +
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ['ee0003', '04151F', 'EAF2EF'],
    }
  },
}
</script>

<style scoped>
.mob {
  margin-left: -150px;
}

@media only screen and (max-width: 600px) {
  .mob {
    margin-left: -38px;
  }
}
</style>

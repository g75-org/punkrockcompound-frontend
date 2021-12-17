<template>
  <!-- get sont is album.songs[0].songAudio.url -->
  <div>
    <section class="bg-white py-6 px-4 w-screen">
      <div class="w-screen max-w-full">
        <!-- this is the song that is now ready to play -->
        <p class="m-0 p-0 text-2xl font-bold">{{ songToPlay.songTitle }}</p>
        <!-- Audio tag  -->
        <audio
          id="player"
          class="w-full mt-4"
          controls
          :src="`http://localhost:1337${songToPlay.songAudio.url}`"
        ></audio>
      </div>
    </section>
    <!-- here is the problem -->
    <section class="bg-white">
      <div class="w-full mt-6 h-auto shadow-sm">
        <h6 class="pl-4">Coming up next</h6>
        <div v-for="song in album.songs" :key="song.id" class="w-full">
          <div
            @click="setSong(song)"
            class="flex justify-start w-screen items-center justify-self-start"
          >
            <img
              v-if="song.songTitle !== songToPlay.songTitle"
              style="height: 10px; justify-self: flex-start"
              src="play.svg"
              alt=""
              class="px-4"
            />
            <img
              v-else
              style="height: 10px; justify-self: flex-start"
              src="pause.svg"
              alt=""
              class="px-4"
            />
            <p class="py-2 mt-0">{{ song.songTitle }}</p>
            <span
              class="pl-2 text-sm"
              v-if="songToPlay.songTitle == song.songTitle"
              ><em>Now Playing</em></span
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      songToPlay: this.album.songs[0],
    }
  },
  methods: {
    setSong(song) {
      const player = document.getElementById('player')
      this.songToPlay = song
      player.play()
    },
  },
}
</script>

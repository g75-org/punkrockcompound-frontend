<template>
  <!-- get sont is album.songs[0].songAudio.url -->
  <div>
    <section class="bg-white px-4 w-screen">
      <!-- <pre>{{ album }}</pre> -->
      <div class="w-screen max-w-full">
        <!-- this is the song that is now ready to play -->
        <p v-if="songToPlay && suffulePlay" class="m-0 pt-6 text-2xl font-bold">
          {{ songToPlay.songTitle }}
        </p>
        <p v-if="songToPlay && albumPlayer" class="m-0 p-0 text-2xl font-bold">
          {{ album.title }}
        </p>
        <!-- Audio tag  -->
        <audio id="player" class="w-full mt-4" controls>
          <source
            id="playerSource"
            v-if="songToPlay"
            :src="`http://localhost:1337${songToPlay.songAudio.url}`"
          />
        </audio>
      </div>
    </section>
    <!-- here is the problem -->
    <section class="bg-white">
      <div class="w-full mt-2 h-auto shadow-sm">
        <h6 v-if="!albumPlayer" class="pl-4">{{ title }}</h6>
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
              v-else-if="song.songTitle == songToPlay.songTitle && isPlaying"
              style="height: 10px; justify-self: flex-start"
              src="pause.svg"
              alt=""
              class="px-4"
            />
            <img
              v-else
              style="height: 10px; justify-self: flex-start"
              src="play.svg"
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
    title: {
      type: String,
      required: true,
    },
    suffulePlay: {
      type: Boolean,
      required: true,
    },
    albumPlayer: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      songToPlay: this.album.songs[0],
      isPlaying: false,
    }
  },
  methods: {
    setSong(song) {
      const player = document.getElementById('player')
      if (player.paused && song.songTitle !== this.songToPlay.songTitle) {
        console.log('this is the play ')
        this.songToPlay = song
        player.load()
        player.play()
        this.isPlaying = true
      } else if (
        !this.isPlaying &&
        song.songTitle === this.songToPlay.songTitle
      ) {
        player.play()
        this.isPlaying = true
      } else if (
        this.isPlaying &&
        song.songTitle !== this.songToPlay.songTitle
      ) {
        this.songToPlay = song
        player.load()
        player.play()
      } else if (player.paused && this.songTopPlay === song.songTitle) {
        console.log('this is the bug statements')
        player.play()
        this.playing = true
      } else if (player !== player.paused) {
        console.log('this is the playing ')
        player.pause()
        this.isPlaying = false
      }
    },
  },
}
</script>

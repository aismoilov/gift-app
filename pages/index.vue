<template>
  <div>
    <div id="petals"></div>
    <loader v-if="loading" />
    <div v-else>
      <div class="content">
        <flowers class="flowers" />
        <div class="card">
            <div class="title">{{ gift.name }}</div>
            <client-only>
              <vue-typed-js :show-cursor="false" :strings="[gift.congratulation]" @onComplete="showAuthor">
                <div class="text typing" id="text"></div>
              </vue-typed-js>
            </client-only>
            <div class="author" id="author">- {{ gift.author }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { VueTypedJs } from 'vue-typed-js';
import Flowers from "../components/flowers";
import Loader from "../components/Loader.vue";

export default {
  layout: 'template',
  name: 'IndexPage', 

  components: {
    VueTypedJs,
    Flowers,
    Loader,
  },

  head() {
    return {
      title: 'С 8 Марта',
      script: [
        { hid: 'tween', src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js', defer: true },
        { hid: 'typed', src: 'typed.min.js', defer: true },
        { hid: 'app', src: 'app.js', defer: true }
      ],
      link: [
        { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Caveat&display=swap" }
      ],
    }
  },

  computed: {
    ...mapGetters(['gift', 'loading'])
  },

 
  mounted () {
    const hash = this.$route.query.h || null;
    this.$store.dispatch('getGift', hash);
  },

  methods: {
    showAuthor () {
      let author = document.getElementById("author");
      author.style.opacity = 1;
    }
  }
}
</script>
<style src="./style.scss" lang="scss" />

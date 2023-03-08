<template>
  <div>
    <div></div>
    <div v-if="!loading">
      <div class="content">
        <flowers class="flowers" />
        <div class="card">
            <div class="title">{{ gift.name }}</div>
            <div class="text typing" id="text">{{ gift.congratulation }}</div>
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
        { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Caveat&display=swap" },
      ],
    }
  },

  data () {
    return {
      gift: {
        name: "Поздравляю с 8 Марта!",
          congratulation: "В этот праздник желаю счастья и благополучия! Пусть весна принесет много грандиозных идей, надежд на их свершение и веры в результат! А главное сил, терпения и удачи для их осуществления! С праздником!",
          hash: "ссс",
          author: "с уважением Амир",
      },
      loading: false,
      list: [
        {
          name: "Ниссо с 8 Марта!",
          congratulation: "Поздравляю с 8 Марта и от всей души желаю чтобы каждый день приносил тебе только радость и нескончаемый успех, чтобы родные и близкие дарили свою заботу, любимые люди делились теплом. Пусть оправдаются все надежды, забудутся неудачи, и откроются пути к новым возможностям!",
          hash: "8b21",
          author: "с уважением Амир",
        },
        {
          name: "Поздравляю Ниссо!",
          congratulation: "От всего сердца поздравляю с 8 Марта! Пусть атмосфера праздника, которая окружает тебя сегодня, продлится целый год. Желаю воплощения всех заветных желаний, позитивных эмоций, приятных встреч, отличного настроения и радости от каждого мгновения.",
          hash: "2с44",
          author: "с уважением Амир",
        },
        {
          name: "Поздравляю Малика!",
          congratulation: "От всего сердца поздравляю с 8 Марта! Пусть атмосфера праздника, которая окружает тебя сегодня, продлится целый год. Желаю воплощения всех заветных желаний, позитивных эмоций, приятных встреч, отличного настроения и радости от каждого мгновения.",
          hash: "1с42",
          author: "с уважением Амир",
        },
        {
          name: "Поздравляю Шахзода!",
          congratulation: "От всего сердца поздравляю с 8 Марта! Пусть атмосфера праздника, которая окружает тебя сегодня, продлится целый год. Желаю воплощения всех заветных желаний, позитивных эмоций, приятных встреч, отличного настроения и радости от каждого мгновения.",
          hash: "2x54",
          author: "с уважением Амир",
        },
        {
          name: "Поздравляю Нилуфар!",
          congratulation: "Сестренка, с праздником! Желаю, чтобы в твоей жизни была большая и искренняя любовь, красивые цветы, забота и внимание! Пускай никогда не мучают печали, а препятствия преодолеваются легко и быстро! Шагай по жизни легко и с достоинством! Удачи на твоем жизненном пути!",
          hash: "c421",
          author: "с уважением Амир",
        },
        {
          name: "8 Март муборак апаи Шарифа!",
          congratulation: "Шуморо бо фарорасии 8 март – Рӯзи Модарон, ки ба оғози баҳори оламафрӯз рост меояд, табрик ва таҳният гуфта, бароятон пеш аз ҳама сихатмандии комил, иқболи нек, умри дароз в ҳама хушиҳои зиндагиро таманно дорам.",
          hash: "21w2",
          author: "бо камоли эхтиром Амир",
        },
        {
          name: "8 Март муборак апаи Фарзона!",
          congratulation: "Шуморо бо фарорасии 8 март – Рӯзи Модарон, ки ба оғози баҳори оламафрӯз рост меояд, табрик ва таҳният гуфта, бароятон пеш аз ҳама сихатмандии комил, иқболи нек, умри дароз в ҳама хушиҳои зиндагиро таманно дорам.",
          hash: "5s43",
          author: "бо камоли эхтиром Амир",
        },
        {
          name: "8 Март муборак апаи Шахноза!",
          congratulation: "Шуморо бо фарорасии 8 март – Рӯзи Модарон, ки ба оғози баҳори оламафрӯз рост меояд, табрик ва таҳният гуфта, бароятон пеш аз ҳама сихатмандии комил, иқболи нек, умри дароз в ҳама хушиҳои зиндагиро таманно дорам.",
          hash: "7g24",
          author: "бо камоли эхтиром Амир",
        },
      ]
    }
  },
 
  mounted () {
    this.loading = true;
    const hash = this.$route.query.h || null;
    if (hash) {
      const gift = this.list.find((item) => item.hash === hash);
      if (gift) {
        this.gift = Object.assign({}, gift);
      }
    }
    this.loading = false;
    this.showAuthor();
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

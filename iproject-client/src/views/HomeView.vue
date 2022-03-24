<template>
<div>
  <cardPage v-for="news in news" :key="news.id" :news:="news" ></cardPage>

  <div>
  <HFooter></HFooter>
  </div>
</div>
</template>

<script>
import cardPage from "../components/cardPage.vue";
import HFooter from 'vue-hacktiv8-footer'

export default {
  name: 'HomeView',
  components: {
    cardPage,
    HFooter,
  },  
  computed: {
    news() {
      return this.$store.state.news;
    },
  },

  created() {
    this.$store.dispatch("getNews");
  },
};
</script>

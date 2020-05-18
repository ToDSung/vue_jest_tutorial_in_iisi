<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <v-btn><a href="/todo">To ToDo page</a></v-btn>
    <v-btn><a href="/recaptcha">To Recaptcha page</a></v-btn>
    <v-btn @click="shareContent">Share Bottom</v-btn>
    {{display_text}}
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <input type="hidden" id="copy_content" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data: () => ({
    display_text: '',
  }),
  methods: {
    shareContent() {
      const shareData = {
        url: 'https://i.imgur.com/g9HadaY.png',
        title: '標題',
        text: '',
      };

      if (navigator.share) {
        this.display_text = 1;
        this.handleNavigatorShare(shareData);
      } else {
        this.display_text = 2;
        this.handleNotSupportNavigatorShare(shareData);
      }
    },
    async handleNavigatorShare(shareData) {
      try {
        await navigator.share(shareData);
        // result.textContent = '感謝您的分享';
      } catch (err) {
        // 使用者拒絕分享或發生錯誤
        const { name } = err;
        if (name === 'AbortError') {
          // result.textContent = '您已取消分享此訊息';
        } else {
          // result.textContent = err;
          console.log('發生錯誤', err);
        }
      }
    },
    handleNotSupportNavigatorShare(shareData) {
      const contentToCopy = document.querySelector('#copy_content');
      contentToCopy.value = shareData.url;
      contentToCopy.setAttribute('type', 'text'); // 不是 hidden 才能複製
      contentToCopy.select();
      contentToCopy.setAttribute('type', 'hidden');

      try {
        const successful = document.execCommand('copy');
        const msg = successful ? '成功' : '失敗';
        console.log(msg);
        // alert(`${shareData.url} - 複製${msg}`);
      } catch (err) {
        // alert('Oops, unable to copy');
      }
    },
  },
};
</script>

<style scoped>

  a{
   text-decoration: none;
  }

</style>

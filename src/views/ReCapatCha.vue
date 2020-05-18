<template>
  <div class="recaptcha">
    <form action>
      <label for="x1">Account:</label>
      <input type="text" id="x1" />
      <label for="x2">Password:</label>
      <input type="text" id="x2" />
      <div class="g-recaptcha" data-sitekey="6LcQ9vgUAAAAAFdhWLvTET9R41Zi6YlCKBTOCctP"></div>
      <input type="submit" id="x5" value="send" />
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'recaptcha',
  components: {},
  data: () => ({
    display_text: '',
  }),
  methods: {},
};
</script>

<style scoped>
.recaptcha {
  max-width: 400px;
  margin: 2% auto;
  background: #fff;
  padding: 2%;
  box-shadow: 0 0 20px rgba(46, 59, 125, 0.23);
  border-radius: 5px;
}
label,
input,
textarea {
  font-size: 20px;
  box-sizing: border-box;
}
input,
textarea {
  margin: 0 0 20px 0;
  padding: 15px;
  width: 100%;
  border: none;
  font-weight: 300;
  letter-spacing: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  font-family: "Roboto", sans-serif;
  display: flex;
}
input:hover,
textarea:focus {
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}
textarea:focus,
input:focus {
  color: #2440a7;
  border: 1px solid #4f8df5;
}
input[type="submit"] {
  width: 100%;
  margin: auto;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Baloo Bhaina", cursive;
  padding: 8px 20px;
  font-size: 34px;
}

.g-recaptcha {
  margin: 4% auto;
  width: 100%;
}
textarea {
  max-width: 100%;
}
</style>

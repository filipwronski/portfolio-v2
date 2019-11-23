<template>
  <div id="app">
    <nuxt />
  </div>
</template>
<script>

export default {}
</script>
<style lang="scss">
html {
  font-family: $font-poppins;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 8px;
}

.heading {
  color: #fff;
  letter-spacing: 1px;
}
.heading-2 {
  font-size: 20px;
  letter-spacing: 1px;
}
.paragraph {
  display: block;
  font-weight: 400;
  letter-spacing: 1px;
}
.button {
  display: block;
  font-weight: 400;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px;
  background: #fff;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  color: #7474ff;
  margin: 20px auto 0 auto;
}
</style>

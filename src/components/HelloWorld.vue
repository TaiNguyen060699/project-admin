<template>
  <div class="hello">
    <h1 class="text-3xl font-bold underline">HelloWorld</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
  font-size: 18px;
  color: $black-3;

  @include mq($BREAKPOINT-LG) {
    font-size: 24px;
  }
}
</style>

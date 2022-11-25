<template>
  <div class="hello" v-for="(item, index) in listUser" :key="index">
    <h5 class="text-3xl font-bold underline">
      UserNđasame: {{ item.username }}
    </h5>
    <h5 class="text-3xl font-bold underline">
      NickName: {{ item.nickname }}
    </h5>
    <h5 class="text-3xl font-bold underline">
      FullName: {{ item.full_name }}
    </h5>
    <h5 class="text-3xl font-bold underline">
      Email: {{ item.email }}
    </h5>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      listUser: null,
    };
  },
  created() {
    axios
      .get("https://f20d32b1-11e9-45fe-9245-576c27168524.mock.pstmn.io/users")
      .then((res) => {
        this.listUser = res.data.data;
      })
      .catch((error) => console.log(error));
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

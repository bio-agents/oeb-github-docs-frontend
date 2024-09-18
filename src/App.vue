<template>
  <div>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: "App",
  data: () => ({})
};
</script>

<style>
* {
  overflow-x: auto;
}

#nprogress .bar {
  background: red !important;
}
#nprogress .peg {
  display: none !important;
}
</style>

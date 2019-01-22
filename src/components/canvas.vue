<template>
    <canvas id="myCanvas"  width="100" height="100"></canvas>
</template>

<script>
  import {canVas} from 'assets/js/canvas';
  export default {
    name: 'MakeCanvas',
    mounted() {
      canVas();
    }
  };
</script>

<style lang="scss" scoped>

</style>

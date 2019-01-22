<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <router-view/>
    </div>
    <div class="g-container-footer">
      <ct-navbar/>
    </div>
  </div>
</template>

<script>
  import CtNavbar from 'components/navbar';
  export default {
    name: 'App',
    components: {
      CtNavbar
    }
  };
</script>

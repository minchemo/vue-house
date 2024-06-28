<template>
    <div class="thanks">
        <img src="@/section/form/thanks.webp" class="logo" alt="logo">
        <img src="@/section/form/thanksm.webp" class="logom" alt="logo">
    </div>
</template>
<style lang="scss" scoped>
.thanks {
    width: 100vw;
    height: 100vh;
    background: url("@/section/s1/bg1.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  .logo{width:60vw;}
  .logom{display: none;}
}

@media screen and (max-width: 767px) {
    .thanks {
    background-image: url("@/section/s1/bg1m.jpg");
  .logo{display: none;}
  .logom{width:70vw;display: block;}
    }
}
</style>

<script>
export default {
    name: 'phoneThanks',
    components: {},
    methods: {},
}
</script>
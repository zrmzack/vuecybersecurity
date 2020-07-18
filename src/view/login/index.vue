<template>
    <div id="app1">
        <h1 style="color: #efeaf3; font-size: 80px; margin-top: 0; text-align: center;padding-top: calc(5vh)">Cyber
            Security Game</h1>
        <div style="display: flex; width: 100%;height: 100px">
            <button style="align-self: center;margin: auto" @click="gototest()">Start Game</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods: {
            gototest:function() {
               this.$router.push({path:'/intro'})
            }
        }
    }
</script>

<style scoped>
    @import "css/component.css";
    #app1{ background-image: url('../../assets/5.jpg');
        background-size: auto 100%;
        align-items: center;
        height: calc(100vh);
    }
</style>
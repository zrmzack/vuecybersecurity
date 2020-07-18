<template>
    <div id="form">
        <form>
            <label for="username">Username</label>
            <input id="username" type="text" name="username"  />
            <label for="password1">Password</label>
            <input id="password1" type="text" name="password1" />
            <label for="password2">Confirm Password</label>
            <input id="password2" type="text" name="Password2"  />
            <button  type="button">Start</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "password"
    }
</script>

<style scoped>

</style>
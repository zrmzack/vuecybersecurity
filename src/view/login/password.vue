<template>
    <div id="form">
        <form>
            <label for="username">Username</label>
            <input id="username" type="text" name="username"  @blur="checkUserName()" v-model="username"/>
            <p v-show="usernameAlert">len enough</p>
            <br>
            <label for="password1">Password</label>
            <input id="password1" type="text" name="password1" />
            <br>
            <label for="password2">Confirm Password</label>
            <input id="password2" type="text" name="Password2"  />
            <br>
            <button  type="button" @click="jump()">Start</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "password",
        data(){
            return {
                username:'',
                pwd1:'',
                pwd2:'',
                usernameAlert:false
            }
        },
        methods:{
            checkUserName(){
                // 判断自己写
                console.log(this.username.length)
                if(this.username.length > 1){
                    console.log('???')

                    this.usernameAlert=true
                }
            },
            jump(){
                console.log(this.username)
                this.$router.push({
                    path: "/lunchTime",
                    query:{
                        username:this.username
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
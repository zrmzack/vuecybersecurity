<template>
    <div><h1>
        username:{{username}}
        position:{{position}}
        money:
        cybersecurity
    </h1>


        <div id="question">
            <p>Workmate invite you to have lunch together, but some important documents put in your table, you need some
                time to deal with it, or let your workmate go for lunch alone?</p>
            <ul id="answers">
                <li>
                    Go for lunch with your workmate together.
                </li>
                <li>
                    Spend time in dealing with documents and told your workmate next time for lunch together.
                </li>
            </ul>
        </div>


        <div v-for="(qname,qindex) in qanda" v-show="qindex == curr_q_index">
            <p>Q{{qindex}}:</p>
            <el-radio v-model="radio1" label="1" border>备选项1</el-radio>
            <el-radio v-model="radio1" label="2" border>备选项2</el-radio>
        </div>
    </div>


</template>

<script>
    export default {
        name: "lunchTime",
        created() {
            console.log(this.$route.query.username)
            this.username = this.$route.query.username
        },
        data() {
            return {
                username: '',
                position: 'test',
                curr_q_index:'1',

                qanda: {
                    1: {
                        A: 1,
                        B: 2
                    },
                    2: {
                        A: 1,
                        B: 2
                    }
                },

                // questions
                radio1: '',
                radio2: '1',
            }
        }
    }
</script>

<style scoped>

</style>
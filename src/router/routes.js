//这里就可以引用你要显示的页面了
import index from '@/view/login/index.vue'
import intro from '@/view/login/intro.vue'
import alert from "@/view/login/alert"
import password from "@/view/login/password";
import lunchTime from "@/view/questions/lunchTime";
import lunchTimeWrong from "@/view/questions/lunchTimeWrong";
import promotion from "@/view/questions/promotion";

//配置路由，path就是你浏览器地址，component就是跟着你要显示的页面，/表示默认地址。
export default [
    {path:"/",component:index},
    {path:"/intro",component:intro},
    {path:"/alert",component:alert},
    {path:"/password",component:password},
    {path:"/lunchTime",component:lunchTime},
    {path:"/lunchTimeWrong",component:lunchTimeWrong},
    {path:"/promotion",component:promotion}
]

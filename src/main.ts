import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHistory,createRouter} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TabsDemo from './components/Tabs/TabsDemo.vue'
import Demo from "./components/Buttons/Demo.vue";

const history = createWebHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:HelloWorld},
        {path:'/tabs',component: TabsDemo},
        {path:'/demo',component: Demo}
        ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')

import Vue from 'vue';
import router from './router';

 import store from './store'//引入VueX

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.use(MintUI)

new Vue({
    el:'#app',
    // template:'<App/>'
    render(create){
        return create('router-view');
    },
    router,

    // 将创建好的store注入到Vue根实例里
    store
   
});
import Home from './Home.vue';
import HelloWorld from './components/HelloWorld.vue';


export default[
    { path:'/', 
      name: 'Home',
      component: Home 
    },
    { path: '/hello', 
      name: 'HelloWorld',
      component: HelloWorld 
    },
//     { path: '/blog/:id', component: singleBlog}
  ]
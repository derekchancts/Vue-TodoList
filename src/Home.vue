<template>
  <div id="app">
    <!-- <Header></Header> -->
    <Header />
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" v-on:update-todo="updateTodo"/>
    <!-- <router-view /> -->
  </div>
</template>
 

<script>
import Todos from './components/Todos.vue';
import AddTodo from './components/AddTodo.vue';
import Header from './components/layout/Header.vue';
import axios from 'axios';
import db from './components/firebaseInit';

export default {
  name: 'Home',
  components: {
    Todos,
    Header,
    AddTodo
  },
  data() {
    return {
      todos: [
  
      ]
    }
  },
  methods: {
    deleteTodo(id) {
      // axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`) 
      //   .then(res => this.todos = this.todos.filter(todo => todo.id !== id))
      //   .catch(err => console.log(err));

      db.collection('todos').doc(id).delete()
         .then(() => {
          //  this.todos = this.todos.filter(todo => todo.id !== id);
           this.$router.go({path: this.$router.path})
         })
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;

      // axios.post('https://jsonplaceholder.typicode.com/todos', {
      //   title,
      //   completed
      // })
      //   .then(res => this.todos = [...this.todos, res.data])
      //   .catch(err => console.log(err));

      db.collection('todos').add({
        title,
        completed
      })
        .then(res => {
          // this.todos = [...this.todos, res.data]
          console.log('Record added')
          this.$router.go({path: this.$router.path})
          // console.log(res)
        // this.$router.push('/home')
        })
        // .catch(error => console.log(error))
   },
   updateTodo(id, status) {

     db.collection('todos').doc(id).update({
       completed: status
     })
     .then(res => {
        console.log('Status added')
        this.$router.go({path: this.$router.path})
        // this.$router.push('/hello')
        // this.$router.replace('/hello')
     })
   }  
      
  },
  created() {
    // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    //   .then(res => {
    //     //  console.log(res.data)
    //   this.todos = res.data
    //   })
    //   .catch(err => console.log(err));
    db.collection('todos').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        //   console.log(doc.data());
        //   console.log(doc.id);
          const id = doc.id;
          const data = doc.data();

          const data1 = {...data, id}
          this.todos.push(data1)

          // console.log(data1)
          // this.$forceUpdate();
      })
      // .catch(err => {
      //   console.log(err.message);
     })         
  }
}
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: orangered;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}

</style>

<template>
  <div>
    <!-- <form @submit.prevent="addTodo"> -->
    <!-- <form @submit="updateTodo">
      <input type="text" v-model="completed" name="completed" >
    </form> -->
    
    <button @click="updateTodo" class="btn">Update All Items</button>
  </div>
</template>


<script>
// import {v4 as uuid} from 'uuid';

export default {
  name: "UpdateTodo",
  data() {
    return {
      completed: false
    }
  },
  methods: {
    updateTodo(e) {
      e.preventDefault();  


      const newTodo = {
        title: this.title,
        completed: false
      }
      // Send up to parent
      this.$emit('add-todo', newTodo);  

      this.title = '';
    }
  }  
}
</script>



<style scoped>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input[type="text"] {
    flex: 10;
    padding: 5px;
  }

  input[type="click"] {
    flex: 2;
  }

</style>
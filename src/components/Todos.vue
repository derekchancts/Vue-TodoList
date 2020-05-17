<template>
  <div>
    <div v-for="(todo, index) in todos" v-bind:key="index">
    <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" 
    v-on:update-todo="$emit('update-todo', todo.id, todo.completed)" />
    </div>
  </div>
</template> 

 

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: ["todos"]
}
</script>



<style scoped>

</style>
<script>
import { mapActions } from 'vuex'

export default {
  props: ['todo'],
  methods: mapActions([
    'deleteTodo',
    'toggleTodo'
  ]),
  computed: {
    
  }
}
</script>

<template>
  <div class="todo">
    <div class="todo-check">
      <input type="checkbox" :id="todo.id" @change="toggleTodo(todo)" :checked="todo.completed">
      <label :for="todo.id">
        <span></span>
      </label>
    </div>
    <div class="todo-content">
      <span v-if="todo.text">{{ todo.text }}</span>
      <small v-if="todo.note">-{{ todo.note }}</small>
    </div>
    <div class="todo-delete">
      <a @click.prevent="deleteTodo(todo.id)">Delete</a>
    </div>
  </div>
</template>

<style scoped>
.todo{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98%;
  min-height: 38px;
  padding: 16px 0;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
}
.todo .todo-check{
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.todo .todo-check input{
  position: absolute;
  left: -9999px;
}
.todo .todo-check input:checked ~ label{
  border: 2px solid #007acc; 
}
.todo .todo-check input:checked ~ label span{
  opacity: 1;
  top: 0;
}
.todo .todo-check label{
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ccc;
  border-radius: 20px;
  cursor: pointer;
  transition: all .2s ease;
}
.todo .todo-check label:hover{
  border: 2px solid #007acc; 
}
.todo .todo-check label span{
  position: relative;
  background-color: #007acc;
  height: 16px;
  width: 16px;
  border-radius: 42px;
  opacity: 0;
  transition: all .2s ease;
  top: 24px;
}
.todo .todo-content{
  height: auto;
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column
}
.todo .todo-content span{
  width: 240px;
  font-size: 16px;
  font-weight: bold;
  word-wrap: break-word;
}
.todo .todo-content small{
  margin-top: 2px;
}
.todo .todo-delete{
  width: 120px;
  text-align: center;
}
.todo .todo-delete a{
  position: relative;
  cursor: pointer;
  color: white;
  background-color: red;
  padding: 8px 16px;
  font-weight: bold;
  border-radius: 4px;
  transition: all .2s ease;
  font-size: 14px;
}
.todo .todo-delete a:hover{
  background-color: rgb(200, 0, 0);
}
</style>
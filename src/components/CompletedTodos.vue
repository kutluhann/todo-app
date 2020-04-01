<script>
import { mapGetters, mapActions } from 'vuex'
import Todo from "./Todo"

export default {
  components: {
    Todo
  },
  computed: mapGetters([
    'getCompletedTodos'
  ]),
  methods: mapActions([
    'deleteAllTodos'
  ])
}
</script>

<template>
  <div class="completed-todos">
    <h2>
      Completed Todos ({{getCompletedTodos.length > 0 ? getCompletedTodos.length : 'empty'}})
      <a v-if="getCompletedTodos.length > 0" @click.prevent="deleteAllTodos(true)" class="delete-all">Delete All</a>
    </h2>
    <transition-group tag="div" class="todo-list" name="todo" mode="out-in"> 
      <Todo v-for="todo in getCompletedTodos" :todo="todo" :key="todo.id"/>
    </transition-group>
  </div>
</template>

<style scoped>
.completed-todos{
  width: 420px;
  margin: 20px;
  position: relative;
}
.todo-list{
  height: 320px;
  overflow-y: auto;
}
.completed-todos .delete-all{
  color: red;
  cursor: pointer;
  text-decoration: underline;
}
</style>
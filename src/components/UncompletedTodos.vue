<script>
import { mapGetters, mapActions } from 'vuex'
import Todo from "./Todo"

export default {
  components: {
    Todo
  },
  computed: mapGetters([
    'getTodos'
  ]),
  methods: mapActions([
    'deleteAllTodos'
  ])
}
</script>

<template>
  <div class="uncompleted-todos">
    <h3>
      Uncompleted Todos ({{getTodos.length > 0 ? getTodos.length : 'empty'}})
      <a v-if="getTodos.length > 0" @click.prevent="deleteAllTodos(false)" class="delete-all">Delete All</a>
    </h3>
    <transition-group tag="div" class="todo-list" name="todo" mode="out-in">
      <Todo v-for="todo in getTodos" :todo="todo" :key="todo.id"/>
    </transition-group>
  </div>
</template>

<style scoped>
.uncompleted-todos{
  width: 420px;
  margin: 20px;
  position: relative;
}
.uncompleted-todos .delete-all{
  color: red;
  cursor: pointer;
  text-decoration: underline;
}
</style>
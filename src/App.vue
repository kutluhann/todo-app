<script>
import AddTodo from "./components/AddTodo"
import UncompletedTodos from "./components/UncompletedTodos"
import CompletedTodos from "./components/CompletedTodos"

export default {
  components: {
    AddTodo,
    UncompletedTodos,
    CompletedTodos
  }
}
</script>

<template>
  <div class="app">
    <AddTodo/>
    <div class="todo-area">
      <UncompletedTodos/>
      <CompletedTodos/>
    </div>
  </div>
</template>

<style>
*{
  font-family: "Roboto Mono";
}
input, button{
  outline: none;
}
.app{
  display: flex;
  align-items: center;
  justify-content: bet;
  flex-direction: column;
}
.todo-area{
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
@media screen and (max-width: 900px) {
  .todo-area{
    flex-direction: column;
  }
}
/*Transitions*/
.todo-enter-active,
.todo-leave-active,
.todo-move{
  transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: opacity, transform;
}
.todo-enter{
  opacity: 0;
  transform: translateX(-50px) scaleY(0.5);
}
.todo-enter-to{
  opacity: 1;
  transform: translateX(0) scaleY(1);
}
.todo-leave-active{
  position: absolute;
}
.todo-leave-to{
  opacity: 0;
}
/*Scrollbar*/
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1; 
  border-radius: 5px;
}
::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 5px;
}
</style>
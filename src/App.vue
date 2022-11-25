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
    <a href="https://github.com/kutluhann/todo-app" target="_blank" class="github-repo">
      <img src="./assets/github.png" alt="github">
      Github
    </a>
  </div>
</template>

<style>
*{
  font-family: "Roboto Mono";
}
body{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
input, button{
  outline: none;
}
.app{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.todo-area{
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.app .github-repo{
  position: fixed;
  bottom: 0;
  right: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 8px;
  font-size: 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: padding-bottom .5s;
}
.app .github-repo:hover{
  padding-bottom: 16px; 
}
.app .github-repo:hover img{
  transform: rotate(720deg);
}
.app .github-repo img{
  width: 24px;
  margin-right: 8px;
  transition: transform .5s;
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
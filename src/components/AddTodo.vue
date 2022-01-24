<script>
export default {
  data () {
    return {
      todo: {
        text: null,
        note: null
      },
      date: new Date()
    }
  },
  methods: {
    addTodo(){
      if(this.todo.text != null){
        this.$store.dispatch('addTodo', {...this.todo, id: Math.floor(Math.random() * 1000000), completed: false})
        this.todo.text = null
        this.todo.note = null
      }
    }
  }
}
</script>

<template>
  <div class="add-todo">
    <h2>Add Todo</h2>
    <form action="" @submit.prevent="addTodo()">
      <div class="inputs">
        <input v-model="todo.text" type="text" class="todo-text" placeholder="Todo">  
        <input v-model="todo.note" type="text" class="todo-note" placeholder="Notes">  
      </div>
      <button type="submit" class="add-todo-button">Add</button>
    </form>
  </div>
</template>

<style scoped>
.add-todo{
  width: 420px;
  margin: 20px;
}
.add-todo form{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.add-todo form .inputs{
  margin-left: 8px;
  margin-right: 16px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.add-todo form .inputs input{
  font-size: 12px;
  padding: 0 8px;
  height: 35px;
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 4px;
  transition: border .2s ease;
}
.add-todo form .inputs input:focus{
  border: 2px solid #aaa;
}
.add-todo form .inputs input::placeholder{
  color: #aaa;
}
.add-todo form .inputs .todo-text{
  margin-bottom: 8px;
  height: 70px;
  font-weight: bold;
  font-size: 18px;
}
.add-todo form .inputs .todo-text::placeholder{
  font-weight: bold;
}
.add-todo form .add-todo-button{
  height: 121px;
  width: 70px;
  border: 0;
  border-radius: 4px;
  background-color: #007acc;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.add-todo form .add-todo-button{
  height: 121px;
  width: 70px;
  border: 0;
  border-radius: 4px;
  background-color: #007acc;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all .2s ease;
}
.add-todo form .add-todo-button:hover{
  background-color: #0073c0;
}
</style>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: JSON.parse(localStorage.getItem('todos')) || []
  },
  mutations: {
    addTodo(state, todo){
      state.todos = [...state.todos, todo]
    },
    deleteTodo(state, id){
      state.todos = state.todos.filter(todo => todo.id != id)
    },
    deleteAllTodos(state, completed){
      state.todos = state.todos.filter(todo => todo.completed != completed)
    },
    toggleTodo(state, todo){
      todo.completed = !todo.completed
    },
    updateLocalStorage(state){
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
  },
  actions: {
    addTodo({ commit }, todo){
      commit('addTodo', todo)
      commit('updateLocalStorage')
    },
    deleteTodo({ commit }, id){
      commit('deleteTodo', id)
      commit('updateLocalStorage')
    },
    deleteAllTodos({ commit }, completed){
      commit('deleteAllTodos', completed)
      commit('updateLocalStorage')
    },
    toggleTodo({ commit }, todo){
      commit('toggleTodo', todo)
      commit('updateLocalStorage')
    }
  },
  getters: {
    getTodos: state => state.todos.filter(todo => todo.completed == false),
    getCompletedTodos: state => state.todos.filter(todo => todo.completed == true)
  }
})
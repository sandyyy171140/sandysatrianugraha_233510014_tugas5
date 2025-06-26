import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([])

  const addTodo = (text) => {
    todos.value.push({
      id: Date.now(),
      text,
      completed: false
    })
  }

  const removeTodo = (id) => {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  const toggleTodo = (id) => {
    const todo = todos.value.find(t => t.id === id)
    if (todo) todo.completed = !todo.completed
  }

  const unfinishedTodos = computed(() => todos.value.filter(t => !t.completed).length)

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    unfinishedTodos
  }
})

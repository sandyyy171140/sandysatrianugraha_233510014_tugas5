<template>
  <div class="todo-container">
    <h2>📝 Todo List</h2>
    <input v-model="newTodo" @keyup.enter="add" placeholder="Tambah tugas..." class="todo-input" />
    <p>
      📌 Belum selesai: <strong>{{ unfinishedTodos }}</strong><br />
      ✅ Selesai: <strong>{{ finishedTodos }}</strong>
    </p>

    <ul>
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <input type="checkbox" :checked="todo.completed" @change="toggle(todo.id)" />
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
        <button @click="remove(todo.id)">❌</button>
      </li>
    </ul>

    <div v-if="finishedTodos > 0" class="finished-message">
      <hr />
      <p>🎉 Kamu sudah menyelesaikan <strong>{{ finishedTodos }}</strong> tugas. Great work!</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTodoStore } from './stores/todoStore'
import { storeToRefs } from 'pinia'

const todoStore = useTodoStore()
const { todos, unfinishedTodos } = storeToRefs(todoStore)

const finishedTodos = computed(() => todos.value.filter(t => t.completed).length)

const newTodo = ref('')

const add = () => {
  if (newTodo.value.trim()) {
    todoStore.addTodo(newTodo.value)
    newTodo.value = ''
  }
}

const remove = (id) => {
  todoStore.removeTodo(id)
}

const toggle = (id) => {
  todoStore.toggleTodo(id)
}
</script>

<style scoped>
body {
  margin: 0;
  background-color: #fcfcfc;
  color: #f0f0f0;
  font-family: 'Segoe UI', sans-serif;
}

.todo-container {
  max-width: 700px;
  margin: 40px auto;
  background-color: #242424;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
}

.todo-input {
  background: #2e2e2e;
  border: 1px solid #555;
  color: #ffffff;
  padding: 12px;
  width: 100%;
  border-radius: 6px;
  margin-bottom: 15px;
  font-size: 16px;
}

.todo-item {
  margin: 12px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
}

.completed {
  text-decoration: line-through;
  color: #8bc34a;
}

button {
  background-color: #ff5252;
  border: none;
  color: white;
  padding: 5px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}
button:hover {
  background-color: #e53935;
}

.finished-message {
  margin-top: 20px;
  color: #8bc34a;
  font-weight: bold;
}
</style>

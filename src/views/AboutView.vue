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
import { useTodoStore } from '@/stores/todoStore'
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
.todo-container {
  max-width: 700px;
  margin: 30px auto;
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  color: #e0e0e0;
  box-shadow: 0 0 10px #000;
}

.todo-input {
  background: #2c2c2c;
  border: 1px solid #444;
  color: white;
  padding: 10px;
  width: 100%;
  border-radius: 6px;
  margin-bottom: 15px;
}

.todo-item {
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.todo-item span {
  flex-grow: 1;
}

.completed {
  text-decoration: line-through;
  color: #81c784;
}

button {
  background-color: #e53935;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #c62828;
}

.finished-message {
  margin-top: 20px;
  color: #81c784;
}
</style>

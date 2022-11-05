import { makeAutoObservable } from "mobx"

class Todo {
    //инициализируем состояние
    todos = [
        { id: 1, title: 'сходи в магаз', completed: false },
        { id: 2, title: 'сходи в магаз-2', completed: false },
        { id: 3, title: 'сходи в магаз-3', completed: false }
    ]

    constructor() {
        makeAutoObservable(this)
    }

    //создадим actions, здесь состояние изменяемое - напрямую изменяем исходный массив
    addTodo(todo) {
        console.log('addTodo')
        this.todos.push(todo)
    }

    //функции map, filter и reduce каждый раз возращают новый массив
    removeTodo(id) {
        console.log('removeTodo')
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo(id) {
        console.log('completed')
        this.todos = this.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    }

}

export default new Todo()
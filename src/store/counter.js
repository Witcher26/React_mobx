import { makeAutoObservable, makeObservable } from "mobx"

// в папке store будет находится вся логика, по взаимодействию с состоянием
class Counter {
    count  = 0 // создаем состояние
    timer = 60
    constructor(){
        makeAutoObservable(this) // передаём параметром контект текущего класса
    }

    // любая созданная фукнция будет action, изменяющая состояние
    increment(){
        this.count =this.count+1
        console.log('increment '+ this.count)
    }

    decrement(){
        this.count =this.count-1
        console.log('decrement '+ this.count)
    }

    //если используем автоматическое (makeAutoObservable) слежение, то любая фукнция, помеченная get - будет компьютет(вычисляемым)
    // преимущество функции в том, что она будет вызываться только в том случае, если какой то параметр изменился
    get total() {
        return 'Count + timer ='+ this.timer + this.count
    }
}

export default new Counter()
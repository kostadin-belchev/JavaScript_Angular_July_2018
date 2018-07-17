abstract class Employee {
  salary : number
  tasks : Array<string>

  constructor(public name : string, public age: number) {
    this.salary = 0
    this.tasks = []
  }
// , ' is working on a complicated task.', ' is taking time off work.', ' is supervising junior workers.'
  work() : void {
    // TODO cycle through tasks
    let currentTask : string = this.tasks.shift()
    console.log(this.name + currentTask)
    this.tasks.push(currentTask)
  }

  getSalary() : number {
    return this.salary
  }

  collectSalary() : void {
    // TODO get paid
    console.log(`${this.name} received ${this.getSalary()} this month.`)
  }
}

class Junior extends Employee {
  constructor(name : string, age : number) {
    super(name, age)
    this.tasks.push(' is working on a simple task.')
  }
}

class Senior extends Employee {
  constructor(name : string, age : number) {
    super(name, age)
    this.tasks.push(' is working on a complicated task.', ' is taking time off work.', ' is supervising junior workers.')
  }
}

class Manager extends Employee {
  divident : number
  
  constructor(name : string, age : number) {
    super(name, age)
    this.divident = 0
    this.tasks.push(' scheduled a meeting.', ' is preparing a quarterly report.')
  }
  
  getSalary() : number {
    return this.salary + this.divident
  }
}
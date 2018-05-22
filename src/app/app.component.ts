import { Component } from '@angular/core';
import { variable, DeclareVarStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todos';
  todos = [
  {
    label: 'milk',
    done: false,
    no: 2
  },
  {
    label: 'Buttermilk',
    done: true,
    no: 3
  },
  {
    label: 'Sugarmilk',
    done: false,
    no: 5
  },
  {
    label: 'cleanmilk',
    done: true,
    no: 6
  },
];


 addTodo(newTodolabel) {
  // tslint:disable-next-line:prefer-const
  // tslint:disable-next-line:no-var-keyword
  // tslint:disable-next-line:prefer-const
   const newTodo = {
    label: newTodolabel,
    no: 1,
    done: false
  };
  this.todos.push(newTodo);
}

deleteTodo(todo) {
  this.todos = this.todos.filter(t => t.label !== todo.label);
}
markAsDoneTodo(todo) {
  todo.done = true;
}

}

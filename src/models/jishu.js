import { observable, action } from 'mobx'
class Jishu {
 @observable todos ={num:12};      
 @action
  addTodo(title) {
    this.todos.num+=1;
  }
}
export default new Jishu()

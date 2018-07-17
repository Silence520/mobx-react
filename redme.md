## mobx 在react 简单适用

#### 下载mobx
```javascript
npm install --save-dev mobx
npm install --save-dev mobx-react
```
#### 创建store
```javascript

// index.js
import Jishu from './jishu'
const store = {
  Jishu,
}

export default store

//jishu.js
import { observable, action } from 'mobx'
class Jishu {
 @observable todos ={num:12};      
 @action
  addTodo(title) {
    this.todos.num+=1;
  }
}
export default new Jishu()
```

#### APP 根节点绑定
```javascript
import { Provider } from 'mobx-react'
import  RootRouter   from './router/index';
import stores from './models/index'
import Home from "./views/home/index";
ReactDOM.render(
   <Provider { ...stores}>
      <Home   />
  </Provider>,
 document.getElementById('root')
);
```

#### view 视图引用
```javascript
import { observer,inject } from "mobx-react";
import  './index.css';

@inject('Jishu')
@observer
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      num:3
    }
    this.handleadd = this.handleadd.bind(this);
  }
  
  handleadd() {
    this.props.Jishu.addTodo()
  }
  render() {
    console.log(this.props.Jishu.todos.num)
    return [
        <button key='1' onClick={this.handleadd}> add</button>,<h1 key='12'>{this.props.Jishu.todos.num}</h1>
    ];
  }
}

```
#### 运行该项目
```javascript

//下载项目
git clone  https://github.com/Silence520/mobx-react.git

//下载依赖
npm install

//启动环境
npm start

```
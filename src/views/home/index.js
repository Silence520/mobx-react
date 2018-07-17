import { observer,inject } from "mobx-react";
import  './index.css';
function headr(WrappedComponent) {
  return class HOC extends React.Component {
    render() {
      const data = 'hello reactt';
      return (
        <div>
          <div className="demo-header">我是标题哈哈</div>
          <WrappedComponent {...this.props} data={data} />
        </div>
      );
    }
  };
}


@headr
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
  componentWillMount(){
 console.log('componentWillMount')
  }
 componentDidMount(){
 console.log('componentDidMount')
 }
 componentWillReceiveProps(){
 console.log('componentWillReceiveProps')
 }
 shouldComponentUpdate(){
 console.log('shouldComponentUpdate')
 return true
 }
 componentWillUpdata(){
 console.log('componentWillUpdata')
 }
 componentDidUpdate(){
 console.log('componentDidUpdate')
 }
 componentWillUnmount(){
   console.log('componentWillUnmount')
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



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

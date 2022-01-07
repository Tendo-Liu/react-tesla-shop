import React from 'react';
import {Provider} from 'react-redux';
import store from './store/index';
//renderRoutes 读取路由配置转化为 Route 标签
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App;
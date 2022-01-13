import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
//renderRoutes 读取路由配置转化为 Route 标签
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { persistor } from './store';
import { PersistGate } from 'redux-persist/lib/integration/react';

// 所有组件的外壳组件
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <BrowserRouter>
            {renderRoutes(routes)}
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App;
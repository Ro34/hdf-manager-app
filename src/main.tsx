import React from 'react'
import ReactDOM from 'react-dom/client'
// import 'antd/dist/antd.compact.css'//引入紧凑主题
import {ConfigProvider} from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import {HashRouter as Router} from 'react-router-dom'
import {
    Routes,Route
} from "react-router-dom";
import App from './App'
import './index.css'
import Login from "./pages/login";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
      <ConfigProvider locale={zhCN}>
          <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='/admin/*' element={<App/>} />
          </Routes>

      </ConfigProvider>
  </Router>

)

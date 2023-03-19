import React from 'react'
import { Routes,Route } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import MyLayout from "./components/MyLayout";

import Dashboard from "./pages/dashboard";
import Users from "./pages/user";
import ArticleList from "./pages/articles/list";
import ArticleCategories from "./pages/articles/categories";
import MedicineList from "./pages/medicine/list";
import MedicineCategories from "./pages/medicine/categories";

function App() {

  return (
      <MyLayout>
          <Routes>
              <Route path='dashboard' element={<Dashboard />}/>
              <Route path='users' element={<Users />} />
              <Route path='articles/list' element={<ArticleList />} />
              <Route path='articles/categories' element={<ArticleCategories />} />
              <Route path='medicine/list' element={<MedicineList />} />
              <Route path='medicine/categories' element={<MedicineCategories />} />
          </Routes>
      </MyLayout>

  )
}

export default App

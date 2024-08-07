import * as React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Spin, ConfigProvider } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './theme'

import {
  DutyList,
  DutyEditor
} from './pages'

function App() {
  return (
    <ConfigProvider
      theme={styles}>
      <React.Suspense
        fallback={
          <Spin />
        }
        >
          <BrowserRouter>
            <Routes>
              <Route path='/'>
                <Route index element={<DutyList />} />
                <Route path='/editor/:id' element={<DutyEditor />} />
                <Route path='/editor' element={<DutyEditor />} />
              </Route>
            </Routes>
          </BrowserRouter>
      </React.Suspense>
    </ConfigProvider>
  );
}

export default App;

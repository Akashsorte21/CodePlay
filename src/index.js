import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Editor from './components/Editor';
import Preview from './components/Preview';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Editor />
  },
  {
    path: '/preview',
    element: <Preview />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
    </RouterProvider>
  </Provider>

);

reportWebVitals();

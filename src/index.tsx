import ReactDOM from 'react-dom/client'
import './output.css'
import App from './App'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { AppDataProvider } from './AppDataContext';

const domNode = document.getElementById('root')
const router = createBrowserRouter([
    {
      path: "/:spaceId/:pageId",
      element:  <AppDataProvider><App/></AppDataProvider>,
      children: []
    },
    {
      path: "/:spaceId",
      element:  <AppDataProvider><App/></AppDataProvider>,
      children: []
    },
    {
      path: "/",
      element:  <AppDataProvider><App/></AppDataProvider>,
      children: []
    }
  ]);
const root = ReactDOM.createRoot(domNode as Element)

root.render(<RouterProvider router={router} />)

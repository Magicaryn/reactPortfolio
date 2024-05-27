import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App.jsx'
import AboutPage from './pages/About.jsx';
import ContactPage from './pages/Contact.jsx';
import PortfolioPage from './pages/Portfolio.jsx';
import ResumePage from './pages/resume.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutPage />
      },
      {
        path: 'Contact',
        element: <ContactPage />
      },
      {
        path: 'Portfolio', 
        element: <PortfolioPage />
      },
      {
        path: 'Resume',
        element: <ResumePage />
      }
    ]
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
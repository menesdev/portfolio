import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { HomePage } from '../pages/HomePage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { ResumePage } from '../pages/ResumePage';
import { GamePage } from '../pages/GamePage';
import { ContactPage } from '../pages/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'resume', element: <ResumePage /> },
      { path: 'game', element: <GamePage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);
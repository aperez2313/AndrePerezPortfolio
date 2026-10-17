import { createBrowserRouter } from 'react-router'
import { Layout } from './components/layout/Layout'
import { CaseStudyPage } from './pages/CaseStudyPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PagePending } from './pages/PagePending'
import { WorkPage } from './pages/WorkPage'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'work', element: <WorkPage /> },
      { path: 'work/:slug', element: <CaseStudyPage /> },
      {
        path: 'about',
        element: (
          <PagePending
            title="About"
            description="My journey from running digital commerce platforms to improving the systems behind them. Full page coming next."
          />
        ),
      },
      {
        path: 'contact',
        element: (
          <PagePending
            title="Contact"
            description="Email helloandreperez@outlook.com or find me on LinkedIn. The full contact page is coming next."
          />
        ),
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

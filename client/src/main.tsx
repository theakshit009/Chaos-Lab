import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ExperimentsProvider } from './context/ExperimentProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <ExperimentsProvider>
    <App />
  </ExperimentsProvider>,
)

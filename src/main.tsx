import * as React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import App from './App'
import './output.css'
import './index.css'
import '../public/css/all.css'

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOMClient.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

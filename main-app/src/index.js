import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const ReactComponent = React.lazy(() => import('reactApp/ReactComponent'));
const AngularComponent = React.lazy(() => import('angularApp/AngularComponent'));

const App = () => (
  <div>
    <h1>Microfrontend con React y Angular</h1>
    <Suspense fallback={<div>Cargando React...</div>}>
      <ReactComponent />
    </Suspense>
    <Suspense fallback={<div>Cargando Angular...</div>}>
      <AngularComponent />
    </Suspense>
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

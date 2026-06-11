import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Netlify Identity recovery / invite / confirmation emails link to the site root
// with the token in the URL hash (e.g. "/#recovery_token=..."). The Identity
// widget only runs on /admin, so when a link lands on the homepage there is
// nothing to catch the token. Forward those token links to /admin, where the
// widget picks up the hash and opens the right modal (e.g. set a new password).
const idHash = window.location.hash;
if (/(recovery_token|invite_token|confirmation_token|email_change_token)=/.test(idHash) && window.location.pathname !== '/admin') {
  window.location.replace('/admin' + window.location.search + idHash);
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
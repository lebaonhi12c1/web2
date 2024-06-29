import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { SWRConfig } from 'swr';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
  <SWRConfig
          value={{
              revalidateOnFocus: false,
              revalidateOnReconnect: false,
              shouldRetryOnError: false,
          }}
      >
          <App />
      </SWRConfig>
  </GoogleOAuthProvider>
)

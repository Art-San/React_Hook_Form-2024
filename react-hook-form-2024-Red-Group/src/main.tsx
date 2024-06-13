import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { HookFormProvider } from './HookFormProvider.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<HookFormProvider>
			<App />
		</HookFormProvider>
	</React.StrictMode>
)

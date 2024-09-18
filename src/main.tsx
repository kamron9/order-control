import { createRoot } from 'react-dom/client'

import { QueryClient, QueryClientProvider } from 'react-query'
import './index.css'
import Root from './Root'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnMount: false,
		},
	},
})
createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<Root />
	</QueryClientProvider>
)

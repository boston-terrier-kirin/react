import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Blog from './components/Blog';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Blog />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;

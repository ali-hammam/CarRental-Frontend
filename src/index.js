import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
//import 'reflect-metadata';

const CarRental = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity
      },
    }
  });
  
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
};


ReactDOM.render(<CarRental />, document.getElementById('root'))

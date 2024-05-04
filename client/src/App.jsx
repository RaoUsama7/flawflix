import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddMovies, Footer, NavBar } from './components';
import { Home, VideoDetails } from './pages';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <div className=" mx-auto bg-gray-800  pt-4 md:p-4">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="px-5 py-4">
            <NavBar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<VideoDetails />} />
            <Route path="/addmovies" element={<AddMovies />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Posts from './components/Posts';
import Post from './components/Post';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

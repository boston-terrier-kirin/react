import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomeRoute from './routes/HomeRoute';
import ContactRoute from './routes/ContactRoute';
import PostsRoute from './routes/PostsRoute';
import Header from './components/Header';
import RootRoute from './routes/RootRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<RootRoute />}>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/contact" element={<ContactRoute />} />
          <Route path="/article/:id" element={<PostsRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

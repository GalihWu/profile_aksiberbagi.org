import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AllArticles from './pages/AllArticles';
import NavbarHome from './components/NavbarHome';
import NavbarDefault from './components/NavbarDefault';
import Footer from './components/Footer';
import Article from './pages/Article';
import ScrollToTop from './components/ui/ScrollTop';

// Layout dengan Navbar biasa
const DefaultLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <NavbarDefault />
    {children}
    <Footer />
  </>
);

// Layout khusus untuk homepage
const HomeLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <NavbarHome />
    {children}
    <Footer />
  </>
);

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      {/* Route dengan layout khusus */}
      <Route
        path="/"
        element={
          <HomeLayout>
            <LandingPage />
          </HomeLayout>
        }
      />

      {/* Route dengan layout default */}
      <Route
        path="/articles"
        element={
          <DefaultLayout>
            <AllArticles />
          </DefaultLayout>
        }
      />

      <Route
        path="/article"
        element={
          <DefaultLayout>
            <Article />
          </DefaultLayout>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;

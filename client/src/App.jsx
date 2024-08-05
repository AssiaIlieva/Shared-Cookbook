import { Routes, Route } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';
import { ModalProvider } from './contexts/ModalContext';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Recipes from './components/recipes/Recipes';
import Footer from './components/footer/Footer';
import RecipeCreate from './components/recipeCreate/RecipeCreate';
import RecipeDetails from './components/recipeDetails/RecipeDetails';
import RecipeEdit from './components/recipeEdit/RecipeEdit';
import AuthGuard from './components/common/IsAuthGuard';
import GuestGuard from './components/common/IsGuestGuard';
import TipCreate from './components/tipCreate/TipCreate';
import Tips from './components/tips/Tips';
import TipDetails from './components/tipDetails/TipDetails';
import TipEdit from './components/tipEdit/TipEdit';

function App() {
  return (
    <AuthContextProvider>
      <ModalProvider>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/tips" element={<Tips />} />
            <Route element={<GuestGuard />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/recipes/:recipeId/details" element={<RecipeDetails />} />
            <Route path="/tips/:tipId/details" element={<TipDetails />} />
            <Route element={<AuthGuard />}>
              <Route path="/recipes/create" element={<RecipeCreate />} />
              <Route path="/recipes/:recipeId/edit" element={<RecipeEdit />} />
              <Route path="/tips/create" element={<TipCreate />} />
              <Route path="/tips/:tipId/edit" element={<TipEdit />} />
              <Route path="/logout" element={<Logout />} />
            </Route>
          </Routes>
          <Footer />
        </>
      </ModalProvider>
    </AuthContextProvider>
  );
}

export default App;

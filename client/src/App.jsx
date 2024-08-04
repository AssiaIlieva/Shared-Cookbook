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

function App() {
  return (
    <AuthContextProvider>
      <ModalProvider>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route element={<GuestGuard />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/recipes/:recipeId/details" element={<RecipeDetails />} />
            <Route element={<AuthGuard />}>
              <Route path="/recipes/create" element={<RecipeCreate />} />
              <Route path="/recipes/:recipeId/edit" element={<RecipeEdit />} />
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

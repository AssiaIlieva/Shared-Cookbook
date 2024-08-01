import { Routes, Route } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Recipes from './components/recipes/Recipes';
import Footer from './components/footer/Footer';
import RecipeCreate from './components/recipeCreate/RecipeCreate';
import RecipeDetails from './components/recipeDetails/RecipeDetails';

function App() {
  return (
    <AuthContextProvider>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipe/create" element={<RecipeCreate />} />
          <Route path="/recipes/:recipeId/details" element={<RecipeDetails />} />
        </Routes>
        <Footer />
      </>
    </AuthContextProvider>
  );
}

export default App;

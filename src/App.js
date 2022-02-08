import { useReducer } from 'react';
import { AuthContext } from './Auth/AuthContext';
import { AuthReducer } from './Auth/AuthReducer';
import { AppRouter } from './Routers/AppRouter';
import './App.css';


const init = () => {
  return {
    logueado: false
  }
}

function App() {

  const [user, dispatch] = useReducer(AuthReducer, {}, init);

  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter/>
  
    </AuthContext.Provider>
  );
}

export default App;

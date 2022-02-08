import { useEffect, useReducer } from 'react';
import { AuthContext } from './Auth/AuthContext';
import { AuthReducer } from './Auth/AuthReducer';
import { AppRouter } from './Routers/AppRouter';
import './App.css';


const init = () => {
  return JSON.parse(localStorage.getItem('user')) || {
    logueado: false
  }
}

function App() {

  const [user, dispatch] = useReducer(AuthReducer, {}, init);

  useEffect(() => {
  
    localStorage.setItem('user', JSON.stringify(user, null, 3))

  }, [user]);


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

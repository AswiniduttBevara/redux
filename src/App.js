import React from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';


function App() {
  const authentication = useSelector(state => state.auth.isAuthenticated)
  return (
    <React.Fragment>
      <Header />
      {!authentication && <Auth />}
      {authentication && <UserProfile />}
      <Counter />
    </React.Fragment>  
  );
}

export default App;

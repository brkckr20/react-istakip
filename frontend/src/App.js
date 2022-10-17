import { Switch, Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import Login from './pages/Login'
import Navigation from './components/Navigation'
import Form from './components/Form'
import Tables from './components/Tables';
import bg from './assets/bg.jpg';
import ProtectedRoutes from './pages/ProtectedRoutes';
import Register from './pages/Register';
import Company from './pages/Company';

function App() {

  const user = useSelector(state => state.auth.user);
  const history = useHistory();
  useEffect(() => {
    if (!user) {
      history.push('/giris')
    }
    
    // eslint-disable-next-line
  }, [user])

  return (
    <div className='min-h-screen relative z-10' id='main' style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      {user && (<Navigation />)}
      <Switch>
        <ProtectedRoutes exact path="/" component={HomePage} />
        <Route exact path="/giris">
          <Login />
        </Route>
        <Route exact path="/kayit">
          <Register />
        </Route>
        <Route exact path="/firma">
          <Company />
        </Route>
      </Switch>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Form />
      <Tables />
    </>
  )
}

export default App;
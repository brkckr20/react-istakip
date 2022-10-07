import Login from './pages/Login'
import Navigation from './components/Navigation'
import Form from './components/Form'
import Tables from './components/Tables';
import { Switch, Route } from 'react-router-dom';
import bg from './assets/bg.jpg';
import ProtectedRoutes from './pages/ProtectedRoutes';

function App() {
  return (
    <div className='min-h-screen relative z-10' id='main' style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Switch>
        <ProtectedRoutes exact path="/" component={HomePage} />
        <Route exact path="/giris">
          <Login />
        </Route>
        {/* <Route exact path="/">
          <Navigation />
          <Form />
          <Tables />
        </Route> */}

      </Switch>
    </div>
  );
}

function HomePage(props) {
  console.log(props);
  return (
    <>
      <Navigation />
      <Form />
      <Tables />
    </>
  )
}

export default App;
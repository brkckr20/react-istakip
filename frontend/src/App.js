import bg from './assets/bg.jpg';
import Login from './pages/Login'
import Navigation from './components/Navigation'
import Form from './components/Form'
import Tables from './components/Tables';
function App() {
  return (
    <div className='min-h-screen relative z-10' id='main' style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Navigation />
      {/* <Login /> */}
      <Form />
      <Tables />
    </div>
  );
}
export default App;
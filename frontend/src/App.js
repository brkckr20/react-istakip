import Login from './pages/Login'
import Navigation from './components/Navigation'
import Form from './components/Form'
import Tables from './components/Tables';
function App() {
  return (
    <div className='bg-slate-800 h-screen'>
    <Navigation />
    {/* <Login /> */}
    <Form />
    <Tables />
    </div>
  );
}
export default App;
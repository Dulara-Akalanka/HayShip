import { BrowserRouter} from 'react-router-dom';
import './App.css';

//components
import Navbar from './components/Navbar';
// import AppBar from './navigation/Appbar';

function App() {
  return (

    <div className="App">
         {/* <AppBar /> */}
     <BrowserRouter>
      <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;

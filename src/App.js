
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      
      <Navbar></Navbar>
      <ItemListContainer greeting="Fans The Office ItemListContainer" />
    </div>
  );
}

export default App;

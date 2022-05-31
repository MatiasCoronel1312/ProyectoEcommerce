
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <div className="App">
      
      <Navbar></Navbar>
      {/* <ItemListContainer greeting="Fans The Office ItemListContainer" /> */}
      <ItemDetailContainer greeting="Fans The Office"/>
    </div>
  );
}

export default App;

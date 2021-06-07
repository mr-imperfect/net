import logo from './logo.svg';
import './App.css';
import {originals,actions} from './url'
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Rowposter from './Components/Rowposter/Rowposter';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Rowposter title="Originals" url={originals} />
      <Rowposter title="action" issmall url={actions}/>
      
     
    </div>
  );
}

export default App;

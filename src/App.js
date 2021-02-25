
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './font.css';

import Routers from './Routers/Routers';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
<Routers/>
    </div>
  );
}

export default App;

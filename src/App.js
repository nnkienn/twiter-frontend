import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Componants/Homepages/Homepage';
import Authentication from './Componants/Authentication/Authentication';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={true?<Homepage/>:<Authentication/>}>

      </Route>
     </Routes>
    </div>
  );
}

export default App;

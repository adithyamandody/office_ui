import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddDelivery } from './components/addDelivery/AddDelivery';
import AddParty from './pages/AddParty/AddParty';
import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';
import Reciept from './pages/Receipt/Reciept';
import Sales from './pages/Sales/Sales';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<List />} />
        <Route path='/hotels/:id' element={<Hotel />} />
        <Route path='/addParty' element={<AddParty />} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/receipt' element={<Reciept />} />
        <Route path='/addDelivery' element={<AddDelivery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

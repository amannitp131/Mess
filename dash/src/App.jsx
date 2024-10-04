import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Studash from './components2/studash';
import Makepayment from './components2/Makepayment';
import Payment from './components2/Payment';
import Requestleave from './components2/Requestleave';
import Comdash from './components1/Comdash';
import Predictor from './components1/Predictor';
import Raise from './components1/Raise';




import React from 'react'

export default function App() {
  return (
    <div>
         <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Studash />} /> {/* Default route */}
          <Route path="/makepayment" element={<Makepayment />} /> {/* /makepayment route */}
          <Route path="/payments" element={<Payment />} />
          <Route path='/requestleave' element={<Requestleave/>} />
        </Routes>
      </div>
    </Router> 
    </div>
    // <div>
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<Comdash />} /> 
    //       <Route path="/raise" element={<Raise />} />
          
    //       <Route path="/Predictor" element={<Predictor />} />
         
    //     </Routes>
    //   </div>
    // </Router>
    // </div>
  )
}

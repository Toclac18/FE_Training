// import React from 'react';
// import GoogleSearchPage from './google_interface/GoogleSearchPage';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import LoginForm from "./login_form/Main/LoginForm";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route index element={<GoogleSearchPage/>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App;

import React from 'react';
import GoogleSearchPage from './google_interface/GoogleSearchPage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Routes } from 'react-router-dom';
import LoginForm from "./login_form/Main/LoginForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<GoogleSearchPage />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Dashboard from './Dashboard';
// import Navbar from './Navbar';

// function App() {
//   return (
//     <BrowserRouter>
//     <Navbar></Navbar>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

// Lazy loaded components
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Dashboard = lazy(() => import('./Dashboard'));

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/dashboard', element: <Dashboard /> }
];

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Suspense is required for lazy loading */}
      <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </Suspense>

    </BrowserRouter>
  );
}

export default App;



import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Navbar from './components/navbar';
import About from './components/section-about';
import Portfolio from './components/section-portfolio';
import Contact from './components/section-contact';
import Footer from './components/footer';

import { checkPosition } from './utilities/model';

import '../style/global.css';
import '../style/section-global.css';
import '../style/global-media-queries.css';

// class App extends Component {
//   componentDidMount() {
//     checkPosition();
//     document.addEventListener('scroll', checkPosition);
//   }

//   render() {
//     return (
//       <div>
//         <Navbar />
//         <About />
//         <Portfolio />
//         <Contact />
//         <Footer />
//       </div>
//     );
//   }
// };

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

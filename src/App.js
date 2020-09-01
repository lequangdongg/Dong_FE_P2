import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './routes';
function App() {
  return (
    <React.Fragment>
      <Header />
      <Router />
      <Footer />
    </React.Fragment>
  );
}

export default App;

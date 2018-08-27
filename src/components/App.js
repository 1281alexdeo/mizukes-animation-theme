import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import NavBar from './NavBar';
import ScrollReveal from 'scrollreveal';
import NavBar from './NavBar';
import Home from './Home';
import NewsLetter from './NewsLetter';
import Boxes from './Boxes';
import About from './About';
import Authors from './Authors';
import Contact from './Contact';
import Footer from './Footer';
import ScrollableAnchor from 'react-scrollable-anchor';
import ReallySmoothScroll from 'really-smooth-scroll';

import Reveal from 'react-reveal/Reveal';
ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
      <Reveal>
        <div>
          <NavBar />

          <ScrollableAnchor id={'home'}>
            <Home />
          </ScrollableAnchor>
          <NewsLetter />

          <Boxes />

          <ScrollableAnchor id={'about'}>
            <About />
          </ScrollableAnchor>
          <ScrollableAnchor id={'authors'}>
            <Authors />
          </ScrollableAnchor>
          <ScrollableAnchor id={'contact'}>
            <Contact />
          </ScrollableAnchor>
          <Footer />
        </div>
      </Reveal>
    );
  }
}
export default App;

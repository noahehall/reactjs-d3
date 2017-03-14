import React, { PropTypes } from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import s from '../styles/app.style';

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

function App({ children, routes }) {
  function generateMapMenu() {
    let path = '';

    function nextPath(route) {
      path += (
        (path.slice(-1) === '/' ? '' : '/') +
        (route.path === '/' ? '' : // eslint-disable-line
        route.path.slice(0, 1) === '/' ? route.path.slice(1) : route.path)
      );

      return route.path;
    }

    return (
      routes.filter(route => route.mapMenuTitle)
        .map((route, index, array) => (
          <span key={index}>
            <Interactive
              as={Link}
              {...s.link}
              to={nextPath(route)}
            >{route.mapMenuTitle}</Interactive>
            {(index + 1) < array.length && ' / '}
          </span>
        ))
    );
  }


  return (
    <div style={s.root}>
      <h1 style={s.title}>ReactS + D3 = Data Viz Happiness</h1>
      <Interactive
        as="a"
        href="https://github.com/noahehall/reactjs-d3-universal"
        style={s.repoLink}
        {...s.link}
      >https://github.com/noahehall/reactjs-d3-universal</Interactive>
      <nav style={s.mapMenu}>
        {generateMapMenu()}
      </nav>
      {children}
      <div style={s.creditLine}>
        <Interactive
          as="a"
          href="https://www.plusfame.io"
          interactiveChild
          focus={{}}
          touchActive={{}}
          touchActiveTapOnly
        >
          project by <span {...s.childLink}>@noahedwardhall</span>
        </Interactive>
      </div>
    </div>
  );
}

App.propTypes = propTypes;

export default App;

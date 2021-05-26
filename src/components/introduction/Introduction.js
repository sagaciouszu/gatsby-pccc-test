import React from 'react';
import Scroll from '../common/Scroll';

const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Prank Call Call Center</h1>
      <p>
        Welcome to the home of the {' '}
        <a href="https://prankcallcall.center">Prank Call Call Center</a>
        <br />
        and released for free under the{' '}
        <a href="http://html5up.net/license">Creative Commons</a>.
      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button" class="button primary">
              Get to the good stuff!
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>


export default Introduction;

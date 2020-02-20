import React from 'react';
import { Link } from 'gatsby';

import CapabilityList from './CapabilityList';

const Capabilities = () =>
  <section id="two" className="wrapper style3 fade-up">
    <div className="inner">
      <h2>Our Current Projects</h2>
      <p>
        We have a well rounded portfolio of projects this year, ranging in fields like real-time object detection to
        self driving cars to even educational initiatives.
      </p>
      <div className="features">
        <CapabilityList />
      </div>
      {/* <ul className="actions">
        <li>
          <Link className="button" to="/generic">
            Learn more
          </Link>
        </li>
      </ul> */}
    </div>
  </section>

export default Capabilities;

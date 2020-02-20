import React from 'react';

import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const Contact = () =>
  <section id="three" className="wrapper style1 fade-up">
    <div className="inner">
      <h2>Get in touch</h2>
      <p>
        Want to work with us? We're best reached by emailing one our executives, listed down below.
      </p>
      <ul>
        <li>Co-President | Dylan Fernandes - dkf5gz@virginia.edu</li>
        <li>Co-President | Jake Grigsby - jcg6dn@virginia.edu</li>
        <li>Vice President | Brian Yu - bry4xm@virginia.edu</li>
        <li>Executive Board | Atishay Kasera - ak4kgk@virginia.edu</li>
      </ul>
      <div className="split style1">
        {/* <ContactForm /> */}
        {/* <ContactInformation /> */}
      </div>
    </div>
  </section>

export default Contact;

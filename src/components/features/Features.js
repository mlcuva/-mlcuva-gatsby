import React from 'react';

import pic1 from '../../images/pic01.jpg';
import pic2 from '../../images/pic02.jpg';
import pic3 from '../../images/pic03.jpg';

import Feature from './Feature';

const Features = () => {
  const FEATURES = [
    {
      href: '/#',
      image: pic1,
      heading: 'Workshops',
      description: 'As part of our outreach initiatives, we give workshops about once or twice a month to educate the UVA community on machine learning tactics and techniques. Our theme for Fall 2019 / Spring 2020 is classification techniques and convolutional neural networks.',
      to: {
        href: '/generic',
        label: 'Learn more',
      },
    },
    {
      href: '/#',
      image: pic2,
      heading: 'Guest Speakers',
      description: 'To promote awareness in the field, we have experts from the industry come and speak to students to talk about their research and the field at large.',
      to: {
        href: '/generic',
        label: 'Learn more',
      },
    },
    {
      href: '/#',
      image: pic3,
      heading: 'Projects',
      description: 'Most of our meetings are project-based meetings, where the groups get together and work on side projects. Check out our projects down below.',
      to: {
        href: 'three',
        label: 'Learn more',
      },
    },
  ];

  const [features] = React.useState(FEATURES);

  return (
    <section id="one" className="wrapper style2 spotlights">
      {features.map(feature => <Feature key={feature.heading} {...feature} />)}
    </section>
  );
}

export default Features;

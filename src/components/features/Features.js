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
      heading: 'Community, or something that looks like one.',
      description: 'Join us and listen to live and older shows of all sorts. With the web-based client, there\'s no set up required!. If you\'re already familiar with IRC we have our server information here.',
      to: {
        href: '/chat',
        label: 'Fire it up!',
      },
    },
    {
      href: '/#',
      image: pic2,
      heading: 'Something else!',
      description: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.',
      to: {
        href: '/generic',
        label: 'Learn more',
      },
    },
    {
      href: '/#',
      image: pic3,
      heading: 'For the technically inclined...',
      description: 'Know how to use all this stuff already? Just want to use your own clients? Find out here.',
      to: {
        href: '/servers',
        label: 'Gimme the details!',
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

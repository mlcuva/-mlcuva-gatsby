import React from 'react';

import Capability from './Capability';

const CapabilityList = () => {
  const CAPABILITIES = [
    {
      heading: 'AWS DeepRacer',
      description: "We can't afford a full-size autonomous vehicle, so we bought one about 1/18th the size instead. We'll be using reinforcement learning to create our very own self driving car!",
      iconClass: 'fa-code',
    },
    {
      heading: 'Sustainable Waste Disposal',
      description: "Using a TPU given to us by the Sustainability department at UVA, we're building a waste-disposal system that can detect the type of waste you're throwing away, and automatically redirect it into the right bin!",
      iconClass: 'fa-lock',
    },
    // {
    //   heading: 'Dorem ipsum amet',
    //   description: 'Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
    //   iconClass: 'fa-cog',
    // },
    // {
    //   heading: 'Forem ipsum amet',
    //   description: 'Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
    //   iconClass: 'fa-desktop',
    // },
    // {
    //   heading: 'Corem ipsum amet',
    //   description: 'Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
    //   iconClass: 'fa-chain',
    // },
    // {
    //   heading: 'Norem ipsum amet',
    //   description: 'Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
    //   iconClass: 'fa-diamond',
    // },
  ]

  const [capabilities] = React.useState(CAPABILITIES);

  return (
    <>
      {capabilities.map((capability) => <Capability key={capability.heading} {...capability} />)}
    </>
  )
}

export default CapabilityList;

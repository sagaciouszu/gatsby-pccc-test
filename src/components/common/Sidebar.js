import React from 'react';
import Scrollspy from 'react-scrollspy';

import Tab from './Tab';

const Sidebar = () => {
  const [tabs] = React.useState([
    { content: 'Welcome', href: 'intro' },
    { content: 'Live Chat and Radio', href: 'one' },
    { content: 'What is the PCCC?', href: 'two' },
    { content: 'Who are the PCCC?', href: 'three' },
  ]);

  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
          >
            {tabs.map(tab => <Tab key={tab.href} {...tab} />)}
          </Scrollspy>

        </nav>
          <iframe title="Live" src="https://prankcallcall.center/public/pccc/embed" frameBorder="0" allowtransparency="true"></iframe>
      </div>
          </section>
  );
}

export default Sidebar;

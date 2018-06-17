import React from 'react';
import AppLayout from '../../containers/AppLayout';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <AppLayout className="home">
        <div className="banner">
          <img src="/images/signature.png"/>
        </div>
        <section className="photography">
          <div className="container">
            <div className="signature">
              <img src="/images/signature.png"/>
            </div>
            <div className="caption">
              <p>I am an amateur photographer that practices on my own time. For photography inquiries, please email <a href="mailto:chrissalinasjr@gmail.com">chrissalinasjr@gmail.com</a>.</p>
            </div>
          </div>
        </section>
      </AppLayout>
    );
  }
}

export default Home;
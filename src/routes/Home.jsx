import React from 'react';
import AppLayout from '../containers/AppLayout';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <AppLayout class="home">
        <div className="banner">
          <h1>Christopher Salinas Jr.</h1>
        </div>
        <section className="snapchat">
          <div className="container">
            <div className="caption">
              <h1>Add me on Snapchat!</h1>
              <p>
                Adding me on Snapchat will allow you to view my public story! I
                post pictures and videos throughout my day of some of my
                favorite activities.
              </p>
            </div>
            <div className="snap-id">
              <img src="/images/bitmojiSnapcode.png"/>
              <div>sandiajr</div>
            </div>
          </div>
        </section>
      </AppLayout>
    );
  }
}

export default Home;
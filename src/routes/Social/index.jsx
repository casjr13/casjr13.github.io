import React from 'react';
import AppLayout from '../../containers/AppLayout';
import InstagramFeed from '../../components/InstagramFeed/index';

import './Social.scss';

class Social extends React.Component {
  render = () => (
    <AppLayout className="social">
      <div className="banner" />
      <section className="snapchat">
        <div className="container">
          <h1>Add me on Snapchat!</h1>
          <div className="snap-id">
            <img src="/images/bitmojiSnapcode.png" />
            <div>sandiajr</div>
          </div>
        </div>
      </section>
      <section className="instagram">
        <div className="container">
          <h1>Follow me on Instagram!</h1>
          <p><a href="https://instagram.com/thischris__" target="_blank">@ThisChris__</a></p>
          <InstagramFeed username="thischris__" />
        </div>
      </section>
    </AppLayout>
  );
}

export default Social;
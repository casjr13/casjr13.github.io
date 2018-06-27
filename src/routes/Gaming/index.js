import React from 'react';
import AppLayout from '../../containers/AppLayout';

import './Gaming.scss';

class Home extends React.Component {
  componentDidMount() {
    let embed;
    const script = document.createElement('script');
    script.setAttribute('src', 'https://embed.twitch.tv/embed/v1.js');
    script.addEventListener('load', () => {
      embed = new window.Twitch.Embed('twitch', {
        allowfullscreen: true,
        autoplay: false,
        channel: 'sandia_jr',
        height: '100%',
        layout: 'video',
        theme: 'dark',
        width: '100%',
      });
    });
    document.body.appendChild(script);
  }

  render() {
    return (
      <AppLayout className="gaming">
        <div className="banner"/>
        <section className="twitch">
          <div className="container">
            <h1>Twitch</h1>
            <p>If I'm currently broadcasting on Twitch, you may watch it here.</p>
            <div className="video">
              <div id="twitch"/>
            </div>
          </div>
        </section>
        <section className="youtube">
          <div className="container">
            <h1>YouTube Live</h1>
            <p>If I'm currently broadcasting on YouTube, you may watch it here.</p>
            <div className="video">
              <iframe
                src="https://www.youtube.com/embed/live_stream?channel=UCvnodOtqcYJrkU_enZ9nHlA"
                width="940"
                height="480"
              />
            </div>
          </div>
        </section>
      </AppLayout>
    );
  }
}

export default Home;

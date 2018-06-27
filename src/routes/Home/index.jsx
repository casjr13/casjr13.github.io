import React from 'react';
import {map} from 'lodash';
import AppLayout from '../../containers/AppLayout';

import './Home.scss';

const images = [
  "20141122-Wedding01.jpg",
  "20141122-Wedding02.jpg",
  "20161127-Jason01.jpg",
  "20170713-Hummingbirds.jpg",
  "20180526-Thunderbirds01.jpg",
  "20180526-Thunderbirds02.jpg",
  "20180526-Thunderbirds03.jpg",
  "20180527-Mustang02.jpg",
  "20180618-Edgewood01.jpg",
  "20180622-Mustang01.jpg",
  "20180622-SandiaPark01.jpg",
  "20180622-SandiaPark02.jpg",
];

class Home extends React.Component {
  render() {
    const gallery = map(
      images.sort((a, b) => (0.5 - Math.random())),
      (name, i) => (
        <a
          className="img"
          href={`/images/gallery/${name}`}
          key={`image${i}`}
          style={{backgroundImage: `url(/images/thumbnails/${name})`}}
          target="_blank"
        />
      )
    );
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
        <section className="gallery">
          {gallery}
        </section>
      </AppLayout>
    );
  }
}

export default Home;
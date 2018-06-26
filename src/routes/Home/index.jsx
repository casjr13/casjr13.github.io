import React from 'react';
import {map} from 'lodash';
import AppLayout from '../../containers/AppLayout';

import './Home.scss';

const images = [
  "/images/gallery/20180622-SandiaPark02.jpg",
  "/images/gallery/20180622-SandiaPark01.jpg",
  "/images/gallery/20180622-Mustang01.jpg",
  "/images/gallery/20180618-Mustang01.png",
  "/images/gallery/20180618-Edgewood01.png",
  "/images/gallery/20180526-Thunderbirds04.jpg",
  "/images/gallery/20180526-Thunderbirds03.jpg",
  "/images/gallery/20180526-Thunderbirds02.jpg",
  "/images/gallery/20180526-Thunderbirds01.jpg",
];

class Home extends React.Component {
  render() {
    const gallery = map(images, (imgPath, i) => {
      const img = <i style={{backgroundImage: `url(${imgPath})`}}/>;
      return <a
        className="img"
        href={imgPath}
        key={`image${i}`}
        target="_blank"
      >{img}</a>;
    });
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
import React from 'react';
import {map} from 'lodash';
import AppLayout from '../../containers/AppLayout';

import './Home.scss';

const images = [
  "/images/thumbnails/dark1.jpg",
  "/images/thumbnails/light1.jpg",
  "/images/thumbnails/dark2.jpg",
  "/images/thumbnails/light6.jpg",
  "/images/thumbnails/light2.jpg",
  "/images/thumbnails/dark5.jpg",
  "/images/thumbnails/light5.jpg",
  "/images/thumbnails/dark4.jpg",
  "/images/thumbnails/dark6.jpg",
  "/images/thumbnails/light4.jpg",
  "/images/thumbnails/dark3.jpg",
  "/images/thumbnails/light3.jpg",
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
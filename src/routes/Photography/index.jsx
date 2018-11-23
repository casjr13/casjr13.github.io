import React from 'react';
import AppLayout from '../../containers/AppLayout';
import GoogleDrive from '../../components/GoogleDrive/index';

import './Photography.scss';

class Photography extends React.Component {
  render = () => (
    <AppLayout className="photography">
      <div className="banner" />
      <section>
          <div className="container">
            <h1>Renee</h1>
            <p>As a part of the class of 2019, Renee elected to take her senior portraits at the White Sands National Monument in southern New Mexico.</p>
            <GoogleDrive folderId="1lM7J0LDUwhfdjFAiG81UNflobJ23t27T"/>
          </div>
      </section>
      <section>
          <div className="container">
            <h1>Greg &amp; Savannah</h1>
            <p>At the foot of the Sandia Tramway in Albuquerque, New Mexico, Greg and Savannah wanted to capture some loving moments before they head off to prom.</p>
            <GoogleDrive folderId="1kH_1RZpbicy9WeMuIAp_8V7FW4Px9rrI"/>
          </div>
      </section>
    </AppLayout>
  );
}

export default Photography;
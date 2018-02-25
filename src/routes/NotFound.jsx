import React from 'react';
import AppLayout from '../containers/AppLayout';

class NotFound extends React.Component {
  render() {
    return (
      <AppLayout>
        <section>
          <h1>Page not found</h1>
          <p>Uh oh! We couldn&apos;t find what you were looking for!</p>
        </section>
      </AppLayout>
    );
  }
}

export default NotFound;
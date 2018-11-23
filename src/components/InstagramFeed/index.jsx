import "@babel/polyfill";
import React from 'react';
import Axios from 'axios';
import _ from 'lodash';

import './InstagramFeed.scss';

/**
 * Instagram Feed
 * https://codelike.pro/fetch-instagram-posts-from-profile-without-__a-parameter/
 */
class InstagramFeed extends React.Component {
  state = {
    error: null,
    feed: [],
  }

  async componentDidMount() {
    const { username } = this.props;

    // It will contain our photos' links
    const feed = []

    try {
      const userInfoSource = await Axios.get(`https://www.instagram.com/${username}/`)

      // userInfoSource.data contains the HTML from Axios
      const jsonObject = userInfoSource.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)
      const userInfo = JSON.parse(jsonObject)
      const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges
      const feed = _.map(mediaArray, "node");
      this.setState({feed});
    } catch (e) {
      console.error('Unable to retrieve photos. Reason: ' + e.toString())
    }

  }

  render() {
    const { feed, error } = this.state;

    if (error) {
      return (
        <span>Oops! There was an error loading the instagram feed.</span>
      );
    }

    console.log(feed);

    const images = _.map(feed, ({id, shortcode, thumbnail_src}) => {
      return (
        <a className="instagram-photo" key={id} href={`https://www.instagram.com/p/${shortcode}`} target="_blank">
          <img src={thumbnail_src} />
        </a>
      );
    });

    return (
      <div className="instagram-feed">
        {images}
      </div>
    );
  }
}

export default InstagramFeed;
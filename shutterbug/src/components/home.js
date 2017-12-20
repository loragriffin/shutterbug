import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

const PHOTO_SET = [
  {
    src: 'https://placebear.com/200/400',
    width: 200,
    height: 400
  },
  {
    src: 'https://placebear.com/300/300',
    width: 300,
    height: 300
  },
  {
    src: 'https://placebear.com/450/600',
    width: 450,
    height: 600
  },
  {
    src: 'https://placebear.com/450/800',
    width: 450,
    height: 800
  },
  {
    src: 'https://placebear.com/600/300',
    width: 600,
    height: 300
  },

];

class Home extends Component {
  render() {
    return (
      <Gallery photos={PHOTO_SET} />
    );
  }
}

export default Home;

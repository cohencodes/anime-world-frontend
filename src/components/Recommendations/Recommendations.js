import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

class RecommendationsCarousel extends Component {
  render() {
    const { shows } = this.props;
    return (
      <Carousel>
        {shows.map(show => {
          return (
            <>
              <div key={show.mal_id}>
                <img src={show.image_url} alt={show.image_url} />
                <p className="legend">Legend 1</p>
              </div>
            </>
          );
        })}
      </Carousel>
    );
  }
}

export default RecommendationsCarousel;

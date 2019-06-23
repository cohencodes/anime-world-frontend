import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

class Recommendations extends Component {
  // state = {
  //   isLoading: true
  // };
  render() {
    const { shows } = this.props;
    // const { isLoading } = this.state;
    return (
      <Carousel>
        {shows.map((show, index) => {
          return (
            <>
              <div key={index}>
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

export default Recommendations;

import React, { Component } from 'react';

class DetailPage extends Component {
  render() {
    const { show } = this.props;
    console.log('show from detail component', show);
    return (
      <>
        <h1>AnimeWorld</h1>
        <h2>
          [<em>placeholder for show or character image</em>]
        </h2>
        <section>
          <header>
            <h3>About This Show</h3>
          </header>
          <p>
            This will be information about the show. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Incidunt totam ex, ad recusandae
            tempore nulla itaque qui, ab officiis culpa nihil maiores
            accusantium quis iste aspernatur ipsa fugit officia ea.
          </p>
        </section>
        <section>
          <header>
            <h3>Trailers & Clips</h3>
          </header>
          <p>
            [<em>placeholder for trailers & clips</em>]
          </p>
          <p>
            [<em>placeholder for trailers & clips</em>]
          </p>
          <p>
            [<em>placeholder for trailers & clips</em>]
          </p>
          <p>
            [<em>placeholder for trailers & clips</em>]
          </p>
        </section>
        <section>
          <header>
            <h3>You may also like</h3>
          </header>
          <p>
            [<em>placeholder for similar show images</em>]
          </p>
          <p>
            [<em>placeholder for similar show images</em>]
          </p>
          <p>
            [<em>placeholder for similar show images</em>]
          </p>
          <p>
            [<em>placeholder for similar show images</em>]
          </p>
        </section>
      </>
    );
  }
}

export default DetailPage;

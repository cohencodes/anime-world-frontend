import React, { Component } from 'react';

class WatchList extends Component {
  render() {
    return (
      <>
        <header role="banner">
          <h1>Watch List</h1>
        </header>
        <section>
          <header>
            <h2>Naruto</h2>
            <p>
              [<em>placeholder for image</em>]
            </p>
          </header>
          <dl>
            <dt>Current Episode</dt>
            <dd>9</dd>
          </dl>
          <button>Edit</button>
          <button>Delete</button>
        </section>
        <section>
          <header>
            <h2>Full Metal Alchemist</h2>
            <p>
              [<em>placeholder for image</em>]
            </p>
          </header>
          <dl>
            <dt>Current Episode</dt>
            <dd>22</dd>
          </dl>
          <button>Edit</button>
          <button>Delete</button>
        </section>
        <section>
          <header>
            <h2>Hunter x Hunter</h2>
            <p>
              [<em>placeholder for image</em>]
            </p>
          </header>
          <dl>
            <dt>Current Episode</dt>
            <dd>88</dd>
          </dl>
          <button>Edit</button>
          <button>Delete</button>
        </section>
      </>
    );
  }
}

export default WatchList;

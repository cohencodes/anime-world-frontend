import React from 'react';

const Section = props => (
  <>
    I get added to each section
    <section>{props.children}</section>
  </>
);

export default Section;

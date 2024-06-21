import React from 'react';

class main extends React.Component {
    render() {
        return(
<main>
<div className="intro">
  <div className="containerintro">
    <div className="intro__inner">
      <h1 className="intro__title">Let's travel to the edge of space</h1>
      <a className="btn" href="#">Discover more</a>
    </div>
  </div>
</div>
<div className="moonbox">
  <img className="moon" src="../img/moon.png" alt="moon"></img>
</div>
<section className="section">
  <div className="containerintro">
    <div className="section__header">
    </div>
  </div>
  <div className="containersection">
    <div className="sectionabout">
      <h1>About our last event</h1>
      <p>Nebulae are made of dust and gases—mostly hydrogen and helium. The dust and gases in a nebula are very spread out, but gravity can slowly begin to pull together clumps of dust and gas. As these clumps get bigger and bigger, their gravity gets stronger and stronger.</p>
    </div>
  </div>
</section>
</main>
        );
    }
}
export default main;
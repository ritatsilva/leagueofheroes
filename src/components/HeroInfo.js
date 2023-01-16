import React from 'react';


function HeroInfo(props) {
  return (
    <div className="superhero-box">
      <img src={props.imagem} alt={props.nome} />
      <p>{props.nome}</p>
    </div>
  );
}

export default HeroInfo;



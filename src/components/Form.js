/* eslint-disable eqeqeq */
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Form (props){
    const {heroes} = props
    const param = useParams();

    const [hero, setHero] = useState({
    id: null,
    name: "",
    image_url: "",
    super_power: "",
  });

  useEffect(() => {
    if (param.id != undefined) {
      const heroj = heroes.find((heroj) => heroj.id == param.id);
      setHero(heroj);
    }
  }, [param.id, heroes]);

  const Change = (e) => {
    const { name, value } = e.target;
    setHero({ ...hero, [name]: value });
  };
   const Click = (e) => {
    if (param.id != undefined) {
      props.updateHero(e, hero);
    } else {
      props.createHero(e, hero);
    }
  };

  return(
    <>
    <form>
        <div className="text">
          <h1> {param.id != undefined ? "Editar Herói" : "Novo Herói"}</h1>
        </div>
        <br></br>
        <br></br>
        <label>Nome Hero:</label>
        <input type="text" id="name" name="name" value={hero.name} onChange={Change}/>
        <br></br>
        <br></br>
        <label>Imagem URL hero:</label>
        <input type="text" id="image_url" name="image_url" value={hero.image_url} onChange={Change}/>
        <br></br>
        <br></br>
        <label>Super Power:</label>
        <input type="text" id="super_power" name="super_power" value={hero.super_power} onChange={Change}/>
        <br></br>
        <br></br>
        <button onClick={Click}> {param.id != undefined ? "Guardar" : "Criar novo"}</button>
    </form>
    </>
  );
}

export default Form;
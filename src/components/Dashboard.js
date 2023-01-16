/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = (props) => {
  const { heroes,heroesfav, favoriteHero, deleteHero } = props;
  const navigate = useNavigate();

  return (
    <div>
      <br/>
        <button role="button" onClick={() => navigate("add")}>
          Adicionar Herói
        </button>
      <h1>Dashboard de Super-Heróis</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Superpoder</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {heroes.map((hero) => (
            <tr key={hero.id}>
              <td>{hero.id}</td>
              <td>
                <img src={hero.image} alt="Erro ao apresentar a imagem" />
              </td>
              <td>{hero.name}</td>
              <td>{hero.power || "N/D"}</td>
              <td>
                <button onClick={() => deleteHero(hero.id)}>Delete</button>
                <button onClick={() => favoriteHero(hero.id)}>
                  {heroesfav.includes(hero.id)
                    ? "Remover Favorito"
                    : "Adicionar Favorito"}
                </button>
                <button onClick={() => navigate("/dashboard/edit/" + hero.id)}>
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

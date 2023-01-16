/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import React, { useState,useEffect } from 'react';
import HeroInfo from './HeroInfo';
import Loader from './Loader';
import { Routes, Route,  useNavigate} from 'react-router-dom';
import Dashboard from './Dashboard';
import  Form  from './Form';
import  { GetHeroes, GetFavorites, UpdateHero, UpdateFavorites } from '../shared/api'

const Content= () => {
    const [listOfHeroes, setListOfHeroes] = useState();
    const [favoriteHeroes, setFavoriteHeroes] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        GetHeroes().then(res => {
            setListOfHeroes(res)
        })
        GetFavorites().then(res => {
            setFavoriteHeroes(res)
        })
    }, []);
        
      useEffect(() => {
        setTimeout(() => {setLoading(false);}, 3000);
      }, []);

      useEffect(() => {
        if (loading != true){
            UpdateHero(listOfHeroes)
        }
    }, [listOfHeroes]);

    useEffect(() => {
        if (loading != true){
            UpdateFavorites(favoriteHeroes)
        }  
    }, [favoriteHeroes]);

     function HeroFav(id) {
        if (favoriteHeroes.includes(id)) {
            setFavoriteHeroes(favoriteHeroes.filter(favorite => favorite !== id));
        } else if (favoriteHeroes.length < 3) {
            setFavoriteHeroes([...favoriteHeroes, id]);
        }
    }
    function DeleteHero(id) {
        setListOfHeroes(listOfHeroes.filter(hero => hero.id !== id));
        if (favoriteHeroes.includes(id)) {
            setFavoriteHeroes(favoriteHeroes.filter(favorite => favorite !== id));
        }
    }
    const NovoHero = (e, newHero) => {
    e.preventDefault();
    setListOfHeroes(currentData => {
      return [
        ...currentData,
        {
            id: currentData[currentData.length - 1].id + 1,
            name: newHero.name,
            super_power: newHero.super_power,
            image: newHero.image
        }
      ]
    });
    navigate("/dashboard")
    
  }

  const EditarHero = (e, updatedHero) => {
    e.preventDefault();
    setListOfHeroes(heroes => {
      return heroes.map((item) =>  {
        if(item.id === updatedHero.id){
          return{
             
            id: updatedHero.id,
            name: updatedHero.name,
            super_power: updatedHero.super_power,
            image: updatedHero.image
            
          }
        }
          return item
      })
    });
    navigate("/dashboard")
    
  }

      if(loading == true){
        return(
          <div>
            <Loader/>
          </div>
        )
      }
      else{
      return (
        <>
        <Routes>
          <Route path="/" element={
            <>
            {listOfHeroes.map((item, pos) => {
                      if (favoriteHeroes.includes(item.id)) {
                        return (
                            <HeroInfo key={pos} imagem={item.image} nome={item.name}></HeroInfo>
                        );
                      }
                    })}
            </>
            }/>     
  
        <Route path="/dashboard" element={<Dashboard heroes={listOfHeroes} heroesfav = {favoriteHeroes} favoriteHero = {HeroFav} deleteHero= {DeleteHero} />}/>
        <Route path="/dashboard/add" element={<Form createHero={NovoHero} />}/>
        <Route path="/dashboard/edit/:id" element={<Form heroes = {listOfHeroes} updateHero={EditarHero} />}/>
        </Routes>
    </>
      )};
}

export default Content;

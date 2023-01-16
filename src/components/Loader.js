import React from 'react';
import loadingGif from '../imagens/loading.gif';

const Loader = () => {  
    return (
      <div>
          <div className="loader">
            <img src={loadingGif} alt="Loading..." />
            <h3>Loading...</h3>
          </div>
      </div>
    );
  }
  
export default Loader;
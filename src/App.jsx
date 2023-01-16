import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  const [dados] = useState({
    myname: "Rita Silva",
    project_name: "League of Heroes",
    });
  return (
  <div className='App'>
    <BrowserRouter>
      <Header nome={dados.my_name} app={dados.project_name} />
      <Content/>
      <Footer nome={dados.my_name} app={dados.project_name}/>
    </BrowserRouter>
  </div>
  );
}

export default App;



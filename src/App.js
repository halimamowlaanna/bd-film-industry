import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const revenue =5000;
  
  return (
    <div className="App">
      
      <Header revenue={revenue}/>
      <Main></Main>
      <Footer></Footer>
      
    </div>
    
  );
}

export default App;

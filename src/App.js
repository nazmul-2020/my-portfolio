import About from './About';
// import './App.css';
import Banner from './Pages/Home/Banner';
import Blog from './Pages/Home/Blog';
import Header from './Pages/Home/Header';
import Project from './Pages/Home/Project';
import Skill from './Pages/Home/Skills/Skills';

function App() {
  return (
    <div className="App">
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Blog></Blog>
            <Project></Project>
    </div>
  );
}

export default App;

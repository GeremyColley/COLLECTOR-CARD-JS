
import './App.css'
import movies from './assets/movies.json'
import Cards from './components/Cards'


const App = () => {
  //const [movies,setMovies] = useState(movies);

  //let doc = movies.find( (elem)=> (elem.at(2)));
  //console.log(doc);
  return (
    <div className='App'>
      <h1>hello</h1>

      <Cards />
    </div>
  )
};

export default App;

import './App.css';
import React,{useState ,useEffect} from 'react';
import Movie from './component/Movie';

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


function App() {

   const [movie, setMovie] = useState([]);
   const[Search , setSearch]=useState("");

   useEffect(()=>{
    fetch(APIURL)
    .then((res)=>res.json()).then((data)=>{
       setMovie(data.results);
    });
   },[]);

   const handleonSubmit =(e)=>{
     e.preventDefault();
    if(Search){
      fetch(SEARCHAPI+Search)
      .then((res)=>res.json()).then((data)=>{
         setMovie(data.results);
      });
     
      
     setSearch("");
    }
   };

   const handleonChange=(e)=>{
     setSearch(e.target.value)
   }

  return (
    <>
     <header>
       <h1>MovieDB</h1>
       <form onSubmit={handleonSubmit}>
        <input className="search" placeholder="search" 
        onChange={handleonChange}
        value={Search}
        type="text"
        />
        </form> 
      </header>
     <div className="movie-container">
      {
      movie.length >0 && movie.map((movie)=>
      <Movie key={movie.id} {...movie}/>
      )
    }
      
    </div>
    </>
  );
}

export default App;

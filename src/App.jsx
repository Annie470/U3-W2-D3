import { Search } from "react-bootstrap-icons";
import "./App.css";
import Account from "./components/Account";
import FilmRow from "./components/FilmRow";
import Hero from "./components/Hero";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Profile from "./components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./components/TvShows";
import ErrLoadPage from "./components/ErrLoadPage";
import MovieDetails from "./components/MovieDetails";
import SearchFilm from "./components/SearchFilm";
import Searched from "./components/Searched";

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <Hero />
      <SearchFilm />
      <Routes>
        <Route path="/Searched/:query" element={<Searched />} />
        <Route
          path="/"
          element={
            <>
              <FilmRow query="Matrix" h4="I titoli del momento" num="5" />
              <FilmRow query="Blade" h4="Perchè ti è piaciuto Matrix" num="6" />
              <FilmRow query="Cube" h4="Continua a guardare" num="2" />
            </>
          }/>
          {/* <Account user='Cane Grande' email='CatZilla470@proton.me' plan='Premium'/>
    <Profile user='Cane Grande'/> */}

        <Route path="/TvShows" element={<TvShows/>}/>
        <Route path="/ErrLoadPage" element={<ErrLoadPage/>}/>
        <Route path="/MovieDetails/:movieId" element={<MovieDetails/>}/>
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;

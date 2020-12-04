import React, { useState, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Card from "./card/Card.js";
import { movieData as _usersData } from "./MovieList";
import { searchWithValues } from "./Utils";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Header from "./Header/Header";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import FormDialog from "./MovieDailog/MovieDailog";
const App = () => {

  // Setting state
  const [selectedData, setSelectedData] = useState({});
  const [Movie, setMovie] = useState(_usersData.slice(0, 500));
  const [filter, setFilter] = useState([
    {
      value: "",
      field: "title",
    },
  ]);
  const [sort, setSort] = useState("asc");
  const [isSortYear,isSortupdated]  = useState(false)

  const [searchText, setSearchText] = useState("");
  const movieByfilters = ["title", "actors", "year"];

  const [open, setOpen] = React.useState(false);

   // CRUD operations
   const addMovie = (movie) => {
   	movie.id = Movie.length + 1;
   	setMovie([...Movie, movie]);
   	setOpen(false);
     };
   
     const deleteUser = (id) => {
   	setMovie(Movie.filter((a) => a.id !== id));
     };
   
     const updateUser = (editMovie) => {
   	setMovie(Movie.map(movieList => (movieList.id == editMovie.id ? editMovie : movieList)))
   	setOpen(false);	
   	}

  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value.target.value);
    if (value.target.value === "") {
      setMovie(_usersData.slice(0, 20));
      return;
    }
    const filterCopy = [...filter];
    filterCopy[0].value = value.target.value;
    setMovie(searchWithValues(_usersData, filter));
  };

  const filteredSearch = (dropDownSearch) => {
    const filterCopy = [...filter];
    filterCopy[0].field = dropDownSearch.target.value;
  };
  
  // SORTING
  const sorted = Movie.sort((a, b) => {
	const isRevesed = sort === "asc" ? 1 : -1;
	if(isSortYear){
		return isRevesed * a.year.localeCompare(b.year);
	}else{
		return isRevesed * a.title.localeCompare(b.title);
	}
    
  });

  let sortType = (data) => {
	setSort(data);
	isSortupdated(false);
  };

  let sortByYear= (data) =>{
	  setSort(data);
	  isSortupdated(true);

  }
  //DAIALOG
  const handleClickOpen = (a) => {
      setSelectedData({
        id: null,
        title: "",
        year: "",
        genres: [""],
        duration: "",
        storyline: "",
      });

    setOpen(true);
  };

  const editModel = (a)=>{
	let movieDetails= Movie.filter((data) => data.id == a)
	  setSelectedData(movieDetails[0]);
	  setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };


  
  const inputChange = (event) => {
  
  };

  return (
    <div>
      <Header
        onChange={handleChange}
        value={searchText}
        filteredSearch={filteredSearch}
        movieSubsearch={movieByfilters}
		sortByAz={sortType}
		sortByYear={sortByYear}
		isSortYear={isSortYear}
		sort={sort}
      />
      <FormDialog
        openDailog={open}
        handleClose={handleClose}
        addMovie={addMovie}
        initialFormState={selectedData}
		inputChange={inputChange}
		updateUser={updateUser}
      ></FormDialog>

      <div>
        {sorted.map((a, b) => (
          <Card
            key={b}
            id={a.id}
            movieName={a.title}
            year={a.year}
            genres={a.genres}
            duration={a.duration}
            contentRating={a.contentRating}
            description={a.storyline}
            readmorelink={a.year}
            movieImage={a.posterurl}
            imdbRating={a.imdbRating}
            deleteUser={deleteUser}
			handleClickOpen={editModel}
          />
        ))}
      </div>

      <div className="fabPosition">
        <Fab
          color="primary"
          onClick={handleClickOpen}
          initialFormState={selectedData}
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
};

export default App;

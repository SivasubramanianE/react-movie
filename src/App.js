import React, { useState, Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
import Card from './card/Card.js'
import {movieData as _usersData} from './MovieList'
import {searchWithValues} from './Utils'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Header from './Header/Header';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FormDialog from './MovieDailog/MovieDailog'
const App = () => {

	// Setting state
	// const [ Movie, setMovie ] = useState(_usersData)
	const [ Movie, setMovie ] = useState(_usersData.slice(0,20))	
	const [filter , setFilter ] = useState(
	[{
		"value" : "",
		"field" :"title"
	}],)	
	const [sort , setSort ] = useState('asc')

   const [searchText, setSearchText] = useState("");
   const movieByfilters = ["title","actors","year"];

   const [open, setOpen] = React.useState(false);
   
  // handle change event of search input
  const handleChange = value => {
	
	setSearchText(value.target.value)
	  if(value.target.value === ""){
		setMovie(_usersData.slice(0,20))
		  return 
	  }
	const filterCopy = [...filter]
	filterCopy[0].value = value.target.value ;
	setMovie(searchWithValues(_usersData, filter))
  };

  const filteredSearch = dropDownSearch  => {
	const filterCopy = [...filter]
	filterCopy[0].field = dropDownSearch.target.value ;
  }
  // SORTING
  const sorted = Movie.sort((a,b)=>{
	  const isRevesed = (sort ==='asc') ? 1 :-1
	  return isRevesed * a.title.localeCompare(b.title)
  })

  let sortType = sortByAZ =>{
	setSort(sortByAZ)
	}
  
	//DAIALOG
	const handleClickOpen = () => {
		setOpen(true);
	  };

	const handleClose = () => {
		setOpen(false);
	};

	// CRUD operations
	const addMovie = (movie) => {
		console.log("Movie",movie);
		movie.id = Movie.length + 1
		setMovie([ ...Movie, movie ])
	}

	const deleteUser = id => {
		console.log(id)
		setMovie(Movie.filter(a => a.id !== id))
	}

	return (
		<div className="container">
			
			<Header onChange={handleChange} value={searchText} filteredSearch={filteredSearch} movieSubsearch={movieByfilters} sortAZ={sortType}/>
			<FormDialog openDailog={open} handleClose={handleClose} addMovie={addMovie}></FormDialog>
				{/* <div className="flex-large">
					{editing ? (
					<Fragment>
						<EditUserForm editing={editing} setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}/>
					</Fragment>
					) : (
					<Fragment>
						<h4>Add a Review</h4>
						<AddUserForm addUser={addUser} />
					</Fragment>
					)}
				</div> */}
				<div>
					
					{sorted.map((a,b) => <Card 
							key={b}
							id = {a.id}
   							movieName = {a.title}
    						year = {a.year}
							genres = {a.genres}
							duration ={a.duration}
    						contentRating = {a.contentRating}
   							description = {a.storyline}
    						readmorelink = {a.year}
    						movieImage = {a.posterurl}
							imdbRating = {a.imdbRating}
							deleteUser={deleteUser}
						/>	
					)}
					
				
					{/* <UserTable Movie={Movie} /> */}
					{/* <UserTable Movie={filterActive?filteredData:Movie} data={data} editRow={editRow} searchText={searchText}deleteUser={deleteUser} /> */}
				</div>
				<div className="fabPosition">
				<Fab color="primary" onClick={handleClickOpen}
				aria-label="add">
       			 <AddIcon />
      			</Fab>
				</div>
				
			</div>
		
  )
  

}

export default App
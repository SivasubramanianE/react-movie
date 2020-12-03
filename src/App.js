import React, { useState, Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
import Card from './card/Card.js'
import {movieData as _usersData} from './MovieList'
import {searchWithValues} from './Utils'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const App = () => {

	// Setting state
	const [ users, setUsers ] = useState(_usersData)
	const [ usersData, setUserData ] = useState(_usersData.slice(0,10))

	const [filter , setFilter ] = useState(
	[{
		"value" : "",
		"field" :"title"
	}],)

   const [searchText, setSearchText] = useState("");
   const movieByfilters = ["title","actors","years"]

  // handle change event of search input
  const handleChange = value => {
	
	setSearchText(value.target.value)
	  if(value.target.value === ""){
		console.log("ifff",_usersData)
		setUserData(_usersData.slice(0,10))
		  return 
	  }
	const filterCopy = [...filter]
	filterCopy[0].value = value.target.value ;
	setUserData(searchWithValues(_usersData, filter))
  };

  const filteredSearch = value  => {
	const filterCopy = [...filter]
	filterCopy[0].field = value ;
  }

	return (
		<div className="container">
			<h3>Moview Review Channel</h3>
			
				{/* <div className="flex-large">
					{editing ? (
					<Fragment>
						<h4>Edit user</h4>
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
					
					<InputLabel id="filter-by">Filter By</InputLabel>
       				<Select labelId="filter-by" id="filter-by">
					{
					movieByfilters.map(f=>{
						return <MenuItem value={f} onClick={e => filteredSearch(f)}>{f}</MenuItem>
					})}   
       				</Select>
					<center>
					<TextField 
					id="standard-search" 
					label="Search field" 
					type="search" 
					value={searchText} 
					onChange={handleChange}
					 />
					</center>
					{usersData.map((a,b) => <Card 
							key={b}
   							movieName = {a.title}
    						year = {a.year}
    						genre = {a.genre}
    						time = {a.duration}
   							description = {a.storyline}
    						readmorelink = {a.year}
    						movieImage = {a.posterurl}
    						playbuttonLink = {a.title}
						/>	
					)}
					{/* <UserTable users={users} /> */}
					{/* <UserTable users={filterActive?filteredData:users} data={data} editRow={editRow} searchText={searchText}deleteUser={deleteUser} /> */}
				</div>
			</div>
		// </div>
  )
  

}

export default App
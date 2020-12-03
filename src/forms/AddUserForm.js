import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: '', year: '',color: '',pantone_value: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const classes = useStyles();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!user.name || !user.year || !user.color || !user.pantone_value) return
        props.addUser(user)
        setUser(initialFormState)
      }}>
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange}/>
      <label>Year</label>
      <input type="text" name="year" value={user.year} onChange={handleInputChange}/>
      <label>Color</label>
      <input type="text" name="color" value={user.color} onChange={handleInputChange}/>
      <label>Pantone value</label>
      <input type="text" name="pantone_value" value={user.pantone_value} onChange={handleInputChange}/>
      <div className={classes.root}>
        <Button variant="contained" color="secondary" disableElevation>Add new user</Button>
      </div>
    </form>
  )
}

export default AddUserForm
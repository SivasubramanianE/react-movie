import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


export default function FormDialog(props) {
  
const initialFormState = { id: null, title: '',year:'',genres:'', duration: '',storyline: '' }
  const [Movie, setMovie] = useState(initialFormState)
  const inputChange = (event) => {
      console.log(event)
    const { title, value } = event.target
    setMovie({ ...Movie, [title]: value })}

                            
  return (
    <div>
      <Dialog open={props.openDailog} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Movie</DialogTitle>
         <DialogContent>
         <form
        onSubmit={() => {
        if (!Movie.title || !Movie.year || !Movie.duration || !Movie.storyline) return
        props.addMovie(Movie)
        setMovie(initialFormState)
        }}>
    <TextField  type="text" name="title" margin="dense" autoFocus  value={Movie.title} label="Title" onChange={inputChange} fullWidth />
     
     <TextField type="text" name="year" margin="dense" value={Movie.year} label="Year" onChange={inputChange} fullWidth />
     
     <TextField type="text"  name="genres" margin="dense" value={Movie.genres} label="Genres"  onChange={inputChange} fullWidth  />
     
     <TextField  type="text" name="duration" margin="dense" value={Movie.duration} label="Duration"  onChange={inputChange}  fullWidth />
    
     <TextField type="text"  name="storyline" margin="dense" value={Movie.storyline} label="Storyline"  onChange={inputChange}  fullWidth />
     
     <center>
     <Button onClick={props.handleClose} color="secondary">
            Submit
          </Button>

     <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          </center>
     </form>
        </DialogContent>
        <DialogActions>
          
         
        </DialogActions>
      </Dialog>
    </div>
  );
}
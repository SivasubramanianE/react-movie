import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class FormDialog extends Component {
    constructor(props) {
      
        super(props);
        this.state = {
          
            Movie: this.props.initialFormState,
        };
        console.log(this.props)
    }
    
    componentWillReceiveProps(props) {
      this.setState({ Movie: props.initialFormState });
      console.log(props)
  }
    inputChange = (event) => {
      console.log(event)
        const { name, value } = event.target;
        this.setState({ Movie: { ...this.state.Movie, [name]: value } });
    };
    handleSubmit = (event) => {
        event.preventDefault();

        if (!this.state.Movie.title || !this.state.Movie.year || !this.state.Movie.duration || !this.state.Movie.storyline) return;

        let self = this;
        this.setState({ ...this.state.Movie, genres: [this.state.Movie.genres] }, () => {
          if(this.state.Movie.id){
            console.log(self.state)
            self.props.updateUser(self.state.Movie);
          }else{
            self.props.addMovie(self.state.Movie);
           }
            
        });
    };

    render() {
        return (
            <div>
                <Dialog open={this.props.openDailog} onClose={this.props.handleClose} aria-labelledby='form-dialog-title'>
                    <DialogTitle id='form-dialog-title'>Add New Movie</DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.handleSubmit}>
                            <TextField type='text' name='title' margin='dense' autoFocus value={this.state.Movie.title} label='Title' onChange={this.inputChange} fullWidth />

                            <TextField type='text' name='year' margin='dense' value={this.state.Movie.year} label='Year' onChange={this.inputChange} fullWidth />

                            <TextField type='text' name='genres' margin='dense' value={this.state.Movie.genres} label='Genres' onChange={this.inputChange} fullWidth />

                            <TextField type='text' name='duration' margin='dense' value={this.state.Movie.duration} label='Duration' onChange={this.inputChange} fullWidth />

                            <TextField type='text' name='storyline' margin='dense' value={this.state.Movie.storyline} label='Storyline' onChange={this.inputChange} fullWidth />

                            <center>
                                <Button type='submit' color='secondary'>
                                    Submit
                                </Button>

                                <Button onClick={this.props.handleClose} color='primary'>
                                    Cancel
                                </Button>
                            </center>
                        </form>
                    </DialogContent>
                    <DialogActions></DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default FormDialog;
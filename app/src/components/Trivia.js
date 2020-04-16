import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchTrivia, fetchYear, fetchMath, inputNumber } from '../store/actions/actions';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { CardContent, CardActions } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    title: {
        fontSize: 10,
        fontStyle: 'italic',
      },
      
  },
}));

const Trivia = props => {
    const classes = useStyles();


    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const button1  = e => {
        e.preventDefault();
        props.inputNumber(input, 'trivia');
        setInput('');

    }
    const button2  = e => {
        e.preventDefault();
        props.inputNumber(input, 'year')
        setInput('');

    }

    const button3  = e => {
        e.preventDefault();
        props.inputNumber(input, 'math')
        setInput('');

    }

   
   

    useEffect(() => {
        props.fetchTrivia();
        props.fetchYear();
        props.fetchMath();
    }, []);

    return (
        <div class="all">
            <h1>Fun Number Facts!</h1>
            <form className={classes.root} noValidate autoComplete="off">
  
  <TextField id="outlined-basic" label="Enter your own number" variant="outlined"
  type = "text"
  name = "input"
  value = {input}
  onChange = {handleChange}
   />
</form>
            
                <ButtonGroup color="secondary" aria-label="contained secondary button group">
                    {input && !isNaN(input) ? <Button  id="button" color="primary" onClick={button1}>RANDOM</Button> : <Button  disabled id="button" color="primary" >RANDOM</Button>  }

                    {input && !isNaN(input) ? <Button  id="button" color="primary" onClick={button2}>YEAR</Button> : <Button  disabled id="button" color="primary">YEAR</Button>  }

                    {input && !isNaN(input) ? <Button  id="button" color="primary" onClick={button3}>MATH</Button> : <Button  disabled id="button" color="primary" >MATH</Button>  }
                    
                    
                </ButtonGroup>

           <div className="cards">
                <Card body id="cont" className="text-center">
                    <CardContent id="box" t>
                        {props.isFetching && (
                            <CircularProgress />)}
    
                        {props.trivia &&
                        <div>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Random Number Fact
                          </Typography>
                          <Typography variant="h5" component="h2">
                          {props.trivia}
        </Typography>
                              
                        </div>}
    
                    </CardContent>
                    <CardActions><Button variant="contained" color="primary"  onClick={props.fetchTrivia}>refresh</Button></CardActions>
                    
                </Card>
    
    
    
                <Card body id="cont" className="text-center">
                    <CardContent id="box" t>
                        {props.yearFetching && (
                            <CircularProgress />)}
                        {props.trivia &&
                        <div>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Year Number Fact
                          </Typography>
                          <Typography variant="h5" component="h2">
                          {props.year}
        </Typography>
                              
                        </div>}
    
                    </CardContent>
                   <CardActions> <Button variant="contained" color="primary"  onClick={props.fetchYear}>refresh</Button></CardActions>
                    
                    
                </Card>
    
                <Card body id="cont" className="text-center">
                    <div>
                        <CardContent id="box" t>
                            {props.mathFetching && (
                                <CircularProgress />)}
                            
                            {props.math &&
                            <div>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Math Number Fact
                              </Typography>
                              <Typography variant="h5" component="h2">
                              {props.math}
            </Typography>
                                  
                            </div>}
        
                        </CardContent>
                        
                    </div>
    <CardActions>
        
                         <Button variant="contained" color="primary" onClick={props.fetchMath}>refresh</Button>
        
    </CardActions>
                     
                    
                    
                    
                </Card>
           </div>
        </div>
    );
};




const mapStateToProps = state => {
    console.log(state);
    return {
        trivia: state.trivia.trivia,
        isFetching: state.trivia.isFetching,
        error: state.trivia.error,
        year: state.yearTrivia.trivia,
        yearFetching: state.yearTrivia.isFetching,
        yearError: state.yearTrivia.error,
        math: state.mathTrivia.trivia,
        mathFetching: state.mathTrivia.isFetching,
        mathError: state.mathTrivia.error,

    }
}

export default connect(mapStateToProps, { fetchTrivia, fetchYear, fetchMath, inputNumber })(Trivia);
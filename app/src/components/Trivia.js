import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTrivia } from '../store/actions/actions';
import { Spinner, Button, CardText, Card } from 'reactstrap';






const Trivia = props => {


    useEffect(() => {
        props.fetchTrivia();
    }, []);

    return (
        <div class="all">
            <h1>Numbers Trivia</h1>
            {props.isFetching && (
                   <Spinner color="info" />
            )}
             
           <Card body id="cont" className = "text-center">
                <CardText id="box"t>
                   
                        
                            {props.trivia && 
                            < h3 id = "text">{props.trivia}</h3>}
                
                            {props.error && <p>{props.error}</p>}
                      
                   
                </CardText>
               
    
    
                <Button id="button"color="info" onClick={props.fetchTrivia}>Click for new fact!</Button>
           </Card>
           



        </div>
    );
};

const mapStateToProps = state => {
    console.log(state);
    return {
        trivia: state.trivia.trivia,
        isFetching: state.trivia.isFetching,
        error: state.trivia.error
    }
}

export default connect(mapStateToProps, { fetchTrivia })(Trivia);
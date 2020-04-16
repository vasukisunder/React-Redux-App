import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTrivia } from '../store/actions/actions';
import Loader from 'react-loader-spinner';


const Trivia = props => {
    useEffect(() => {
        props.fetchTrivia();
    }, []);

    return (
        <div>
            <h1>Numbers Trivia</h1>

            {props.isFetching && (
            <Loader type="Puff" color="#00BFFF" height={100} width={100} /> )}

            {props.trivia && <h3>{props.trivia}</h3>}

            {props.error && <p>{props.error}</p>}

            <button onClick={props.fetchTrivia}>Click for new fact!</button>
      


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

export default connect(mapStateToProps, {fetchTrivia})(Trivia);
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ExercisesList extends Component {
  constructor(props){
    super(props)

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state={
      exercises:[]
    };
  }

  componentWillMount(){
    axios.get('http://localhost:5000/exercises/')
    .then(response => {
      this.setState({
        exercises: response.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  deleteExercise(id){
    console.log(id)
  }

  render() {
    return (
      <div>
        <p>You are on the Exercises List component!</p>
      </div>
    )
  }
}
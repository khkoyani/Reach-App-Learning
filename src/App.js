import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    person: [
      {id: 1, name: 'Karan', age: 27},
      {id: 2, name: 'George', age: 28},
      {id: 3, name: 'Alex', age: 26}
    ],
    username: 'khkoyani',
    showlist: false
  }

  deleteNameHandler = (index) => {
    let persons = [...this.state.person]
    persons.splice(index, 1)
    this.setState({person: persons})
  }

  inputChangeHandler = (event, id) => {
    let persons = [...this.state.person]
    let person = persons.find(p => p.id===id)
    person.name = event.target.value
    
    let personIndex = persons.find(p => p.id===id)
    persons[personIndex] = person

    this.setState({
      person: persons
    })
  }

  personToggleHandler = (event) => {
    this.setState({
      showlist: !this.state.showlist
    })
  }

  resetListHandler = () => {
    this.setState({
      person: [
        {id: 1, name: 'Karan', age: 27},
        {id: 2, name: 'George', age: 28},
        {id: 3, name: 'Alex', age: 26}
      ]
    })
  }


  render() {
    const styleToggleBtn = {
      display: 'inline-block',
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
      backgroundColor: '#4CAF50',
      padding: '16px 48px',
      color: 'white',
      margin: '20px'
    }

    const styleResetBtn = {
      display: 'inline-block',
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
      backgroundColor: '#008CBA',
      padding: '16px 24px',
      color: 'white',
      margin: '20px'
    }

    let personlist = null
    if (this.state.showlist) {
      personlist = ( 
        <div> 
          <button style={styleResetBtn} onClick={this.resetListHandler}>Reset List</button>
          {this.state.person.map((person, index) => {return ( 
              <Person key={person.id} name={person.name} age={person.age}
                delete={() => this.deleteNameHandler(index)}
                change={(event) => this.inputChangeHandler(event, person.id)}></Person>)
            })
          }
        </div>)
    }

    return (
      <div className="App">
        <h1>Testing React App</h1>
        <button style={styleToggleBtn} onClick={this.personToggleHandler}>Toggle List</button>
        {personlist}
      </div>
    );
  }
}

export default App;

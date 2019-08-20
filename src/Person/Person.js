import React from 'react';
import './Person.css';

const Person = (props) => {
    const alignleft = {textAlign: 'left'}
    const deleteline = {
        display: 'inline-block',
        width: 'auto',
        // margin: 'auto',
        margin: '0px, auto',
        backgroundColor: '#f44336',
        alignleft,
        padding: '20px 40px',
        color: 'white'

    }
    return (
    <div className="Person">
        <p>Input Name: <input type="text" onChange={props.change} placeholder={props.name}/></p>
        <p > My name is {props.name} and I am {props.age} years old</p>
        <p style={alignleft} onClick={props.delete}> Description:   Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus at magni neque? Laboriosam, asperiores quasi. Quod quisquam laudantium, harum, numquam itaque est rem maiores odio exercitationem, blanditiis ea. Distinctio ex accusamus est quidem sapiente accusantium sed? Omnis ex sit eum.</p>
        <p style={deleteline}>Click on the description paragraph to delete</p>  
    </div>)
}

export default Person
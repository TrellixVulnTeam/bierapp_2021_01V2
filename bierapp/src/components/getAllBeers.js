import {Link} from 'react-router-dom';
// import {useParams} from 'react-router'
import React from 'react';

function GetAllBeers (props) {



    // const {id} = useParams();

    // console.log(props.useParams)

    return (  
        <h2>I am the all beers</h2>,
        <Link to='/:id'><button>Details</button></Link>

    );
}
export default GetAllBeers;
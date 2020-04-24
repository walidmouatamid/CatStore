import React from 'react';
import '../App.css'
//RCE
export default function NotFound(props) {
   
        return (
            <div className="notfound">
                <span><b>404</b></span>
                <h4>Ooops!!</h4>
        <p>THAT PAGE {props.location.pathname} DOESNT EXIST OR IS UNAVAILABLE</p>
            </div>
        )
   
}

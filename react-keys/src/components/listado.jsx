import React from 'react'
const numbers = [
    {
        key:1,
        nombre:"andres"
    },
    {
        key:2,
        nombre:"jose"
    },
    {
        key:3,
        nombre:"Maria"
    }
];
const listItems = numbers.map((number, index) =>
  <div style={{listStyle:'none',color:'#000', border:'3 red',display:'flex', background: 'orange', padding:5}}>
    <li key={index}>{number.key}</li> 
    <p key={index}> {number.nombre} </p>
  </div>
);

function Listado() {
    return (
        <div className = 'ListadoComponent'>
            {listItems}
        </div>
    );
}
export default Listado;
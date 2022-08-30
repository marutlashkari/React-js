import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function ConsumeApi(){
  const [data, setData] = useState([]);

  fetch("https://isro.vercel.app/api/spacecrafts")
  .then((res)=>{
    return res.json();
  })
  .then((res)=>{
    setData(res.spacecrafts);
  });

  let fdata = data.map( (d) => {
    return (
    <>
      <h1>{d.name}</h1>
      <h1>{d.id}</h1>
    </>
    )
  } );

  return (<div>{fdata}</div>);

}

root.render(
  <>
  <ConsumeApi />
  </>
);
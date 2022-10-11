import React, { useState, useLayoutEffect } from 'react';
import './profile.css';

const Profile = (props) => {
  const url = 'http://localhost:8009/api/getpartybyid/633151619e34fa7b71029677';

  const [respond, setRespond] = useState('');

  useLayoutEffect(() => {
    const fetchPartyById = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setRespond(data);
    };
    fetchPartyById();
  }, []);
  // event.preventDefault();
  console.log(respond);
  return (
    <div>
      <div className='container1'>
        <div class='flexbox'>Image goes here</div>
        <div class='info'>
          <p>{respond.name}</p>
          <p>{respond.area}</p>
          <p id='box'>Delivery Boy</p>
          <p>Address</p>
          <p>Delivery Boy</p>
          <p>Collection Boy</p>
        </div>
        <div class='price'>
          <p>Discount</p>
          <p>MRP</p>
        </div>
      </div>
      <div class='container1'>
        <div class='flex'>
          <p>Opening Balance</p>
          <p>Current clock</p>
          <p>Deposit Cylinder</p>
          <p>Proof of identity</p>
          <p>Proof No</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

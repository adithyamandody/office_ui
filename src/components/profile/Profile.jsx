import React from 'react';
import './profile.css';

const Profile = () => {
  return (
    <div>
      <div class='container1'>
        <div class='flexbox'>Image goes here</div>
        <div class='info'>
          <p>Name</p>
          <p>Address</p>
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

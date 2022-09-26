import React, { useState } from 'react';
import './addparty.css';
import { useNavigate } from 'react-router-dom';

const AddParty = () => {
  const url = 'http://localhost:8009/api/addparty';

  const [name, setName] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [area, setArea] = useState('');
  const [discount, setDiscount] = useState('');
  const [proof, setProof] = useState('');
  const [idno, setIdno] = useState('');
  const [deliveryBoy, setDeliveryboy] = useState('');
  const [collectionBoy, setCollectionBoy] = useState('');
  const [openingBalance, setOpeningBalance] = useState('');
  const [depocylamo, setDepocylamo] = useState('');
  const [currentStock, setCurrentStock] = useState('');

  const navigate = useNavigate();

  const addPartys = async (event) => {
    event.preventDefault();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phoneNumber,
        address,
        discount,
        proof,
        idno,
        deliveryBoy,
        collectionBoy,
        openingBalance,
        depocylamo,
        currentStock,
      }),
    });
    const data = await response.json();

    if (data.message === 'jelole success') {
      navigate('/addParty');
    } else {
      console.log(data.message);
    }
  };
  return (
    <div>
      <form onSubmit={addPartys}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
        />
        <input
          type='text'
          value={phoneNumber}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='Phone'
        />
        <input
          type='text'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder='address'
        />
        <input
          type='text'
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder='area'
        />
        <input
          type='text'
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          placeholder='discount'
        />
        <input
          type='text'
          value={proof}
          onChange={(e) => setProof(e.target.value)}
          placeholder='proof'
        />
        <input
          type='text'
          value={idno}
          onChange={(e) => setIdno(e.target.value)}
          placeholder='proof id no'
        />
        <input
          type='text'
          value={deliveryBoy}
          onChange={(e) => setDeliveryboy(e.target.value)}
          placeholder='delivery boy'
        />
        <input
          type='text'
          value={collectionBoy}
          onChange={(e) => setCollectionBoy(e.target.value)}
          placeholder='collection Boy'
        />
        <input
          type='text'
          value={openingBalance}
          onChange={(e) => setOpeningBalance(e.target.value)}
          placeholder='opening Balance'
        />
        <input
          type='text'
          value={depocylamo}
          onChange={(e) => setDepocylamo(e.target.value)}
          placeholder='deposit cylinder amount'
        />
        <input
          type='text'
          value={currentStock}
          onChange={(e) => setCurrentStock(e.target.value)}
          placeholder='current Stock'
        />
        <input type='submit' value='submit' />
      </form>
    </div>
  );
};

export default AddParty;

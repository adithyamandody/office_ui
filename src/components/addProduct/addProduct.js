import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddProduct = () => {
  //   const [apiResponse, setApiResponse] = useState('Loading..');
  const url = 'http://localhost:8009/api/addproduct';

  const Navigate = useNavigate();

  const [name, setName] = useState('');
  const [mrp, setMrp] = useState('');

  async function AddMrp(event) {
    event.preventDefault();

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        mrp,
      }),
    });

    const data = await response.json();

    if (data.message === 'jelole success') {
      Navigate('/');
    } else {
      console.log(data.message);
    }
  }

  return (
    <>
      <div>
        <h1>AddDelivery</h1>
        <form onSubmit={AddMrp}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            placeholder='Name'
          />
          <input
            value={mrp}
            onChange={(e) => setMrp(e.target.value)}
            type='text'
            placeholder='mrp'
          />
          <br />

          <input type='submit' value='submit' />
        </form>
      </div>
    </>
  );
};

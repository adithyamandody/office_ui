import {
  // useEffect,
  useState,
} from 'react';
import {
  //   Navigate,
  useNavigate,
  //  useHistory
} from 'react-router-dom';

export const AddArea = () => {
  //   const [apiResponse, setApiResponse] = useState('Loading..');
  const url = 'http://localhost:8009/api/addarea';

  const Navigate = useNavigate();

  const [name, setName] = useState('');

  async function AddArea(event) {
    event.preventDefault();

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
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
        <h1>AddArea</h1>
        <form onSubmit={AddArea}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            placeholder='Name'
          />
          <br />

          <input type='submit' value='submit' />
        </form>
      </div>
    </>
  );
};

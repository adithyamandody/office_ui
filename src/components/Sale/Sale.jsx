import { useLayoutEffect, useState } from 'react';

const Sale = () => {
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');

  const [date, setDate] = useState('');
  const [id, setId] = useState('');

  const [product, setProduct] = useState('');
  const [openBal, setOpeningBalance] = useState('');
  // const [discount, setDiscount] = useState('');
  const [openingStock, setOpeningStock] = useState('');
  const [full, setFull] = useState('');
  const [mt, setMt] = useState('');
  const [mrp, setMrp] = useState('');
  const [totdis, setTotDis] = useState('');
  const [totSaleAm, setSaleAm] = useState('');
  const [cloBal, setCloBal] = useState('');
  const [deliveryBoy, setDeliveryboy] = useState('');
  const [area, setArea] = useState('');
  const [names, setNameData] = useState('');

  useLayoutEffect(() => {
    const fetchArea = async () => {
      const response1 = await fetch('http://localhost:8009/api/getparty');
      const data = await response1.json();
      setNameData(data);
    };
    fetchArea();
  }, []);
  // console.log(names);

  const fetchdetails = async (props) => {
    const url123 = `http://localhost:8009/api/getpartybyid/${props}`;

    console.log(url123);
    const response2 = await fetch(url123);
    const data1 = await response2.json();
    setResponse(data1);
  };

  return (
    <form>
      {/* onSubmit={addPartys}> */}

      <select
        type='text'
        value={name}
        onChange={(e) => {
          setId(e.target.value);
          fetchdetails(id);
        }}
        placeholder='name'
      >
        {names &&
          names.map((name1) => (
            <option value={name1._id} key={name1._id} id={name1.id}>
              {name1.name}
            </option>
          ))}
      </select>
      <input
        type='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder='Date'
      />
      {/* <input
        type='text'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder='date'
      /> */}
      <input
        type='text'
        value={response.product}
        onChange={(e) => setProduct(e.target.value)}
        placeholder='product'
      />

      <input
        type='text'
        value={response.closingBalance}
        onChange={(e) => setOpeningBalance(e.target.value)}
        placeholder='opening balance'
      />
      <input
        type='text'
        value={response.closingStock}
        onChange={(e) => setOpeningStock(e.target.value)}
        placeholder='opening stock'
      />
      <input
        type='text'
        value={full}
        onChange={(e) => setFull(e.target.value)}
        placeholder='full'
      />
      <input
        type='text'
        value={mt}
        onChange={(e) => setMt(e.target.value)}
        placeholder='mt'
      />
      <input
        type='text'
        value={mrp}
        onChange={(e) => setMrp(e.target.value)}
        placeholder='mrp'
      />
      <input
        type='text'
        value={totdis}
        onChange={(e) => setTotDis(e.target.value)}
        placeholder='total discount'
      />
      <input type='text' value={names.discount} placeholder='discount' />
      <input
        type='text'
        value={totSaleAm}
        onChange={(e) => setSaleAm(e.target.value)}
        placeholder='total sale amount'
      />
      <input
        type='text'
        value={cloBal}
        onChange={(e) => setCloBal(e.target.value)}
        placeholder='closing balance'
      />
      <input
        type='text'
        value={response.deliveryBoy}
        onChange={(e) => setDeliveryboy(e.target.value)}
        placeholder='delivery boy'
      />
      <input
        type='text'
        value={response.area}
        onChange={(e) => setArea(e.target.value)}
        placeholder='area'
      />
      <input type='submit' value='submit' />
    </form>
  );
};

export default Sale;

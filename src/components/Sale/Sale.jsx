import { useLayoutEffect, useState } from 'react';

const Sale = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [product, setProduct] = useState('');
  const [openBal, setOpeningBalance] = useState('');
  const [discount, setDiscount] = useState('');
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

  return (
    <form>
      {/* onSubmit={addPartys}> */}

      <select
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='name'
      >
        {names &&
          names.map((name1) => (
            <option value={name1.name} key={name1._id}>
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
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        placeholder='product'
      />

      <input
        type='text'
        value={names.closingBalance}
        onChange={(e) => setOpeningBalance(e.target.value)}
        placeholder='opening balance'
      />
      <input
        type='text'
        value={names.closingStock}
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
        value={names.deliveryBoy}
        onChange={(e) => setDeliveryboy(e.target.value)}
        placeholder='delivery boy'
      />
      <input
        type='text'
        value={names.area}
        onChange={(e) => setArea(e.target.value)}
        placeholder='area'
      />
      <input type='submit' value='submit' />
    </form>
  );
};

export default Sale;

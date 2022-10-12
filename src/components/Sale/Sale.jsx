import { useEffect, useLayoutEffect, useState } from "react";

const Sale = () => {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");

  const [date, setDate] = useState(new Date());
  const [id, setId] = useState("");

  const [product, setProduct] = useState("");
  const [openBal, setOpeningBalance] = useState("");
  // const [discount, setDiscount] = useState('');
  const [openingStock, setOpeningStock] = useState("");
  const [deliveryBoyData, setDeliveryBoyData] = useState([]);
  const [full, setFull] = useState("");
  const [mt, setMt] = useState("");
  const [mrp, setMrp] = useState("");
  const [totdis, setTotDis] = useState("");
  const [totSaleAm, setSaleAm] = useState("");
  const [cloBal, setCloBal] = useState("");
  const [deliveryBoy, setDeliveryboy] = useState("");
  const [area, setArea] = useState("");
  const [names, setNameData] = useState("");

  useLayoutEffect(() => {
    const fetchDelivery = async () => {
      const response = await fetch("http://localhost:8009/api/getdelivery");
      const data = await response.json();
      setDeliveryBoyData(data);
    };
    fetchDelivery();
    const fetchArea = async () => {
      const response1 = await fetch("http://localhost:8009/api/getparty");
      const data = await response1.json();
      setNameData(data);
    };

    fetchArea();
  }, []);
  // console.log(names);

  useEffect(() => {
    let totalDiscount = full * response.discount;
    if (!totalDiscount) totalDiscount = 0;
    setTotDis(totalDiscount);
  }, [full, response.discount]);

  useEffect(() => {
    let totalSaleAmount = (mrp - response.discount) * full;
    if (!totalSaleAmount) totalSaleAmount = 0;
    setSaleAm(totalSaleAmount);
  }, [mrp, full, response.discount]);

  useEffect(() => {
    let closingBalance = response.openingBalance + totSaleAm;
    if (!closingBalance) closingBalance = 0;
    setCloBal(closingBalance);
  }, [totSaleAm, response.openingBalance]);

  useEffect(() => {
    const fetchdetails = async (props) => {
      const url123 = `http://localhost:8009/api/getpartybyid/${props}`;

      console.log(url123);
      const response2 = await fetch(url123);
      const data1 = await response2.json();
      setName(data1.name);
      setDeliveryboy(data1.deliveryBoy);
      setResponse(data1);
    };
    fetchdetails(id);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8009/api/addsale";

    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        date: date,
        full,
        empty: mt,
        mrp,
        discount: response.discount,
        totalDiscount: totdis,
        openingBalance: response.openingBalance,
        deliveryBoy,
        closingBalance: cloBal,
        totalSale: totSaleAm,
        openingStock: response.openingStock,
        area: response.area,
      }),
    });
    const data = await resp.json();
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <select
        type="text"
        value={name}
        onChange={(e) => {
          setId(e.target.value);
        }}
        placeholder="name"
      >
        <option disabled value="">
          Select Name
        </option>
        {names &&
          names.map((name1) => (
            <option value={name1._id} key={name1._id} id={name1.id}>
              {name1.name}
            </option>
          ))}
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
      />
      {/* <input
        type='text'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder='date'
      /> */}
      <input
        type="text"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        placeholder="product"
      />

      <input
        type="text"
        value={response.openingBalance}
        onChange={(e) => setOpeningBalance(e.target.value)}
        placeholder="opening balance"
        disabled
      />
      <input
        type="text"
        value={response.openingStock}
        onChange={(e) => setOpeningStock(e.target.value)}
        placeholder="opening stock"
        disabled
      />
      <input
        type="text"
        value={full}
        onChange={(e) => setFull(e.target.value)}
        placeholder="full"
      />
      <input
        type="text"
        value={mt}
        onChange={(e) => setMt(e.target.value)}
        placeholder="mt"
      />
      <input
        type="text"
        value={mrp}
        onChange={(e) => setMrp(e.target.value)}
        placeholder="mrp"
      />
      <input
        type="text"
        value={response.discount}
        placeholder="discount"
        disabled
      />
      <input
        type="text"
        value={totdis}
        onChange={(e) => setTotDis(e.target.value)}
        placeholder="total discount"
        disabled
      />
      <input
        type="text"
        value={totSaleAm}
        onChange={(e) => setSaleAm(e.target.value)}
        placeholder="total sale amount"
        disabled
      />
      <input
        type="text"
        value={cloBal}
        onChange={(e) => setCloBal(e.target.value)}
        placeholder="closing balance"
        disabled
      />
      <select
        type="text"
        value={deliveryBoy}
        onChange={(e) => setDeliveryboy(e.target.value)}
        placeholder="delivery boy"
        required
      >
        <option disabled value="">
          Select
        </option>
        {deliveryBoyData.map((boy) => (
          <option value={boy.name} key={boy._id}>
            {boy.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={response.area}
        onChange={(e) => setArea(e.target.value)}
        placeholder="area"
        disabled
      />
      <input type="submit" value="submit" />
    </form>
  );
};

export default Sale;

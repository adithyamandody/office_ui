import React, { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addparty.css";

const AddParty = () => {
  const url = "http://localhost:8009/api/addparty";

  const [image, setImage] = useState("");

  const [name, setName] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [discount, setDiscount] = useState("");
  const [proof, setProof] = useState("");
  const [idno, setIdno] = useState("");
  const [deliveryBoys, setDeliveryBoyData] = useState();
  const [deliveryBoy, setDeliveryboy] = useState("");
  const [collectionBoy, setCollectionBoy] = useState("");
  const [openingStock, setOpeningStock] = useState();
  const [Product, setProduct] = useState("");
  const [openingBalance, setOpeningBalance] = useState("");
  const [depocylamo, setDepocylamo] = useState("");
  const [currentStock, setCurrentStock] = useState("");
  const [areas, setAreaData] = useState("");

  useLayoutEffect(() => {
    const fetchDelivery = async () => {
      const response = await fetch("http://localhost:8009/api/getdelivery");
      const data = await response.json();
      setDeliveryBoyData(data);
    };
    fetchDelivery();
    const fetchArea = async () => {
      const response1 = await fetch("http://localhost:8009/api/getarea");
      const data = await response1.json();
      setAreaData(data);
    };
    fetchArea();
  }, []);
  const navigate = useNavigate();

  // const [data, setData] = useState('');
  // const [response, setApiResponse] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetch(url)
  //       .then((res) => setApiResponse(res.json()))
  //       .catch((err) => console.warn(err));
  //   };
  //   fetchData();
  // }, []);

  // const addressDefinitions = response;
  // console.log(addressDefinitions);
  // const stateOptions = _.map(addressDefinitions.name, (name, index) => ({
  //   key: addressDefinitions.state_abbr[index],
  //   text: name,
  // }));

  const addPartys = async (event) => {
    event.preventDefault();

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        img,
        name,
        phoneNumber,
        address,
        area,
        discount,
        proof,
        idno,
        deliveryBoy,
        collectionBoy,
        openingStock,
        openingBalance,
        depocylamo,
        currentStock,
        Product,
      }),
    });
    const data = await response.json();

    if (data.message === "jelole success") {
      navigate("/addParty");
    } else {
      console.log(data.message);
    }
  };
  return (
    <div>
      <form onSubmit={addPartys}>
        <input
          type="file"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image"
          alt="images"
          accept="image/png, image/jpeg"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <select
          type="text"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder="delivery boy"
          required
        >
          <option disabled value="">
            Select
          </option>
          {areas &&
            areas.map((boy) => (
              <option value={boy.name} key={boy._id}>
                {boy.name}
              </option>
            ))}
        </select>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="address"
        />

        <input
          type="text"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          placeholder="discount"
        />
        <input
          type="text"
          value={proof}
          onChange={(e) => setProof(e.target.value)}
          placeholder="proof"
        />
        <input
          type="text"
          value={idno}
          onChange={(e) => setIdno(e.target.value)}
          placeholder="proof id no"
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

          {deliveryBoys &&
            deliveryBoys.map((boy) => (
              <option value={boy.name} key={boy._id}>
                {boy.name}
              </option>
            ))}
        </select>

        <input
          type="text"
          value={openingBalance}
          onChange={(e) => setOpeningBalance(e.target.value)}
          placeholder="opening Balance"
        />
        <select
          type="text"
          value={collectionBoy}
          onChange={(e) => setCollectionBoy(e.target.value)}
          placeholder="collection boy"
          required
        >
          <option disabled value="">
            Select
          </option>

          {deliveryBoys &&
            deliveryBoys.map((boy) => (
              <option value={boy.name} key={boy._id}>
                {boy.name}
              </option>
            ))}
        </select>

        <input
          type="text"
          value={Product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="Product"
        />
        <input
          type="text"
          value={depocylamo}
          onChange={(e) => setDepocylamo(e.target.value)}
          placeholder="deposit cylinder amount"
        />
        <input
          type="text"
          value={currentStock}
          onChange={(e) => setCurrentStock(e.target.value)}
          placeholder="current Stock"
        />
        <input
          type="text"
          value={openingStock}
          onChange={(e) => setOpeningStock(e.target.value)}
          placeholder="opening Stock"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default AddParty;

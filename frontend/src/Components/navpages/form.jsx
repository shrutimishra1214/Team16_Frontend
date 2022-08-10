import React, { useState } from "react";
import "./style.css";
import axios from "axios";

const Form = () => {

  const [bid, setIdBon] = useState("");
  const [isin, setIsin] = useState("");
  const [cusin, setCusin] = useState("");
  const [issue, setIssue] = useState("");
  const [maturity_date, setMaturityDat] = useState("");
  const [coupo, setCoupo] = useState("");
  const [btyp, setBtyp] = useState("");
  const [faceValu, setFaceValu] = useState("");
  const [statu, setStatu] = useState("");
  const [username, setUsername] = useState("");

  async function handleSubmit(event){
    event.preventDefault();
    try{
      await axios.post("http://localhost:8080/saveBond", {
        bid: bid,
        isin: isin,
        cusip: cusin,
        issuer: issue,
        maturity_date: maturity_date,
        coupon: coupo,
        type: btyp,
        faceValue: faceValu,
        Status: statu,
        username: username,
      });
      alert("bond added");
      setBtyp("");
      setCoupo("");
      setCusin("");
      setFaceValu("");
      setIdBon("");
      setIsin("");
      setIssue("");
      setMaturityDat("");
      setStatu("");
      setUsername("");
    }catch(err){
      alert("bond not added");    
    }
  }
  // const [formData, setFormData] = useState({
  //   idBond: "",
  //   ISIN: "",
  //   CUSIN: "",
  //   issuer: "",
  //   maturityDate: "",
  //   coupon: "",
  //   faceValue: "",
  //   status: ""
  // });

  // const updateFormData = event =>
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value
  //   });

  // const { idBond, ISIN, CUSIN, issuer, maturityDate, coupon, btype, faceValue, status } = formData;

  return (
    <form className="settings" onSubmit={handleSubmit}>
        <label>Id</label>
        <input
          value={bid}
          onChange={e => setIdBon(e.target.value)}
          placeholder="#123"
          type="number"
          name="id"
          required
        />
      
      <label>ISIN</label>
      <input
        value={isin}
        onChange={e => setIsin(e.target.value)}
        placeholder="12@"
        type="text"
        name="ISIN"
        required
      />

      <label>CUSIN</label>
      <input
        value={cusin}
        onChange={e => setCusin(e.target.value)}
        placeholder="CUSIN"
        type="text"
        name="CUSIN"
        required
      />

      <label>Issue</label>
      <input
        value={issue}
        onChange={e => setIssue(e.target.value)}
        placeholder="DB"
        type="text"
        name="Issuer"
        required
      />

      <label>Maturity Date</label>
      <input
        value={maturity_date}
        onChange={e => setMaturityDat(e.target.value)}
        type="String"
        name="Maturity Date"
        required
      />

      <label>Coupon</label>
      <input
        value={coupo}
        onChange={e => setCoupo(e.target.value)}
        placeholder="CODE9"
        type="text"
        name="Coupon"
        required
      />

      <label>Bond Type</label>
      <input
        value={btyp}
        onChange={e => setBtyp(e.target.value)}
        placeholder="Corporate"
        type="text"
        name="Bond Type"
        required
      />

      <label>Face Value</label>
      <input
        value={faceValu}
        onChange={e => setFaceValu(e.target.value)}
        placeholder="INR 300"
        type="number"
        name="Face Value"
        required
      />

      <label>Status</label>
      <input
        value={statu}
        onChange={e => setStatu(e.target.value)}
        placeholder="on going"
        type="text"
        name="Status"
        required
      />

      <div className='buttoncenter'>
        <button type="submit" className="centerButton">Submit</button>
      </div>
      
    </form>
  );
};

export default Form;
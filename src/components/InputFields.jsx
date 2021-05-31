import React from "react";

const InputFields = ({ onChangeHandler }) => {
  return (
    <>
      <div className="input-fields">
        <label>Reg Number: </label>
        <input onChange={onChangeHandler} name="regnum" id="reg-num"></input>

        <label>Order Number: </label>
        <input onChange={onChangeHandler} name="ordernum" id="order-num"></input>

        <label>Transmission: </label>
        <select onChange={onChangeHandler} name="transmission" id="transmission">
          <option value="manual">Manual</option>
          <option value="automatic">Automatic</option>
          <option value="cvt">CVT</option>
        </select>

        <label>Fuelage: </label>
        <select onChange={onChangeHandler} name="fuelage" id="fuelage">
          <option value="gasoline/petrol">Gasoline/Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="bio-diesel">Bio-diesel</option>
          <option value="ethanol">Ethanol</option>
        </select>

        <label>Make: </label>
        <select onChange={onChangeHandler} name="make" id="make">
          <option value="nissan">Nissan</option>
          <option value="mercedes">Mercedes</option>
          <option value="hyundai">Hyundai</option>
          <option value="bmw">BMW</option>
          <option value="saab">Saab</option>
          <option value="skoda">Skoda</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
          <option value="volvo">Volvo</option>
          <option value="toyota">Toyota</option>
          <option value="volkswagen">Volkswagen</option>
          <option value="renault">Renault</option>
          <option value="ford">Ford</option>
          <option value="kia">Kia</option>
          <option value="citroen">Citroën</option>
          <option value="mazda">Madza</option>
          <option value="honda">Honda</option>
          <option value="fiat">Fiat</option>
          <option value="suzuki">Suzuki</option>
          <option value="chevrolet">Chevrolet</option>
          <option value="subaru">Subaru</option>
        </select>

        <br></br>

        <div id="input-bottom">
          <label>Model: </label>
          <input onChange={onChangeHandler} name="model" id="model"></input>

          <label>Year: </label>
          <input onChange={onChangeHandler} name="year" id="year"></input>

          <label>Color: </label>
          <input onChange={onChangeHandler} name="color" id="color"></input>

          <label>Mileage: </label>
          <input onChange={onChangeHandler} name="mileage" id="mileage"></input>
        </div>
      </div>
    </>
  );
};

export default InputFields;
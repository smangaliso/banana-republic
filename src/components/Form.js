import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "./Form.css";
import mars from "../assets/images/mars-symbol.svg";
import venus from "../assets/images/venus-symbol.svg";
import card from "../assets/images/card.svg";

export const Form = () => {
  const [Name, setName] = useState();
  const [gender, setGender] = useState({ male: false, female: false });
  const [dob, setDob] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [customerID, setCustomerID] = useState();
  const [membership, setMembership] = useState({
    classic: false,
    silver: false,
    gold: false,
  });

  const changeGender = (e) => {
    setGender(() => {
      return {
        male: false,
        female: false,
        [e.target.value]: true,
      };
    });
  };

  const changeMembership = (e) => {
    setMembership(() => {
      return {
        classic: false,
        silver: false,
        gold: false,
        [e.target.value]: true,
      };
    });
  };

  const cancelHandler = (event) => {
    event.preventDefault(); //prevent form from submitting
    setName("");
    setMobile("");
    setDob("");
    setEmail("");
    setMobile("");
    setCustomerID("");
    setMembership({ classic: false, silver: false, gold: false });
    setGender(() => ({ male: false, female: false }));
  };

  return (
    <Container className="form">
      <form method="POST">
        <div className="form-row">
          <label className="label" htmlFor="name">
            Name
          </label>
          <div className="value">
            <div className="input-group">
              <input
                className="input--style-5"
                type="text"
                id="name"
                value={Name || ""}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <label className="label" htmlFor="Gender">
            Gender
          </label>
          <div className="value">
            <input
              type="radio"
              name="gender"
              id="male"
              required
              value="male"
              checked={gender.male}
              onChange={changeGender}
            />
            <label className="radio-label" htmlFor="male">
              <img className="img-icon" src={mars} alt="mars" />
              <span>Male</span>
            </label>

            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={gender.female}
              onChange={changeGender}
            />
            <label className="radio-label" htmlFor="female">
              <img className="img-icon" src={venus} alt="venus" />
              <span>Female</span>
            </label>
          </div>
        </div>

        <div className="form-row">
          <label className="label" htmlFor="dob">
            Date of Birth
          </label>
          <div className="value">
            <div className="input-group">
              <input
                className="input--style-5"
                placeholder="01/02/1983"
                type="date"
                id="dob"
                value={dob || ""}
                onChange={(e) => setDob(e.target.value)}
                max="2022-06-22"
                required
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <label className="label" htmlFor="email">
            Email
          </label>
          <div className="value">
            <div className="input-group">
              <input
                className="input--style-5"
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email || ""}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <label className="label" htmlFor="mobile">
            Mobile
          </label>
          <div className="value">
            <div className="input-group">
              <input
                className="input--style-5"
                type="tel"
                id="mobile"
                value={mobile || ""}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <label className="label" htmlFor="customer_id">
            Customer ID
          </label>
          <div className="value">
            <div className="input-group">
              <input
                className="input--style-5"
                type="text"
                id="customer_id"
                value={customerID || ""}
                onChange={(e) => setCustomerID(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <label className="label" htmlFor="membership">
            Membership
          </label>
          <div className="value">
            <input
              type="radio"
              name="membership"
              id="classic"
              value="classic"
              checked={membership.classic}
              onChange={changeMembership}
              required
            />
            <label className="radio-label" htmlFor="classic">
              <img className="img-icon" src={card} alt="classic" />
              <span>Classic</span>
            </label>

            <input
              type="radio"
              name="membership"
              id="silver"
              value="silver"
              checked={membership.silver}
              onChange={changeMembership}
            />
            <label className="radio-label" htmlFor="silver">
              <img className="img-icon" src={card} alt="silver" />
              <span>Silver</span>
            </label>

            <input
              type="radio"
              name="membership"
              id="gold"
              value="gold"
              checked={membership.gold}
              onChange={changeMembership}
            />
            <label className="radio-label" htmlFor="gold">
              <img className="img-icon" src={card} alt="gold" />
              <span>Gold</span>
            </label>
          </div>
        </div>
        <div className="button-group">
          <button className="btn btn-cancel" onClick={cancelHandler}>
            CANCEL
          </button>
          <button
            className="btn btn-save"
            onClick={(event) => event.preventDefault()}
          >
            SAVE
          </button>
        </div>
      </form>
    </Container>
  );
};

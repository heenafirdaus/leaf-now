import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUser, updateUser } from "../redux/actions/userActions";
import './AccountDetails.css';

const AccountDetails = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { user, error } = userDetails;
  const [state, setState] = useState({
    email: "",
    name: "",
    address: "",
    isSellerOrDonor: "",
  });

  useEffect(async () => {
    dispatch(getCurrentUser());
  }, []);

  const handleChange = (e) => {
    setState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="account__details">
      <div className="form__container">
        <h4 className="header">Account details</h4>
        <form className="mt-4">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              rows="2"
              value={state.email || user.email}
              // onChange={handleChange}
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              className="form-control"
              id="name"
              name="name"
              rows="2"
              value={state.name || user.name}
              // onChange={handleChange}/
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              type="text"
              className="form-control"
              id="address"
              name="address"
              rows="3"
              value={state.address || user.address}
              // onChange={handleChange}
              disabled
            />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="isSellerOrDonor"
              value={state.isSellerOrDonor || user.isSellerOrDonor}
              disabled
            />
            <label class="form-check-label" for="isSellerOrDonor">
              Do you want to sell or donate ?
            </label>
          </div>
          <Button
            disabled
            type="disabled"
            label="Publish"
            // onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};
export default AccountDetails;

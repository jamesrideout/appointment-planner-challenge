import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Contact Name"
        />
      </label>
      <br />
      <label>
        <input 
          type='tel'
          name='phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          pattern='0\d{10}'
          placeholder="Enter Phone Number with no spaces (0**********)"
        />
      </label>
      <br />
      <label>
        <input 
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email Address"
        />
      </label>
      <br />
      <input type="submit" value="Add Contact" />
    </form>
  );
};

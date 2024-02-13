import React, { useState } from 'react';
import { usePackage } from '../context/PackageContextProvider';
import "./Booking.css"
const Booking = () => {
    const {onePackage} = usePackage()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    startDate: '',
    endDate: '',
    persons: 1,
  });
  const [totalCost, setTotalCost] = useState(0);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onePackage && typeof onePackage.tickPrice === 'number') {
      // Calculate the total cost
      const totalCost = onePackage.tickPrice * formData.persons;
      const dataWithTotalCost = { ...formData, totalCost };
      localStorage.setItem('bookingFormData', JSON.stringify(dataWithTotalCost));
      console.log('Form submitted:', dataWithTotalCost);
      setFormData({
        username: '',
        email: '',
        startDate: '',
        endDate: '',
        persons: 1,
      });
      // Сбросить totalCost
      setTotalCost(0);
    } else {
      console.error('Invalid onePackage or price value');
    }
  };

  
  return (
<div className="booking-container">
  <h2>Booking ticket</h2>
  <form className="booking-form" onSubmit={handleSubmit}>
    <label>
      Username:
      <input type="text" name="username" value={formData.username} onChange={handleChange} required />
    </label>
    <label>
      Email:
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
    </label>
    <label>
      Start Date:
      <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
    </label>
    <label>
      End Date:
      <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
    </label>
    <label>
      Persons:
      <input type="number" name="persons" value={formData.persons} onChange={handleChange} min="1" required />
    </label>
    <button type="submit">Submit</button>
  </form>
  {totalCost > 0 && (
    <div>
      <h3>Total Cost:</h3>
      <p>{totalCost}$</p>
    </div>
  )}
</div>


  );
}

export default Booking;
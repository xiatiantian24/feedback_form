import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: ''
  });

  const handleChange = (event) => { //takes an event parameter, representing the event triggered by the user's interaction with an input element.
    const { name, value } = event.target; //extracts the name and value properties from the event object's target property. The target property refers to the DOM element that triggered the event, which, in this case, is an input field. The name property corresponds to the 'name' attribute of the input field, while the value property represents the current 'value' entered by the user into the input field.
    setFormData({
      ...formData,
      [name]: value //spreads the existing formData object and then updates the property specified by the 'name' variable with the new value. This pattern ensures that the state is updated immutably, meaning a new object is created with the updated property rather than modifying the existing state directly.
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const confirmationMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
      rating: ${formData.rating}
    `;

    const isConfirmed = window.confirm(`Please confirm your details: \n\n ${confirmationMessage}`)
    if (isConfirmed) {
      console.log('Submitting feedback', formData);
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: ''
      });
      alert('Thank you for your valuable feedback!');
    }
  }


  return (
    <>
      <nav>
        Tell Us What You Think
      </nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
        <p><input
          type="radio"
          name="rating"
          value="1"
          onChange={handleChange}
        />1</p>
         <p><input
          type="radio"
          name="rating"
          value="2"
          onChange={handleChange}
        />2</p>
         <p><input
          type="radio"
          name="rating"
          value="3"
          onChange={handleChange}
        />3</p>
         <p><input
          type="radio"
          name="rating"
          value="4"
          onChange={handleChange}
        />4</p>
         <p><input
          type="radio"
          name="rating"
          value="5"
          onChange={handleChange}
        />5</p>
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;

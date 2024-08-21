import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Registration() {
  // State variables for each form field
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [course, setCourse] = useState('');
  const [term, setTerm] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactPhone, setEmergencyContactPhone] = useState('');
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Handle form submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    console.log('Form submitted:', {
      fullname,
      email,
      dob,
      age,
      gender,
      phone,
      address,
      course,
      term,
      emergencyContactName,
      emergencyContactPhone,
      comments
    });
  };

  const handleReset = () => {
    setFullname('');
    setEmail('');
    setDob('');
    setAge('');
    setGender('');
    setPhone('');
    setAddress('');
    setCourse('');
    setTerm('');
    setEmergencyContactName('');
    setEmergencyContactPhone('');
    setComments('');
    setSubmitted(false); // Reset submitted state
  };

  return (
    <div className='container mt-5'>
      <header className='text-center mb-4'>
        <h1>Enrollment Form</h1>
        <h5>Created with ReactJS and Bootstrap</h5>
      </header>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-md-6'>
            <div className='form-group'>
              <label htmlFor='fullname'>Full Name</label>
              <input
                type='text'
                className='form-control'
                id='fullname'
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email Address</label>
              <input
                type='email'
                className='form-control'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='dob'>Date of Birth</label>
              <input
                type='date'
                className='form-control'
                id='dob'
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='age'>Age</label>
              <input
                type='number'
                className='form-control'
                id='age'
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='gender'>Gender</label>
              <select
                className='form-control'
                id='gender'
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value=''>Select Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Prefer not to say</option>
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor='phone'>Phone Number</label>
              <input
                type='tel'
                className='form-control'
                id='phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='address'>Address</label>
              <textarea
                className='form-control'
                id='address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
          </div>

          <div className='col-md-6'>
            <div className='form-group'>
              <label htmlFor='course'>Course of Interest</label>
              <input
                type='text'
                className='form-control'
                id='course'
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='term'>Preferred Enrollment Term</label>
              <input
                type='text'
                className='form-control'
                id='term'
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='emergencyContactName'>Emergency Contact Name</label>
              <input
                type='text'
                className='form-control'
                id='emergencyContactName'
                value={emergencyContactName}
                onChange={(e) => setEmergencyContactName(e.target.value)}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='emergencyContactPhone'>Emergency Contact Phone Number</label>
              <input
                type='tel'
                className='form-control'
                id='emergencyContactPhone'
                value={emergencyContactPhone}
                onChange={(e) => setEmergencyContactPhone(e.target.value)}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='comments'>Additional Comments</label>
              <textarea
                className='form-control'
                id='comments'
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
            </div>
            <br/>

            <button type='submit' className='btn btn-primary w-100'>
              Register
            </button>
            <button type='button' className='btn btn-danger w-100 mt-2' onClick={handleReset}>
              Clear
            </button>
          </div>
        </div>

        {submitted && (
          <div className='alert alert-success mt-3'>
            Registration Successful!
          </div>
        )}
      </form>
    </div>
  );
}

export default Registration;

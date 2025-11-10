import { useState } from 'react'


function Formexample() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  }
  );
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <>
      <div style={{ maxWidth: "400px", margin: "20px auto" }}>
        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>

        {submittedData && (
          <div style={{ marginTop: "20px" }}>
            <h3>Form Submitted Data:</h3>
            <p><b>Name:</b> {submittedData.name}</p>
            <p><b>Email:</b> {submittedData.email}</p>
            <p><b>Password:</b> {submittedData.password}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default Formexample

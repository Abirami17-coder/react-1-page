import React, { useState } from "react";

export default function StudentAdmissionPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    course: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pinCode: "",
    guardianName: "",
    guardianPhone: "",
    guardianOccupation: "",
    qualification: "",
    percentage: "",
    documents: null,
  });

  const [errors, setErrors] = useState({});
  const [fileError, setFileError] = useState("");

  const courses = ["BSc Computer Science", "BA Economics", "BCom", "BBA", "BCA"];
  const qualifications = ["10th", "12th", "Diploma", "Graduate"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderChange = (gender) => {
    setFormData({ ...formData, gender });
  };

  const validate = () => {
    const newErrors = {};
    const phonePattern = /^[0-9]{10}$/; // Pattern for 10-digit phone numbers
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Pattern for valid email
    const charPattern = /^[a-zA-Z\s]+$/; // Pattern for only characters and spaces

    // Name Validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    } else if (!charPattern.test(formData.firstName)) {
      newErrors.firstName = "First name must contain only letters.";
    }

    if (!formData.middleName.trim()) {
      newErrors.middleName = "Middle name is required.";
    } else if (!charPattern.test(formData.middleName)) {
      newErrors.middleName = "Middle name must contain only letters.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    } else if (!charPattern.test(formData.lastName)) {
      newErrors.lastName = "Last name must contain only letters.";
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    // Phone Validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phonePattern.test(formData.phone)) {
      newErrors.phone = "Phone must be a valid 10-digit number.";
    }

    // Date of Birth Validation
    if (!formData.dob) {
      newErrors.dob = "Date of birth is required.";
    }

    // Gender Validation
    if (!formData.gender) {
      newErrors.gender = "Please select a gender.";
    }

    // Address Validation
    if (!formData.addressLine1.trim()) {
      newErrors.addressLine1 = "Address Line 1 is required.";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required.";
    } else if (!charPattern.test(formData.city)) {
      newErrors.city = "City must contain only letters.";
    }
    if (!formData.state.trim()) {
      newErrors.state = "State is required.";
    } else if (!charPattern.test(formData.state)) {
      newErrors.state = "State must contain only letters.";
    }
    if (!formData.pinCode.trim()) {
      newErrors.pinCode = "Pin Code is required.";
    } else if (!/^\d{6}$/.test(formData.pinCode)) {
      newErrors.pinCode = "Pin Code must be a valid 6-digit number.";
    }

    // Guardian Details Validation
    if (!formData.guardianName.trim()) {
      newErrors.guardianName = "Guardian name is required.";
    } else if (!charPattern.test(formData.guardianName)) {
      newErrors.guardianName = "Guardian name must contain only letters.";
    }
    if (!formData.guardianPhone.trim()) {
      newErrors.guardianPhone = "Guardian phone number is required.";
    } else if (!phonePattern.test(formData.guardianPhone)) {
      newErrors.guardianPhone = "Guardian phone must be a valid 10-digit number.";
    }
    if (!formData.guardianOccupation.trim()) {
      newErrors.guardianOccupation = "Guardian occupation is required.";
    } else if (!charPattern.test(formData.guardianOccupation)) {
      newErrors.guardianOccupation = "Guardian occupation must contain only letters.";
    }

    // Qualification and Percentage Validation
    if (!formData.qualification) {
      newErrors.qualification = "Last qualification is required.";
    }
    if (!formData.percentage.trim()) {
      newErrors.percentage = "Last exam percentage is required.";
    } else if (isNaN(formData.percentage) || formData.percentage < 0 || formData.percentage > 100) {
      newErrors.percentage = "Percentage must be between 0 and 100.";
    }

    // Course Validation
    if (!formData.course) {
      newErrors.course = "Please select a course.";
    }

    // File Upload Validation
    if (!formData.documents) {
      newErrors.documents = "Please upload a valid document.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    alert("Form submitted successfully!");
    console.log("Submitted data:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 border rounded-xl shadow-lg bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Student Admission Form</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Fields (Three Columns) */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => {
                // Allow only letters and spaces
                const value = e.target.value;
                if (/^[a-zA-Z\s]*$/.test(value)) {
                  handleChange(e);
                }
              }}
              className={`w-full border p-2 rounded ${errors.firstName ? "border-red-500" : ""}`}
              pattern="[a-zA-Z\s]*" // Ensures only letters and spaces are allowed
              title="First name must contain only letters."
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>
          <div>
            <label>Middle Name</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={(e) => {
                // Allow only letters and spaces
                const value = e.target.value;
                if (/^[a-zA-Z\s]*$/.test(value)) {
                  handleChange(e);
                }
              }}
              className={`w-full border p-2 rounded ${errors.middleName ? "border-red-500" : ""}`}
              pattern="[a-zA-Z\s]*" // Ensures only letters and spaces are allowed
              title="Middle name must contain only letters."
            />
            {errors.middleName && <p className="text-red-500 text-sm">{errors.middleName}</p>}
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => {
                // Allow only letters and spaces
                const value = e.target.value;
                if (/^[a-zA-Z\s]*$/.test(value)) {
                  handleChange(e);
                }
              }}
              className={`w-full border p-2 rounded ${errors.lastName ? "border-red-500" : ""}`}
              pattern="[a-zA-Z\s]*" // Ensures only letters and spaces are allowed
              title="Last name must contain only letters."
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
        </div>

        {/* DOB and Gender (Two Columns in One Row) */}
        <div className="grid grid-cols-2 gap-4">
          {/* Date of Birth */}
          <div>
            <label className="block font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
          </div>

          {/* Gender */}
          <div>
            <label>Gender:</label><br />
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
              required
            /> Male{" "}
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            /> Female{" "}
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={handleChange}
            /> Other
            {errors.gender && <p className="text-red-500 text-sm mt-2">{errors.gender}</p>}
           
          </div>
        </div>

        {/* Phone and Email (One Row) */}
        <div className="grid grid-cols-2 gap-4">
          {/* Phone */}
          <div>
            <label className="block font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                // Allow only numbers and limit to 10 digits
                const value = e.target.value;
                if (/^\d{0,10}$/.test(value)) {
                  handleChange(e);
                }
              }}
              className={`w-full border p-2 rounded ${errors.phone ? "border-red-500" : ""}`}
              pattern="[0-9]{10}" // Ensures exactly 10 digits are allowed
              title="Phone number must be exactly 10 digits."
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
        </div>

        {/* Address Section */}
        <div>
          <label className="block font-medium">Address Line 1</label>
          <input
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.addressLine1 && <p className="text-red-500 text-sm">{errors.addressLine1}</p>}
        </div>
        <div>
          <label className="block font-medium">Address Line 2</label>
          <input
            type="text"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block font-medium">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={(e) => {
                // Allow only letters and spaces
                const value = e.target.value;
                if (/^[a-zA-Z\s]*$/.test(value)) {
                  handleChange(e);
                }
              }}
              className={`w-full border p-2 rounded ${errors.city ? "border-red-500" : ""}`}
              pattern="[a-zA-Z\s]*" // Ensures only letters and spaces are allowed
              title="City must contain only letters."
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
          </div>
          <div>
            <label className="block font-medium">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
          </div>
          <div>
            <label className="block font-medium">Pin Code</label>
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors.pinCode && <p className="text-red-500 text-sm">{errors.pinCode}</p>}
          </div>
        </div>
        {/* Guardian Details */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Guardian Name</label>
            <input
              type="text"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors.guardianName && <p className="text-red-500 text-sm">{errors.guardianName}</p>}
          </div>
          <div>
            <label className="block font-medium">Guardian Phone</label>
            <input
              type="tel"
              name="guardianPhone"
              value={formData.guardianPhone}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors.guardianPhone && <p className="text-red-500 text-sm">{errors.guardianPhone}</p>}
          </div>
        </div>
        {/* guardian occupation */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Guardian Occupation</label>
            <input
              type="text"
              name="guardianOccupation"
              value={formData.guardianOccupation}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors.guardianOccupation && <p className="text-red-500 text-sm">{errors.guardianOccupation}</p>}
          </div>
        {/* Course Selection */}
        <div>
          <label className="block font-medium">Select Course</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select a course</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
          {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
       </div>
        </div>
        {/* Qualification and Percentage */}
       <div className="grid grid-cols-2 gap-4">
       <div>
          <label className="block font-medium">Qualification</label>
          <select   
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select qualification</option>
            {qualifications.map((qualification) => (
              <option key={qualification} value={qualification}>
                {qualification}
              </option>
            ))}
        </select>
        {errors.qualification && <p className="text-red-500 text-sm">{errors.qualification}</p>}
        </div>
        {/* Percentage */}  
        <div>
          <label className="block font-medium">Percentage</label>
          <input
            type="number"
            name="percentage"
            value={formData.percentage}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.percentage && <p className="text-red-500 text-sm">{errors.percentage}</p>}
        </div>
        </div>
        {/* File Upload */}
        <div>
          <label className="block font-medium">Upload Documents (PDF, JPG, PNG)</label>
          <input type="file" onChange={(e) => handleFileChange(e)} accept=".pdf,.jpg,.jpeg,.png" />
          {fileError && <p className="text-red-500 text-sm">{fileError}</p>}
          
          {errors.documents && <p className="text-red-500 text-sm">{errors.documents}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
        
      </form>
    </div>
  );
}

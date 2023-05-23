import React, { useState } from 'react';

const countries = ['Country 1', 'Country 2', 'Country 3', 'Country 4', 'Country 5'];
const companies = ['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'];

export const Form = () => {
//this is the logic for the form component

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [company, setCompany] = useState('');
  const [state, setState] = useState('');
  const [description, setDescription] = useState('');
  const [distributor, setDistributor] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [promotions, setPromotions] = useState(false);
  const [submitted, setSubmitted] = useState(false); // Track form submission status

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation logic here
    console.log('Form submitted!');
    setSubmitted(true);
  };

  return (
    <div id='form' className='bg-white p-5'>
        <h1 className='text-3xl pb-2 font-bold'>Connect with us</h1>
        <h4 className='font-book'>for outstanding protective overlaminates</h4>
        <form onSubmit={handleSubmit} className="mt-6">
        <div className="flex mb-4">
            <div className="w-1/2 mr-2">
            <label htmlFor="firstName" className="font-book block mb-1">
                First Name:
            </label>
            <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                minLength={5}
                className="w-full p-2 border border-gray-300 rounded"
            />
            </div>
            <div className="w-1/2 ml-2">
            <label htmlFor="lastName" className="font-book block mb-1">
                Last Name:
            </label>
            <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                minLength={5}
                className="w-full p-2 border border-gray-300 rounded"
            />
            </div>
        </div>
        <div className="flex mb-4">
            <div className="w-1/2 mr-2">
            <label htmlFor="email" className="font-book block mb-1">
                Email:
            </label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                className="w-full p-2 border border-gray-300 rounded"
            />
            </div>
            <div className="w-1/2 ml-2">
            <label htmlFor="contactNumber" className="font-book block mb-1">
                Contact Number:
            </label>
            <input
                type="tel"
                id="contactNumber"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
                minLength={9}
                pattern="[0-9]{9,}"
                className="w-full p-2 border border-gray-300 rounded"
            />
            </div>
        </div>
        <div className="mb-4">
            <label htmlFor="company" className="font-book block mb-1">
            Company:
            </label>
            <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            minLength={4}
            className="w-full p-2 border border-gray-300 rounded"
            />
        </div>
        <div className="mb-4">
            <label htmlFor="state" className="font-book block mb-1">
            State:
            </label>
            <select
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            >
            <option className='font-book' value="">Select a state</option>
            {countries.map((country, index) => (
                <option key={index} value={country}>
                {country}
                </option>
            ))}
            </select>
        </div>
        <div className="mb-4">
            <label htmlFor="description" className="font-book block mb-1">
            How would you describe yourself?
            </label>
            <select
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            >
            <option className='font-book' value="">Select an option</option>
            <option value="distributor">Distributor</option>
            <option value="installer">Installer</option>
            <option value="consumer">Consumer</option>
            </select>
        </div>
        <div className="mb-4">
            <label htmlFor="distributor" className="font-book block mb-1">
            Preferred Distributor:
            </label>
            <select
            id="distributor"
            value={distributor}
            onChange={(e) => setDistributor(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            >
            <option value="">Select a distributor</option>
            {companies.map((company, index) => (
                <option key={index} value={company}>
                {company}
                </option>
            ))}
            </select>
        </div>
        <div className="mb-4">
            <label htmlFor="additionalInfo" className="font-book block mb-1">
            Additional Information:
            </label>
            <textarea
            id="additionalInfo"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
            />
        </div>
        <div className="mb-4">
            <label className="inline-flex items-center">
            <input
                type="checkbox"
                checked={promotions}
                onChange={(e) => setPromotions(e.target.checked)}
            />
            <span className="font-light ml-2">
                I'd like to receive promotions, product information and 
                service offers from Avery Dennison.
            </span>
            </label>
        </div>
        <div className='mt-6 flex flex-col items-center justify-center'>
            {!submitted ?(
                <button type="submit" className=" font-semibold px-10 py-3 bg-orange-500 text-xl font-medium text-white rounded">
                    Submit
                </button>
            ): (
                <div className="p-4 text-center">
                    <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                    <p className='font-light'>Your form has been successfully submitted.</p>
                </div>
            )}
        </div>
        </form>
    </div>
  );
};

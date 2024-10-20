import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../authContext';
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea"
import { Checkbox } from "../ui/checkbox"
const Repocreation = () => {
  const [name, setName] = useState('');
  const [desp, setDesp] = useState('');
  const [visibility, setVisibility] = useState(true);
  const [owner, setOwner] = useState('');
  const [content, setContent] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // For handling errors
  const { setCurrUser } = useAuth();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setOwner(userId);
  }, []);

  const handleRepocreation = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/repo/create", {
        name,
        description: desp,
        visibility,
        owner,
        content,
        issues: []
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);

      setCurrUser(res.data.userId);
      setLoading(false);

      window.location.href = '/';
      alert("Repo Creation Successful");
    } catch (err) {
      setLoading(false);
      setError('Repo creation failed. Please try again.');
      console.error(err);
    }
  };


  return (
    <form className="p-10 space-y-12 ">
    <div className="border p-10 rounded-xl border-gray-900/10 dark:border-gray-700 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
        Repo Creation
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
        Create a new repository by filling out the form below.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
          >
            Repo Name
          </label>
          <div className="mt-2">
          <Input
              id="username"
              type="text"
              placeholder="Your user name"
              required
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
          >
            Description
          </label>
          <div className="mt-2">
           <Textarea placeholder="Type your message here." />
          </div>
        </div>

        <div className="sm:col-span-4">
        <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
            </div>

        

        <div className="sm:col-span-4">
          <label
            htmlFor="content"
            className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
          >
            Content
          </label>
          <div className="mt-2">
          <Textarea placeholder="Type your message here." />
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="button"
        className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Create Repo
      </button>
    </div>
    </div>

    
  </form>

  );
}

export default Repocreation;

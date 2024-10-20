import React, { useState } from 'react';
import { useAuth } from '../../authContext';
import axios from 'axios';

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Link } from 'react-router-dom';

export const description =
  "A sign-up form with first name, last name, email, and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account.";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);  // For handling errors
  const { setCurrUser } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);  // Clear previous errors
  
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/signup", {
        username: username,
        email: email,
        password: password,
      });
  
     
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);
      console.log(res.data.token)
      console.log(res.data.userId)

  
      setCurrUser(res.data.userId);
      setLoading(false);
  
      window.location.href = '/';
      alert("signup Successfull")
    } catch (err) {
      setLoading(false);
      alert("signup faild")
    }
  };

  return (
    <Card className="mx-auto max-w-sm text-left mt-40 mb-20">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">User Name</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Your user name"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Error Message Display */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button
            onClick={handleSignup}
            disabled={loading}
            type="submit"
            className="w-full"
          >
            {loading ? "Loading..." : "Create Your Account"}
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default Signup;

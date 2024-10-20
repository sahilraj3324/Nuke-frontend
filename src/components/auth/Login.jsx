import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {useAuth} from '../../authContext'

import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Link } from 'react-router-dom';



export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account."


const Login = () => {
  // useEffect (() => {
  //   localStorage.removeItem("token")
  //   localStorage.removeItem("userId")
  //   setCurrUser(null)
  // })

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [loading , setLoading] = useState("")
  const {currUser, setCurrUser} = useAuth()

  const handleLogin = async (e) =>{
    e.preventDefault();
    
  
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("token" , res.data.token)
      localStorage.setItem("userId" , res.data.userId)
      
      setCurrUser(res.data.userId)
      setLoading(false)
      window.location.href = '/';
      alert("Login successful ! I LOVE YOU !")
  } catch(err){
    console.error(err);
    alert("Login Falild ! sorry But I love You Sooo Much !")
    setLoading(false)
  }
}

  return (
    <Card className="mx-auto max-w-sm mt-40 mb-20 p-10 text-left">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email ">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value = {email}
              onChange = {(e)=> setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required value = {password}
              onChange = {(e)=> setPassword(e.target.value)} />
          </div>
          <Button type="submit" onClick = {handleLogin} disable = {loading} className="w-full">
            {loading? "Loading" : "Login"}
            
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link  to = "/signup"
          href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default Login;

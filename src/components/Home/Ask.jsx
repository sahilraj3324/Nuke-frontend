import React from 'react';
import { useState } from 'react';
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import axios from 'axios';
const Ask = () => {
    let [ans , setAns] = useState("")
    let [que , setQue] = useState("")

async function res(e) {
   
    const Ans = await axios({
        url :'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBFcJvWhQz6jIbi9GKniHh6VY2JHlIZ5qs',
        method : "post" ,
        data : {"contents":[{"parts":[{"text":que}]}]}
    })
    setAns(Ans.data.candidates[0].content.parts[0].text)
}


    const placeholders = [
        "What's the first rule of Fight Club?",
        "Who is Tyler Durden?",
        "Where is Andrew Laeddis Hiding?",
        "Write a Javascript method to reverse a string",
        "How to assemble your own PC?",
      ];
     
      const handleChange = (e) => {
        setQue(e.target.value);
      };
      const onSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
      };
  return (
    <div className=" flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Ask Anything you Want!
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={res}
        onClick={res}
        className="mb-10"
      />
      
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      {/* Dynamic Text Explanation */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Explanation:</h2>
        
      </div>

      {/* Dynamic Code Block */}
      <div className="bg-gray-900 p-4 rounded-lg text-white font-mono text-sm overflow-auto text-left">
        <pre>
          <code>{ans}</code>
        </pre>
      </div>
    </div>
               
    </div>
  );
}

export default Ask;

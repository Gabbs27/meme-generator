/* eslint-disable no-const-assign */
import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  // const [memeImage, setMemeImage] = useState("");

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMeme() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: memesArray[randomNumber].url,
    }));
  }

  return (
    <main>
      <div className='form'>
        <input type='text' placeholder='Top text' className='form--input' />
        <input type='text' placeholder='Bottom text' className='form--input' />
        <button onClick={getMeme} className='form--button'>
          Get a new meme image 🖼
        </button>

        <img src={meme.randomImage} alt='meme' className='meme--image' />
      </div>
    </main>
  );
}

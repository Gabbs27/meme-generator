import React, { useState, useEffect } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    id: "",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMeme() {
    const memesArray = allMemeImages.data.memes;
    if (memesArray) {
      const randomNumber = Math.floor(Math.random() * memesArray.length);
      const newMeme = {
        ...meme,
        randomImage: memesArray[randomNumber].url,
        id: memesArray[randomNumber].id,
      };
      console.log(memesArray);
      setMeme(newMeme);
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setMeme({
      ...meme,
      [name]: value,
    });
  }

  useEffect(() => {
    setAllMemeImages(memesData);
  }, []);

  function generateMeme() {
    const memeUrl = `https://api.imgflip.com/caption_image?template_id=${meme.id}&username=Xicebriel&password=huxjeR-cirni1-rifkar&text0=${meme.topText}&text1=${meme.bottomText}`;
    fetch(memeUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const imageUrl = data.data.url;
        const win = window.open("", "_blank", "width=500,height=500");
        win.document.write(
          `<img src="${imageUrl}" alt="meme" style="max-width: 100%; height: auto;" />`
        );
      });
  }

  return (
    <main className='main'>
      <div className='form'>
        <input
          type='text'
          placeholder='Top text'
          className='form--input'
          name='topText'
          onChange={handleInputChange}
        />
        <img src={meme.randomImage} alt='meme' className='meme--image' />
        <input
          type='text'
          placeholder='Bottom text'
          className='form--input'
          name='bottomText'
          onChange={handleInputChange}
        />
        <button onClick={getMeme} className='form--button'>
          Get a new meme image 🖼
        </button>
        <button onClick={generateMeme} className='form--button'>
          Generate meme
        </button>
      </div>
    </main>
  );
}

//const memeUrl = `https://api.imgflip.com/caption_image?template_id=${meme.id}&username=Xicebriel&password=huxjeR-cirni1-rifkar&text0=${meme.topText}&text1=${meme.bottomText}`;

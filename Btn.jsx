import { useState } from "react";
import './App.css'

export default function Btn() {

    const [data, setData] = useState("")
    // const roll = ["animal", "career" , "celebrity", "dev" ,"fashion"]
   
    const handleClick = async (evt) => {
        const response = await fetch('https://api.chucknorris.io/jokes/random?category=dev');
        const jsonData = await response.json();
        setData(jsonData);
        
    }

    return (

        <div>
            <button onClick={handleClick}>Animals<p>unlimited jokes on animal</p></button>
            <button onClick={handleClick}>Career<p>unlimited jokes on Career</p></button>
            <button onClick={handleClick}>Celebrity<p>unlimited jokes on Celebrity</p></button>
            <button onClick={handleClick}>Dev<p>unlimited jokes on Dev</p></button>
            <button onClick={handleClick}>Explicit<p>unlimited jokes on Explicit</p></button>
            <button onClick={handleClick}>Fashion<p>unlimited jokes on Fashion</p></button>
            <button onClick={handleClick}>Food<p>unlimited jokes on Food</p></button>
            <button onClick={handleClick}>History<p>unlimited jokes on History</p></button>
            <button onClick={handleClick}>Money<p>unlimited jokes on Money</p></button>
            <button onClick={handleClick}>Movies<p>unlimited jokes on Movies</p></button>
            <button onClick={handleClick}>Music<p>unlimited jokes on Music</p></button>
            <button onClick={handleClick}>Politics<p>unlimited jokes on Politics</p></button>
            <button onClick={handleClick}>Religion<p>unlimited jokes on Religion</p></button>
            <button onClick={handleClick}>Science<p>unlimited jokes on Science</p></button>
            <button onClick={handleClick}>Sports<p>unlimited jokes on Sports</p></button>
            <button onClick={handleClick}>Travel<p>unlimited jokes on Travel</p></button>
        </div>

    )
}
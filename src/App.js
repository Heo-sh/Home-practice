import { useState } from "react";

// function App() {
//   const [time, setTime] = useState(1);

//   const handleClick = () => {
//     let newTime;
//     if (time >= 12) {
//       newTime = 1;
//     } else {
//       newTime = time + 1;
//     }
//     setTime(newTime);
//   }

//   return (
//     <>
//       <span>현재 시각: {time}시</span>
//       <button onClick={handleClick}>Update</button>
//     </>
//   )
// }

const heavyWork = () => {
  console.log("엄청 무거운 작업!!!");
  return ["홍길동", "김민수"];
}

function App() {
  const [names, setNames] = useState(() => {
    return heavyWork();
  });
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  }
  
  const handleclick = () => {
    setNames((prevState) => {
      console.log("이전 state:", prevState);
      return ([input, ...prevState])
    });
  }

  console.log(input);
  return (
    <div>
      <input 
        onChange={handleChange}
        type="text"
        value={input} 
        />
      <button onClick={handleclick}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>
      })}
    </div>
  )
}

export default App;

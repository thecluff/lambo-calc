import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

export default function App() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  // const [operation, setOperation] = useState('');
  const [result, setResult] = useState('')

  function p5percent() { return (setResult(parseInt(first) * 1.05)) & setFirst(result) }
  function m5percent() { return (setResult(parseInt(first) - (parseInt(first) * 0.05 ))) & setFirst(result) }
  function p10percent() { return (setResult(parseInt(first) * 1.10)) & setFirst(result) }  
  function m10percent() { return (setResult(parseInt(first) - (parseInt(first) * 0.10))) & setFirst(result) }  
  function p15percent() { return (setResult(parseInt(first) * 1.15)) & setFirst(result) }  
  function m15percent() { return (setResult(parseInt(first) - (parseInt(first) * 0.15))) & setFirst(result) }  
  function p20percent() { return (setResult(parseInt(first) * 1.20)) & setFirst(result) }  
  function m20percent() { return (setResult(parseInt(first) - (parseInt(first) * 0.20))) & setFirst(result) }  
  function p25percent() { return (setResult(parseInt(first) * 1.25)) & setFirst(result) }  
  function m25percent() { return (setResult(parseInt(first) - (parseInt(first) * 0.25))) & setFirst(result) }  
  function p30percent() { return (setResult(parseInt(first) * 1.30)) & setFirst(result) }  
  function m30percent() { return (setResult(parseInt(first) - (parseInt(first) * 0.30))) & setFirst(result) }  
  function m32percent() { return (setResult(parseInt(first) - (parseInt(first) * 1.32))) & setFirst(result) }  
  function m35percent() { return (setResult(parseInt(first) - (parseInt(first) * 0.35))) & setFirst(result) }  
  function p40percent() { return (setResult(parseInt(first) * 1.40)) & setFirst(result) }  
  function m40percent() { return (setResult(parseInt(first) - (parseInt(first) * 0.40))) & setFirst(result) }  
  function p50percent() { return (setResult(parseInt(first) * 1.50)) & setFirst(result) }  
  function m50percent() { return (setResult(parseInt(first) - (parseInt(first) * 0.50))) & setFirst(result) }  
  function p60percent() { return (setResult(parseInt(first) * 1.60)) & setFirst(result) }  
  function m75percent() { return (setResult(parseInt(first) - (parseInt(first) * 0.75))) & setFirst(result) }  
  function p80percent() { return (setResult(parseInt(first) * 1.80)) & setFirst(result) }  
  function p100percent() { return (setResult(parseInt(first) * 2.0)) & setFirst(result) }

  useEffect(() => console.log(result) )

  // Define calc
  function calculator() {
      return (
        setResult(parseInt(first) * parseInt(second))
        )
  }

  return (
  <div>
  <center>
    <img src="https://i.pinimg.com/originals/cc/4e/41/cc4e41e43a27171a426df088b1c4c589.jpg" width="400" />
  <br />

  <h2>Price Calc</h2>
  <br />
  <input type="number" placeholder="First Number" onChange={(e) => setFirst(e.target.value)} />
  <br />
  <br />

  <div>
  </div>
  <tbody>
    <tr>
    <td><button type="submit" onClick={p5percent}> +5% </button></td> 
    <td><button type="submit" onClick={m5percent}> -5% </button></td> 
    <td><button type="submit" onClick={p10percent}> +10% </button></td> 
    <td><button type="submit" onClick={m10percent}> -10% </button></td> 
    <td><button type="submit" onClick={m15percent}> -15% </button></td> 
    <td><button type="submit" onClick={p15percent}> +15% </button></td> 
    </tr>
    <tr>
    <td><button type="submit" onClick={m20percent}> -20% </button></td>  
    <td><button type="submit" onClick={p20percent}> +20% </button></td> 
    <td><button type="submit" onClick={m25percent}> -25% </button></td>  
    <td><button type="submit" onClick={p25percent}> +25% </button></td> 
    <td><button type="submit" onClick={m30percent}> -30% </button></td>  
    <td><button type="submit" onClick={p30percent}> +30% </button></td> 
    </tr>
    <tr>
    <td><button type="submit" onClick={m32percent}> -32% </button></td>  
    <td><button type="submit" onClick={m35percent}> -35% </button></td>  
    <td><button type="submit" onClick={m40percent}> -40% </button></td>  
    <td><button type="submit" onClick={p40percent}> +40% </button></td> 
    <td><button type="submit" onClick={m50percent}> -50% </button></td> 
    </tr>
    <tr>
    <td><button type="submit" onClick={p50percent}> +50% </button></td> 
    <td><button type="submit" onClick={p60percent}> +60% </button></td> 
    <td><button type="submit" onClick={m75percent}> -75% </button></td> 
    <td><button type="submit" onClick={p80percent}> +80% </button></td> 
    <td><button type="submit" onClick={p100percent}> +100% </button></td> 
    </tr>
  </tbody>
    <br />
      <div>{result}</div>
      
      </center>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)
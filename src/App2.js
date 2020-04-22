import React from 'react';
import Table from 'react-bootstrap/Table';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
// import firebase from './firebase'

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  // var [ btcVal, setBtcVal ] = useState('')
  // const [ altVal, setAltVal ] = useState('')
  // const [ shiVal, setShiVal ] = useState('')
  // const [ priVal, setPriVal ] = useState('')

  const onSubmit = data => {

    console.log(data);
    // if (data.assetType = ( data.btc )) {
      var btcPriceholder = data.assetType * data.percGainLoss ;
      console.log(btcPriceholder);

    // firebase
    // .firestore()
    // .collection('game')
    //     .add(
    //       {
    //       btcVal,
    //       })
    // .then(() => {
    //   setBtcVal({btcPriceholder})
      // setAltVal('')
      // setShiVal('')
      // setPriVal('')
    // })

    // } else {console.log('naw')}
    // var priceholder = data.assetType * data.percGainLoss ;
    // console.log(priceholder);


  };
  console.log(errors);
// For increase, do price * p5percent * price
// For decrease, do price * m5percent
const p5percent = 1.05
const m5percent = 0.05
const p10percent = 1.10  
const m10percent = 0.10  
const p15percent = 1.15  
const m15percent = 0.15  
const p20percent = 1.20  
const m20percent = 0.20  
const p25percent = 1.25  
const m25percent = 0.25  
const p30percent = 1.30  
const m30percent = 0.30  
const m32percent = 1.32  
const m35percent = 0.35  
const p40percent = 1.40  
const m40percent = 0.40  
const p50percent = 1.50  
const m50percent = 0.50  
const p60percent = 1.60  
const m75percent = 0.75  
const p80percent = 1.80  
const p100percent = 2.0

  var btc = 10000
  var alt = 10000
  var shi = 10000
  var pri = 10000
  
  // var btc = ("Btc" + {btcPrice} )
  // var alt = ("Alt" + {altPrice} )
  // var shit = ("Shit" + {shiPrice} )
  // var priv = ("Priv" + {priPrice} )


  
  return (
<center>
<div style={{width: 600, textAlign: 'center', marginTop: 45 }}>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Asset Value</th>
    </tr>
  </thead>
  <tbody>
<tr>
<InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>With textarea</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>
{/* <input name="value" type="text" value={coinVal} ref={register}/> <br /> */}
  
</tr>
    {/* <tr>
      <td>
      <input name="assetType" type="radio" value={btc} ref={register}/> BTC ($10,000)<br />
      <input name="assetType" type="radio" value={alt} ref={register}/> Altcoin ($10,000)<br />
      <input name="assetType" type="radio" value={shi} ref={register}/>Shitcoin ($10,000)<br />
      <input name="assetType" type="radio" value={pri} ref={register}/>Privacy ($10,000)<br />
      </td>
    </tr> */}

  </tbody>
</Table>
</div>

    <div>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>% Gain/Losses</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
    <td><input name="percGainLoss" type="radio" value={p5percent} ref={register}/> +5% </td>
      <td><input name="percGainLoss" type="radio" value={m5percent} ref={register}/> -5% </td>
      <td><input name="percGainLoss" type="radio" value={p10percent} ref={register}/> +10% </td>
      <td><input name="percGainLoss" type="radio" value={m10percent} ref={register}/> -10% </td>
      <td><input name="percGainLoss" type="radio" value={m15percent} ref={register}/> -15% </td>
      
    </tr>
    <tr>
    <td><input name="percGainLoss" type="radio" value={p15percent} ref={register}/> +15% </td>
      <td><input name="percGainLoss" type="radio" value={m20percent} ref={register}/> -20% </td> 
      <td><input name="percGainLoss" type="radio" value={p20percent} ref={register}/> +20% </td>
      <td><input name="percGainLoss" type="radio" value={m25percent} ref={register}/> -25% </td> 
      <td><input name="percGainLoss" type="radio" value={p25percent} ref={register}/> +25% </td>
    </tr>
    <tr>
    <td><input name="percGainLoss" type="radio" value={m30percent} ref={register}/> -30% </td> 
      <td><input name="percGainLoss" type="radio" value={p30percent} ref={register}/> +30% </td>
      <td><input name="percGainLoss" type="radio" value={m32percent} ref={register}/> -32% </td> 
      <td><input name="percGainLoss" type="radio" value={m35percent} ref={register}/> -35% </td> 
      <td><input name="percGainLoss" type="radio" value={m40percent} ref={register}/> -40% </td> 
    </tr>
    <tr>
    <td><input name="percGainLoss" type="radio" value={p40percent} ref={register}/> +40% </td>
      <td><input name="percGainLoss" type="radio" value={m50percent} ref={register}/> -50% </td> 
      <td><input name="percGainLoss" type="radio" value={p50percent} ref={register}/> +50% </td>
      <td><input name="percGainLoss" type="radio" value={p60percent} ref={register}/> +60% </td>
      <td><input name="percGainLoss" type="radio" value={m75percent} ref={register}/> -75% </td>
    </tr>
    <tr>
    <td><input name="percGainLoss" type="radio" value={p80percent} ref={register}/> +80% </td>
      <td><input name="percGainLoss" type="radio" value={p100percent} ref={register}/> +100% </td>
    </tr>
  </tbody>
</Table>
</div>

      <input type="submit" />
    </form>

    </div>
    </center>
  );
}
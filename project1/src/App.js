import logo from './logo.svg';
import './App.css';
// import Demo from './component/Demo';

function App() {
  let data =
 [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];

  let fData = data.filter((d,i) => d.status === true && d.expiry >= 2022);
  console.log(fData);

  let sum = fData.reduce((acc ,d,i) => acc + d.price ,0)
  console.log(sum);
  return (
    <table border = "1" align = "center" cellPadding = "10" cellSpacing="0">
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Quantity</td>
        <td>Price</td>
        <td>Expiry</td>
        <td>Status</td>
        <td>Total price</td>
      </tr>

      {
        fData.map((d,i) => {
          let {id,name,quantity,price,expiry,status} =d;
          return(
            <tr key={i}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{quantity}</td>
              <td>{price}</td>
              <td>{expiry}</td>
              <td>{status.toString()}</td>
              {i === 0 ? <td rowSpan={2}>{sum}</td> : null}
            </tr>
          )
        })
      }
    </table>
  );
}

export default App;

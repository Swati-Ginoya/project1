import logo from './logo.svg';
import './App.css';
import Demo from './component/Demo';

function App() {
  let data =
[
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ]
  return (
    <table border="1" align="center" cellPadding="10" cellSpacing="0">
      <tr>
        <td>Name</td>
        <td>Age</td>
        <td>Salary</td>
        <td>Bonus</td>
        <td>Status</td>
      </tr>
      {
       data.map((d,i) => {

        let {name, age, salary, bonus, status} = d;
         return(
          <tr>
            <td>{age}</td>
            <td>{name}</td>
            <td>{salary}</td>
            <td>{bonus}</td>
            <td>{status.toString()}</td>
          </tr>
         )
       })
      }
    </table>
  );
}

export default App;

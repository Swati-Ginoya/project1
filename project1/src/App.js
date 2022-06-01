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

  let fData = data.filter((d,i) => d.status === true);
  console.log(fData);

  let ans = data.reduce((acc,d,i) => acc + d.salary + d.bonus ,0);
  console.log(ans);
  return (
    <table border="1" align="center" cellPadding="10" cellSpacing="0">
      <tr>
        <td>Name</td>
        <td>Age</td>
        <td>Salary</td>
        <td>Bonus</td>
        <td>Status</td>
        <td>Total Salary</td>
      </tr>
      {
       fData.map((d,i) => {

        let {name, age, salary, bonus, status} = d;
        
         return(
          <tr key={i}>
            <td>{age}</td>
            <td>{name}</td>
            <td>{salary}</td>
            <td>{bonus}</td>
            <td>{status.toString()}</td>
            <td>{d.salary + d.bonus}</td>
          </tr>
         )
       })
      }

{
       fData.map((d,i) => {

        let {name, age, salary, bonus, status} = d;
        
         return(
          <tr key={i}>
            {i === 0 ? <td colSpan={6} align="center">Employee's total Salary = {ans}</td> :null}
          </tr>
         )
       })
      }
    </table>
  );
}

export default App;

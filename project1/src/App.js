import React, { useEffect, useState } from 'react';
import Home from './container/Home';
import Loading from './container/Loading';
import './App.css';

const HomeWithLoading = Loading(Home)
function App(props) {

  const [loading ,setLoading] = useState (false);

  const [data , setData] = useState ([]);

  let orgdata = [
    {id :194, name : 'Nenu - Min Yoongi'},
    {id : 46, name : 'Swati - Jeon Jungkook'}
  ];

  useEffect (() => {
    setLoading(true);
    setTimeout(() => {setLoading(false) ; setData(orgdata)} ,3000)
  },[])
  return (
    <div>
        <HomeWithLoading
          isLoading={loading}
          data={data}
        />
    </div>
  );
}

export default App;
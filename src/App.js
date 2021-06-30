
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
       axios.get('http://localhost/sidebar/api/device.php')
       .then(function(res){
        setPosts(res.data);
       })
    },[])

  return (
    <div className="App">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">

<ul className="divide-y divide-indigo-600">
      {posts.map((val) => (
        <li key={val.nome} className="py-4 flex">
          <img className="h-20 w-20 rounded-full" src={val.foto} alt="" />
          <div className="ml-3">
          <p className="text-sm text-5xl text-indigo-600">{val.nome}</p>
            <p className="text-sm text-3xl text-gray-400">{val.idade}</p>
            <p className="text-sm text-2xl text-gray-500">{val.tamanho}</p>
          </div>
        </li>
      ))}
    </ul>
    </div>
    </div>
  );
    }

export default App;

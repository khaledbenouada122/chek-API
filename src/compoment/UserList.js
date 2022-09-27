
import React,{useEffect, useState} from "react";
import CardList from './CardList'
import axios from "axios";


const UserList = () => {
    const [list,setlist]=useState([])
    const [error,setEroor]= useState(null);
    useEffect(()=> {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((res)=> {
                setlist(res.data)

            })
            .catch((err)=> setEroor(err))
    },[])
  return (
    <div>
        {console.log(list)}
        {list.map((data)=>{
            <CardList list={data}/>
        }
        )}
    </div>
  )
}

export default UserList
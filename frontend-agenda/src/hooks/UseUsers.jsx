import {useEffect, useState} from "react";
import getAllUsers from './../services/users/getAll.js'

function UseUsers(){
    const [users, setUsers] = useState([])
    const [loading, setLoading]= useState(false)

    useEffect(() => {
      setLoading(true)
      getAllUsers()
      .then(data => {
        console.log(data)
        const {users} =data
        console.log(users)
        if (users) {
            setUsers(users)
        }

      })
      .finally(()=>{
        setLoading(false)
      })   
    }, [])
    return {users, loading}
}


export default UseUsers

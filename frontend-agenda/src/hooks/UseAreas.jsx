import {useEffect, useState} from "react";
import getAllAreas from './../services/users/Area/getAll'

function UseUsers(){
    const [areas, setAreas] = useState([])
    const [loading, setLoading]= useState(false)

    useEffect(() => {
      setLoading(true)
      getAllAreas()
      .then(data => {
        const {areas} =data
        if (areas) {
            setAreas(areas)
        }

      })
      .finally(()=>{
        setLoading(false)
      })   
    }, [])
    return {areas, loading}
}


export default UseUsers
import API_UrL  from '../../constants/api'

export default function createUser(user){
    return fetch(API_UrL.USER_POST,{
        method: 'POST',
        headers:{
           'Content-Type': 'application/json' 
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
}
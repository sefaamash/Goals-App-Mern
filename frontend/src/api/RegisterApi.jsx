function RegisterApi(props) {
    return new Promise((resolve, reject) => {
          //this item object will come from Register page when user enter email and password 
        let item = {
            "name": props.name,
            "email": props.email,
            "password": props.password,
        }
        //Request settings
        let setting = {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }
        //Regsitering users to database with name,email,password
        fetch('http://localhost:8000/api/users', setting).then((res) =>res.json()).then((resp)=>{
            console.log("respReg",resp)
            resolve(resp);
        
        }).catch((err)=>reject(false))
           
    })}

export default RegisterApi;
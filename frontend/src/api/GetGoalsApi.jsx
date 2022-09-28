function GetGoalsApi() {

    let data = JSON.parse(localStorage.getItem("user-info"));
    console.log("tokenData", data)
    return new Promise((resolve, reject) => {

        //Request settings
        let setting = {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json',
                "Authorization": "Bearer " + data.token

            }
        }
        //Regsitering users to database with name,email,password
        fetch('http://localhost:8000/api/goals', setting).then((res) => res.json()).then((resp) => {
            console.log("respGoalData", resp)
            resolve(resp);

        }).catch((err) => reject(" Error"))
    }) //recieving props argument
}
export default GetGoalsApi;

function CreateGoalsApi(props) {

    let data = JSON.parse(localStorage.getItem("user-info"));
    console.log("tokenData", data)
    return new Promise((resolve, reject) => {
        let item = {
            "text": props.goals
        }
        //Request settings
        let setting = {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json',
                "Authorization": "Bearer " + data.token
            }
        }
        //Regsitering users to database with name,email,password
        fetch('http://localhost:8000/api/goals', setting).then((res) => res.json()).then((resp) => {
            console.log("respSetGoal", resp)
            resolve(resp);

        }).catch((err) => reject("Goals is not submitted"))

    }) //recieving props argument
}
export default CreateGoalsApi;

import Axios from "axios"

const URL = "https://classroom-app-group19.herokuapp.com";
const SECURITY_KEY = process.env.REACT_APP_SECURITY_KEY;
const InfoById = async (userId) => {
    if(userId){
        let _userinfo = null;
        await Axios.get(`${URL}/users/get/by/${userId}?key=${SECURITY_KEY}`)
        .then(user => _userinfo = user.data)
        return _userinfo
    }else return undefined
}

export default InfoById
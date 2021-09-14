import axios from "axios";

export const userLogin = async (data) => {
    try {
        let user = await axios.post('/api/v1/youtube/userLogin', data)
        return user
    } catch (error) {
        return error
    }
}

export const userSignUP = async (data) => {
    try {
        let user = await axios.post(`/api/v1/youtube/userSignUp`, data)
        // console.log("try");
        return user
    } catch (err) {
        return err
        // console.log('catch');
    }
}


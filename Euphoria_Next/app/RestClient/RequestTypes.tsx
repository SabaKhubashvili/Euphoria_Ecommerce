import axios from "axios"


class RestClient{
    static GetRequest = (getUrl:string,accessToken?:string)=>{
        return axios.get(getUrl,{
            headers:{
                "token":accessToken
            }
        })
    }
    static postRequest = (getUrl:string,Data:any)=>{
        return axios.post(getUrl,Data,{
            headers:{
                'Content-Type':"application/json",
                'Accept':"application/json",
            }
        })
    }
    static putRequest = (getUrl:string,Data:any,token?:any)=>{
        return axios.put(getUrl,Data,{
            headers:{
                'Content-Type':"application/json",
                'Accept':"application/json",
                'token':token
            }
        })
    }
}

export default RestClient
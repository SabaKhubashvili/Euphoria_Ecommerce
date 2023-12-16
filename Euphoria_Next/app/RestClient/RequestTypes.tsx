import axios from "axios";


class RestClient {
  static GetRequest = (getUrl: string, accessToken?: string) => {
    return axios.get(getUrl,{
      headers: {
        "token": accessToken,
      },
    });
  };

  static postRequest = (postUrl: string, data: any, token?: string) => {
    return axios.post(postUrl, data, {
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
        'token': token,
      },
    });
  };

  static putRequest = (putUrl: string, data: any, token?: any) => {
    return axios.put(putUrl, data, {
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
        'token': token,
      },
    });
  };

  static deleteRequest = (deleteUrl: string, token?: any) => {
    return axios.delete(deleteUrl, {
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
        'token': token,
      },
    });
  };
}

export default RestClient;

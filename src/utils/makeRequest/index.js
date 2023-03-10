import axios from "axios";

export default async function makeRequest(
  endPoint,
  dynamicConfig = {},
  navigate
) {
  try {
    const token = localStorage.getItem("token");
    console.log('tokennnnnnnnnnnnnnn', token)
    const params = {
      url: endPoint.url,
      method: endPoint.method,
      ...dynamicConfig,
      headers: {
        Authorization: `Bearer ${token}`
      },
    };

    console.log(params);

    const { data } = await axios(params);
    console.log('ss', data)

    return data;
  } catch (e) {
    if (navigate) {
      const status = e.response?.status;
      if (status) navigate(`error/:${status}`);
      else navigate("error");
    }
  }
}

import  axios  from 'axios'

const key = '5d025fc3c1827369a4a3e0795cd85043';
const api = axios.create({ baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${key}`});


export const getApi = async () => {
    api.get()
    .then(function (response) {
        console.log(response.data);
        const data = response.data
        return data;
    });
};

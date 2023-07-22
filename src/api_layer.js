import axios from 'axios';

export const getData = async (route) => {
    try {
        return axios({
        method: 'get',
        url: route,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTc1MjhjNjdlOWNhZmJiMWJjMzk2ZjUxYjE3ZmIwZiIsInN1YiI6IjY0NzFmY2IxZGQ3MzFiMDExNzhmMmM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0epWf0vNKEK1xjkaZUj_OKt2MFSySz-omr8o2Z9Hoso'
        }
        }).then((response) => {
        return response.data;
    });
    } catch (error) {
        console.log(error);
    }
};
import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '8b00b1fbbbmshe5e73fe3b8e0be7p1a20cbjsnd578e23dfb1e',
        },
    });

    return data;
}
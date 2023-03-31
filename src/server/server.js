import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
const API_KAY = '34240568-4ab3b9fb16ac478b5bceb4d14';

export const getDataServer = (q, page = 1) => {
    return axios
        .get('', {
            params: {
                q,
                page,
                per_page: 12,
                key: API_KAY,
                image_type: "photo",
                orientation: "horizontal"
            },
        })
        .then((res) => res.data);
}
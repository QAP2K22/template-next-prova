import axios from "axios";

const apiDeputados = axios.create({
    baseURL: "" /*endpoint*/,
    headers: { /* configs */
        Authorization: ``
    }
})

export default apiDeputados
import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        
        key:"6dc7dc629ac94e2495e81fe887490d87"
    }
})
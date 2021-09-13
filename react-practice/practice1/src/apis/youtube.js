import axios from 'axios';

const  KEY = 'AIzaSyBgKi_Jnbv3DfIAaVP6nbqw5zjvLOyj-Dw';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults:5,
        key:KEY

    }
});

 
 
import axios from 'axios';

const KEY ='AIzaSyAU0u667Fxq0PmSwaNXya-g5k_GM3_E7Zo';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        type:'video',
        maxResults:5,
        key : KEY
    }

});
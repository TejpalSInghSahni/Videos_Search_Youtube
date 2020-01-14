import axios from 'axios';
const KEY = 'AIzaSyD0DZ5FEj8BeYHaGLRL2uhQFUAi57uBYag';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part : 'snippet',
        maxResult: 5,
        type: 'video',
        key: `${KEY}`
    }    
});
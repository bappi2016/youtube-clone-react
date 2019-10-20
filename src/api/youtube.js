import axios from 'axios';

const KEY = 'AIzaSyANjmzO2kMNEWUcZyNK7vycL3K5fDrqo_s';

// create an object baseParams with properties that was given by api- which will pass along with the request.

export const baseParams = {
    part:'snippet',
    maxResults : 5,
    key :KEY
};



export default axios.create({

    baseURL : 'https://www.googleapis.com/youtube/v3',
    
});
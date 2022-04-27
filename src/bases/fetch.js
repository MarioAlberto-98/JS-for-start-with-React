//import { heroes } from "./data/heroes";
const apiKey='cAmbxqddO0z9yaHgiHYxpX32ky5W4aIe';
const peticion= fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then(resp =>resp.json())
.then(({data})=>{
    console.log(data);
    const {url} =data.images.original;
    const img=url;
    document.body.append(img);
})
.catch(console.warn);
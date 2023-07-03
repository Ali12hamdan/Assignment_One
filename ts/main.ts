import {formatDistanceToNow} from 'date-fns';

interface req {
    safe_title: string;
    img: string;
    year: string;
    alt: string;
    month: string;
    day: string;
  }

async function handleJoke() : Promise<string> {
    const params : URLSearchParams = new URLSearchParams();
    params.append("email", "al.hamdan@innopolis.university");
    const data : string = await (await (fetch("https://fwd.innopolis.app/api/hw2?" + params.toString()))).json();
    return data
  }
  async function idhandler() : Promise<req> {
    const params : URLSearchParams = new URLSearchParams();
    const firstFetch : Promise<string>=handleJoke()
    params.append("id", await firstFetch);
    const data : req = await (await (fetch("https://fwd.innopolis.university/api/comic?" + params.toString()))).json();
    return data;}
  
async function escap() : Promise <void>{
    
 console .log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");
  const data : req = await idhandler();
  const titlepar : HTMLDivElement = document.getElementById("titlebar") as HTMLDivElement;
  const datepar : HTMLDivElement = document.getElementById("datebar") as HTMLDivElement;
  const image : HTMLImageElement=document.getElementById("jokeimage") as HTMLImageElement;
  console.log(data);
    // console.log(data.title);
    const dat= new Date(data.month.toString()+"/"+data.day.toString()+"/"+data.year.toString());
    console.log(dat.toLocaleDateString('en-us'));
    datepar.innerText="Date: "+dat.toLocaleDateString('en-us')+"NOW"+formatDistanceToNow(dat);
    titlepar.innerText="Title: "+data.safe_title;
    image.src=data.img;

}
console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");
escap();
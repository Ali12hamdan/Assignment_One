

    async function handleJoke() {
    const params = new URLSearchParams();
    params.append("email", "al.hamdan@innopolis.university");
    const data = await (await (fetch("https://fwd.innopolis.app/api/hw2?" + params.toString()))).json();
    return data
  }
  async function idhandler() {
    const params = new URLSearchParams();
    const firstFetch=handleJoke()
    params.append("id", await firstFetch);
    const data = await (await (fetch("https://fwd.innopolis.university/api/comic?" + params.toString()))).json();
    return data;}
  
  
  const data= await idhandler();
  const titlepar = document.getElementById("titlebar");
  const datepar = document.getElementById("datebar");
  const image=document.getElementById("jokeimage");
  console.log(data);
    console.log(data.title);
    const dat= new Date(data.month.toString()+"/"+data.day.toString()+"/"+data.year.toString());
    console.log(dat.toLocaleDateString('en-us'));
    datebar.innerText="Date: "+dat.toLocaleDateString('en-us');
    titlebar.innerText="Title: "+data.safe_title;
    image.src=data.img;
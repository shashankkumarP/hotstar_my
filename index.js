
let id;
async function search(){
    try{
        
        const query = document.querySelector("#query").value;
        let url =  `https://api.themoviedb.org/3/search/multi?api_key=f88e766d583bfa8d17734b1ce551f8a8&language=en-US&query=${query}&page=1&include_adult=false`;
        let res = await fetch(url)
        let data = await res.json();
        let movie = data.results;
        console.log(data);
        append(movie);
        
        

    } catch(err){
        console.log("err",err);
    }
}

let a= "https://www.themoviedb.org/t/p/original";
function append(data){
    document.querySelector("#append").innerHTML=null;
    data.forEach(function(el,index){

        let p1 = document.createElement("p");
        if(el.name!=undefined) p1.innerText=el.name;
        else if(el.original_name!=undefined) p1.innerText = el.original_name;
        else if(el.title!=undefined) p1.innerText = el.title;
        else if(el.original_title!=undefined) p1.innerText= el.original_title;
       
        p1.addEventListener("click",function(){
            dis(el,index);
        });
        document.querySelector("#append").append(p1);
        
    })
}

function dis(el,index)
{
    console.log(el);
    
    document.querySelector("#details").innerHTML=null;
    let im = document.createElement("img");
    im.src = `${a}${el.poster_path}`;
    im.style.height='400px'
    im.style.width="400px"
    let p1 = document.createElement("p");
    if(el.first_air_date==undefined) p1.innerText = `Released-date : ${el.release_date}`;
    else p1.innerText = `Released-date : ${el.first_air_date}`;
    let p2 = document.createElement("p");
    p2.innerText =`imdb-rating : ${el.vote_average}`;
    document.querySelector("#details").append(im,p1,p2);
}
function debounce(search,delay)
{
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        search();
    },delay);
}


function trend(){
    window.location.href="trending.html";
}
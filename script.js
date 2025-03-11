const generate=document.querySelector(".btn");
const titleMeme =document.querySelector('h2')
const memeUrl =document.querySelector('.meme_img')
const memeAuther =document.querySelector('p span')


function meme(){
  fetch('https://meme-api.com/gimme/wholesomememes').then((res)=>res.json()).then((data)=>{
    const {author , title, url}= data
    titleMeme.innerText=title;
    memeUrl.src=url;
    console.log(memeUrl.url)
    memeAuther.innerText=author;
    // console.log(author , title, url)
  }
  )
}

generate.addEventListener('click',()=>{
  meme()
  })
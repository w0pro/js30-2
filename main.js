const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b999f510ed5e490b9548a9c28124ed92';

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
   showData(data);
  };
  getData();


  const main = document.querySelector('#main');


  function showData(data) {
    data.results.map(el => {
      let div = document.createElement('div');
      main.appendChild(div);
      div.classList.add('movie');

      const img = document.createElement('img');
      img.classList.add('image');
      img.src = `https://image.tmdb.org/t/p/w1280` + el.poster_path
      img.alt = el.title
      div.appendChild(img); 

      const divTwo = document.createElement('div');
      divTwo.classList.add('movie-info');
      div.appendChild(divTwo);

      const hOne = document.createElement('h3');
      hOne.textContent = el.title
      divTwo.appendChild(hOne);

      const span = document.createElement('span');
      span.textContent = el.vote_average
      divTwo.appendChild(span);

      const divThree = document.createElement('div');
      divThree.classList.add('overview');
      div.appendChild(divThree);

      const hTwo = document.createElement('h3');
      hTwo.textContent = el.overview
      divThree.appendChild(hTwo);
    }
    )
  };
 
  












const url = 'https://api.themoviedb.org/3/';
const key = '&api_key=b999f510ed5e490b9548a9c28124ed92'
const button = document.getElementById('search').focus();
  
async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  showData(data);
  addColor (data)
  
  };
  getData(url + 'discover/movie?sort_by=popularity.desc' + key);


  const main = document.querySelector('#main');


  function showData(data) {
    if(data.results == 0){
      alert('Ничего не найдено!\nПовторите запрос!');
      return;
    };
    main.innerHTML = '';
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
      span.textContent = el.vote_average;
      const color = addColor(el.vote_average);
      span.classList.add(color);
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

 
const val = document.getElementById('search');


val.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
      event.preventDefault();
      getData(`${url}search/movie?query=${val.value}${key}`);
    }
  });

function addColor (voteAverage) {
  
  if(voteAverage > 7) {
    return 'green'
  }

  if(voteAverage > 5) {
    return'orange';
  }

  return'red';
};
  


  











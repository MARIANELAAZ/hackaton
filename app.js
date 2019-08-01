// fetch

const searchMovies = document.getElementById('mostrar-busqueda');

const printMovies = (data) => {
    let arrayBusqueda = [];
    data.forEach((ele) => {
        let listData = ` 
     <div class="card col-xs-10 col-sm-10 col-md-3 color-medium">
     <img src="${ele.Poster}" class="card-img-top" alt="...">
     <div class=" card-body">
       <p class="card-font">${ele.Title.toUpperCase()}</p>
       <p class="card-font">${ele.Year}</p>
       
     </div>
   </div> `;
        arrayBusqueda.push(listData);
    });
    searchMovies.innerHTML = arrayBusqueda.join(' ');
};

const search = document.getElementById('busqueda');
search.addEventListener('search', () => {
    const valueSearch = search.value;
    mostrarBusqueda(`https://www.omdbapi.com/?s=${encodeURI(valueSearch)}&apikey=35ae330e`);
});


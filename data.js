const mostrarBusqueda = (url) => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
       printMovies(data.Search)
      })
      .catch(error => {
        return error;
      });
  };
  
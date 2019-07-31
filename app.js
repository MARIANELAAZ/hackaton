const getPosts = () => {
    return fetch(`http://www.omdbapi.com/?s=toy&apikey=49ffe070`)
    .then(res => res.json())
    .then(posts => console.log(posts))
}
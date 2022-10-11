const key = '965a710f1f30685f1dc1fa92cd38e099';

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`, 
    requestHorror:`https://api.themoviedb.org/3/search/movie?/popular?api_key=${key}$language=en-US&page=1`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=2`,
   
}
export default requests
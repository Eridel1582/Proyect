const getMoviepopFromTmbd = async () => {
    try {
        const data = fetch('https://api.themoviedb.org/3/movie/popular?api_key=8ba0a72118cfc8ce8f6ca8f68b878ecd&language=es-Es', {
            'language':'es-Es',
            'page': 1
        })
        const result =  (await data).json()
        return result

    } catch (error) {
        console.log(error);
    }


}
export default getMoviepopFromTmbd;
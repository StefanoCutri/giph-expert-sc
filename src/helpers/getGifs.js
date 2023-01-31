
export const getGiphs = async (category) =>{

    const api_key = `e4iFBrNcjomq58JR4QZFT3MZFN46EsKL`
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=${api_key}&limit=10`

    const resp = await fetch(url)
    const {data} = await resp.json()

    const gifs = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    

    return gifs;
}
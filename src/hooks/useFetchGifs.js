import { useEffect, useState } from 'react'
import { getGiphs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        
            getGiphs(category)
                .then(imgs => {
                    setState({
                        data: imgs,
                        loading: false
                    })
                })
    
    }, [category])


    return state;

}

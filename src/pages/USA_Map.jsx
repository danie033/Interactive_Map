import UsMap from '../assets/us.svg?react'
import { useEffect, useState } from 'react'
import {stateNumbers,getColor} from './aux_functions'

console.log(getColor(15,1,20))
console.log('More printing')
console.log(Object.values(stateNumbers))


function USA_Map(){

    const [selectedState,setState]=useState(null)

    const handleClick = (e) =>{
        if (e.target.tagName === 'path'){
            setState(e.target.id)
        }
    }

    useEffect(() => {

        const paths=document.querySelectorAll('.us-map path')

        paths.forEach((path=>{
            path.classList.remove('selected')

            if(path.id===selectedState){
                path.classList.add('selected')
            }
        }))
        
    }, [selectedState])
    


    return(
        <div>
            <h2>
               Us Medicare Information
            </h2>
            <UsMap
            onClick={handleClick}
            className='us-map'
            style={{width:'600px'}}
            />

            {selectedState && (
            <div>
                <h2>State: {selectedState}</h2>
                <p>The predicted Medicare pay is: $84.52</p>
            </div>
            )}

        </div>
    )
}

export default USA_Map

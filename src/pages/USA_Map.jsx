import UsMap from '../assets/us.svg?react'
import {useEffect, useState } from 'react'
import {stateNumbers,getColor} from './aux_functions'
import { useNavigate } from 'react-router-dom'

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

    useEffect(()=>{


        const paths=document.querySelectorAll('.us-map path')

        const values=Object.values(stateNumbers)
        const min=Math.min(...values)
        const max=Math.max(...values)

        paths.forEach(path =>{
            const value=stateNumbers[path.id]

            if(value!=undefined){
                if(path.id===selectedState){
                    path.style.fill='rgb(39, 156, 74)'
                    path.style.stroke='rgb(2, 5, 3)'
                    path.style.strokeWidth='4'
                }else{
                    path.style.strokeWidth='1'
                    path.style.fill=getColor(value,min,max)
                }
            }else{
                path.style.fill='#eee'
            }
        })

    },[selectedState])


    const navigate=useNavigate()

    const goHome = ()=>{
        navigate("/")
    }


    return(
        <div>
            <button className='back-button' onClick={goHome}>
            ← Back Home
            </button>
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
                <p>{`The predicted Medicare pay is: $${stateNumbers[selectedState]}`}</p>
            </div>
            )}

        </div>
    )
}

export default USA_Map

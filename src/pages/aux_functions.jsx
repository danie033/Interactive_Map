const us_states = [

    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

const numbers=[]

for (let i=1;i<51;i++){
    numbers.push(i)
}

const stateNumbers={}

us_states.forEach((state,index)=>{
    stateNumbers[state]=numbers[index]
})

//-----------------------

const getColor=(value,min,max)=>{
    const ratio=(value-min)/(max-min)
    const r=Math.round(255*ratio)
    const g=0
    const b=Math.round(255*(1-ratio))

    return  `rgb(${r},${g},${b})`

}

export {stateNumbers,getColor};
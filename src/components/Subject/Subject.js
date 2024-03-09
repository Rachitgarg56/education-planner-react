
const Subject = ( { subject, hours, id, onIncrementHours, onDecrementHours } ) => {
   
    return (
        <li className="listItem flex items-center w-full border border-solid border-white p-2 rounded-sm">

            <p className="text-center text-xl" style={{flex:4}}>{subject + " - " + hours + " hours"}</p>

            <div className="listItem-buttons flex justify-between" style={{flex:1}}>
                <button className="increment bg-green-500 w-6 h-6 text-white flex items-center justify-center" onClick={()=>onIncrementHours(id)}>+</button> 
                <button className="decrement bg-red-500 w-6 h-6 text-white flex items-center justify-center" onClick={()=>onDecrementHours(id)}>-</button> 
            </div>

        </li>
    )

}

export default Subject;

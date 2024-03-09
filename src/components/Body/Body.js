import { useState } from 'react';
import Subject from '../Subject/Subject.js';


const Body = () => {

    const [list, setList] = useState([]);

    const [subject, setSubject] = useState("");
    const [hours, setHours] = useState("");

    const addListItem = (e) => {
        e.preventDefault();
        
        const obj = {subject: subject, hours: hours, id: list.length + 1};
        
        localStorage.setItem('list', JSON.stringify([...list, obj]));

        setList([...list, obj]);
        setSubject("");
        setHours("");
    }


    const increaseHours = (id) => {

        const prevList = [...list];

        for (let idx = 0; idx < prevList.length; idx++) {
            const obj = prevList[idx];
            if (obj.id === id) {
                obj.hours = parseInt(obj.hours) + 1;
                localStorage.setItem('list', JSON.stringify([...prevList]));
                setList(prevList);
                break;
            }
        }

    }
    

    const decreaseHours = (id) => {

        const prevList = [...list];

        for (let idx = 0; idx < prevList.length; idx++) {
            const obj = prevList[idx];
            if (obj.id === id) {
                obj.hours = parseInt(obj.hours) > 0 ? parseInt(obj.hours) - 1 : 0;
                localStorage.setItem('list', JSON.stringify([...prevList]));
                setList(prevList);
                break;
            }
        }

    }


    window.onload = () => {
        const prevList = JSON.parse(localStorage.getItem("list"));
        return prevList.length ? setList(prevList) : [];
    }


    return (
        <section className="body border w-full pd-8 md:p-16 flex justify-center h-screen bg-cyan-50">
            <div className="container rounded-lg max-w-screen-sm bg-violet-200 flex flex-col gap-4 p-5">
                <h1 className="text-center text-3xl">Education Planner</h1>

                <form className='flex flex-col gap-5 md:flex-row'>

                    <input type="text" name="subject" value={subject} onChange={(e)=>{setSubject(e.target.value)}} placeholder="Subject" className="rounded-md py-1 px-2" style={{flex:2}}></input>

                    <input type="number" name="hours" value={hours} onChange={(e)=>{setHours(e.target.value)}} placeholder="Hours" className="rounded-md py-1 px-2" style={{flex:2}}></input>

                    <button type="submit" className="add-btn bg-blue-500 text-white rounded-md py-1 px-2" onClick={addListItem} style={{flex:1}}>Add</button>

                </form>

                <ul className="subjects-list flex flex-col gap-4">

                    {
                        list.map((obj) => {
                            return <Subject subject={obj.subject} hours={obj.hours} id={obj.id} onIncrementHours={increaseHours}       onDecrementHours={decreaseHours} key={obj.id} />;
                        })
                    }

                </ul>

            </div>
        </section>
    )
}

export default Body;

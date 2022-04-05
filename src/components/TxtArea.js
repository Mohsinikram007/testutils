import React, {useState} from 'react'


export default function TxtArea() {
    const [txt, settxt] = useState("");

    const changetxtUp = ()=>
    {
        console.log("upper case clicked");
        let newtxt = txt.toUpperCase()
        settxt(newtxt)

    }
    const changeHandler= (e)=>
    {
        console.log("change'");
        settxt(e.target.value)
    }

    return (
        <>
        
            <div className="form-group">
                <label htmlFor="txt">Enter your text here</label>
                <textarea className="form-control" id="txt" value={txt} onChange={changeHandler} rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={changetxtUp}>UPPER CASE</button>
            </>
    );

}

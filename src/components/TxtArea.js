import React, {useState} from 'react'


export default function TxtArea() {
    const [txt, settxt] = useState("");

    const changetxtUp = ()=>
    {
        console.log("upper case clicked");
        let newtxt = txt.toUpperCase()
        settxt(newtxt)

    }
    const RemoveSpace = ()=>
    {
        console.log("upper case clicked");
        let newtxt = txt.split(" ")
        let newtext = newtxt.join('')

        settxt(newtext)

    }
    const clear = ()=>
    {
        console.log("upper case clicked");
        
        settxt('')

    }
    const changetxtlow = ()=>
    {
        console.log("upper case clicked");
        let newtxt = txt.toLowerCase()
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
                <textarea className="form-control" id="txt" value={txt} onChange={changeHandler} rows="10"></textarea>
            </div>
            <button className='btn btn-primary' onClick={changetxtUp}>Upper Case</button>
            <button className='btn btn-primary mx-3' onClick={changetxtlow}>Lower Case</button>
            <button className='btn btn-primary mx-3' onClick={RemoveSpace}>Remove Space</button>
            <button className='btn btn-primary mx-3' onClick={clear}>Clear</button>

            <div className='my-4'>
            <h2 >
                Text Summary
            </h2>
            <p>
                {txt.length} Chracters and  {txt.split(" ").length || txt.split('\n').length} Words
            </p>
            </div>
            </>
    );

}

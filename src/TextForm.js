import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handelUpCliked = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showalert(': Converted to uppercase','success')

        
    } 
    const handeloCliked = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showalert(': Converted to lowercase','success')
        
    } 
    const handelClearCliked = ()=>{
        setText('')
    } 
    const handelOnChange = (event)=>{
        setText(event.target.value)
        
    }
    const removeExtraSpace = ()=>{
        let newtext = text.trim().split(/ +/).join(' ')
        setText(newtext)
    }
    const handelCopy = ()=>{
        var text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showalert('Copied to Clipboard!','success')
    }
    

    return (
        <>
    <div>
        <h1 className={`text-${props.mode === 'light'?'dark':'light'}`}>{props.heading}</h1>
        <div>
            <textarea id='myBox' style={{ backgroundColor: props.mode === 'light' ? '#f8f9fa' : '#343a40', color: props.mode === 'light' ? 'black' : 'white' }} name="textarea" value={text} onChange={handelOnChange} className='form-control' rows={8}></textarea>
        </div>
        <button className="btn btn-primary mt-3 mx-1" onClick={handelUpCliked}>Convert to Uppercase</button>
        <button className="btn btn-primary mt-3 mx-1" onClick={handeloCliked}>Convert to lowercase</button>
        <button className="btn btn-primary mt-3 mx-1" onClick={handelClearCliked}>Clear All</button>
        <button className="btn btn-primary mt-3 mx-1" onClick={removeExtraSpace}>Remove Space</button>
        <button className="btn btn-primary mt-3 mx-1" onClick={handelCopy}>Copy Text</button>


        <div className={`container text-${props.mode === 'light'?'dark':'light'} `} >
                    <h1>Your Text Summery</h1>
        <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} Word  {text.length} Characters</p>
        <p>{0.005  *text.split('').length}Read Time</p>
        <h1>Preview</h1>
        {text.length>0 ? text:'Enter text in textarea'}
        </div>
    </div>
    </>
    )
}
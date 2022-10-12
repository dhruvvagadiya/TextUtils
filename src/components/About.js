import React from 'react'

export default function About(props) {

  return (
    <div className="container" style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white' ,color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h2 className='my-3'>About Us</h2>

        <div className="accordion" style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white',color : props.mode === 'dark' ? 'white' : 'black'}} id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white',color : props.mode === 'dark' ? 'white' : 'black'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white',color : props.mode === 'dark' ? 'white' : 'black'}}>
                    TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count,
                    character count, covert to UPPERCASE, and many more. 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}}>
                    TextUtils is a completely free character counter tool that provides instant character count and word count statistics
                    for a given text. TextUtils reports the number of words and characters. Thus it is suitable for wtiting text with
                    word/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, etc. It suits to count 
                    character in Facebook, blog, books, exccel document, pdf document, essays, etc. 
                </div>
                </div>
            </div>
            </div>

    </div>
  )
}

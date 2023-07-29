import React, { useState } from "react";
import {marked} from 'marked';



function covertToMarkedHtml(text) {
    const converted = marked.parse(text)
    return {__html: converted}
}

const starValue = ` 
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine === \'\`\`\`\' && lastLine === \'\`\`\`\' ) {
    return multiLineCode;
  }
}
\`\`\`
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

        
1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
`;

export default function App() {
    const [value, setValue] = useState(starValue)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const markedText = covertToMarkedHtml(value);
    console.log(markedText)

    return (
        <div id='big-wrap'>

            <div class='div-container' id='editor-div' style={{border: '1px solid black'}}>

                <div id='edit-border'style={{borderBottom: '1px solid black'}}>
                    <h3 class='titles'>EDITOR </h3>
                </div>
                <textarea id='editor' value={value} onChange = {handleChange}></textarea>
            </div>

            <div class='div-container' id='preview-div' style={{border: '1px solid black'}}>

                <div id='prev-border' style={{borderBottom: '1px solid black'}}>
                    <h3 class='titles' >PREVIEWER</h3>
                </div>
                <div id='preview' dangerouslySetInnerHTML={markedText}></div>
            </div>
        </div>
    )
}

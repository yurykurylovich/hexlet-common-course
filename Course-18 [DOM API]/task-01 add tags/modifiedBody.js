/* bodyPs.js
Your HTML page has this body:
<body>
    I do not fear computers.
    Computer Science is no more about computers than astronomy is about telescopes.
    The computer was born to solve problems that did not exist before.

<body>
Your goal is to get rid of the unnecessary spaces and wrap every other string to the <p> tag.
*/

const body = document.body.innerHTML;
const bodyArr = body.trim().split("\n");
const strings = bodyArr.map(str => `<p>${str.trim()}<p>`).join('')
document.body.innerHTML = strings;

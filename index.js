/* Notes

1.Action()
2.Change the value in Preview updateInPreview()
3.Change the value in Code code()
4.Copy the Code From Clipboard Copy()   

*/


// 1. Id from Customizing

const lineHeightEl = document.getElementById("line-height");
const letterSpacingEl = document.getElementById("letter-spacing");
const wordSpacingEl = document.getElementById("word-spacing");
const textAlign = document.getElementById("text-align")
const textDecoration = document.getElementById("text-decoration")
const textTransform = document.getElementById("text-transform")

/// button 
const btn = document.getElementsByClassName("btn")[0];
const copyCode = document.getElementById("code-box")


//5. Span El inside the Code 
const codeToCopyHeight = document.getElementById("code-to-copy-height");
const codeToCopySpacing = document.getElementById("code-to-copy-spacing");
const codeToCopyWordSpacing = document.getElementById("code-to-copy-word-spacing")
const codeToCopyTextAlign = document.getElementById("code-to-copy-text-align");
const codeToCopyTextDecoration = document.getElementById("code-to-copy-text-decoration");
const codeToCopyTextTransform = document.getElementById("code-to-copy-text-transform");
// text Box Lorem Line El
const Text = document.getElementsByClassName("text")[0];


// 3. Update 
function updateText() {
    let moveValueHeight = lineHeightEl.value;
    let moveValueSpacing = letterSpacingEl.value;
    let moveValueWordSpacing = wordSpacingEl.value;
    let moveValueTextAlign = textAlign.value;
    let moveValueTextDecoration = textDecoration.value;
    let moveValueTextTransform = textTransform.value;

    updateInPreview(moveValueHeight, moveValueSpacing, moveValueWordSpacing, moveValueTextAlign, moveValueTextDecoration, moveValueTextTransform);
}
// 4.
function updateInPreview(ValueHeight, ValueSpacing, ValueWordSpacing, ValueTextAlign, ValueTextDecoration, ValueTextTransform) {
    Text.style.cssText = `line-height: ${ValueHeight}px;
    letter-spacing: ${ValueSpacing}px;
    word-spacing:${ValueWordSpacing}px;
    text-align:${ValueTextAlign};
    text-decoration:${ValueTextDecoration};
    text-transform:${ValueTextTransform};
    `;

    code(ValueHeight, ValueSpacing, ValueWordSpacing, ValueTextAlign, ValueTextDecoration, ValueTextTransform)
}

function code(ValueHeightForCode, ValueSpacingForCode, ValueWordSpacingForCode, ValueTextAlignForCode, ValueTextDecorationForCode, ValueTextTransformForCode) {
    codeToCopyHeight.innerHTML = ValueHeightForCode + "px;";
    codeToCopySpacing.innerHTML = ValueSpacingForCode + "px;";
    codeToCopyWordSpacing.innerHTML = ValueWordSpacingForCode + "px;";
    codeToCopyTextAlign.innerHTML = ValueTextAlignForCode + ";";
    codeToCopyTextDecoration.innerHTML = ValueTextDecorationForCode + ";";
    codeToCopyTextTransform.innerHTML = ValueTextTransformForCode + ";";
}



//2. Action() Mouse Add Event Listner

lineHeightEl.addEventListener("mousemove", updateText)
letterSpacingEl.addEventListener("mousemove", updateText)
wordSpacingEl.addEventListener("mousemove", updateText)
textAlign.addEventListener("change", updateText);
textDecoration.addEventListener("change", updateText);
textTransform.addEventListener("change", updateText);

// Last Step Copy to ClipBoard

btn.addEventListener("click", () => {
    navigator.clipboard.writeText(copyCode.innerText);
    btn.innerText = "Copied!";
    btn.style.cssText = "background-color: rgb(48, 165, 48);color:white;"
})































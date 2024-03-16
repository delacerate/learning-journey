const link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://www.github.com");
link.innerText = "Thenet ninja website";

// so the querySelector() method is used to select the first element that matches a specified CSS selector(s) in the document.
// The getAttribute() method returns the value of the attribute with the specified name, of an element.
// The setAttribute() method adds the specified attribute to an element, and gives it the specified value.
// The innerText property sets or returns the text content of the specified node, and all its descendants.
//
//The innerText property of the Element interface represents the "rendered" text content of a node and its descendants. As a getter,
// it approximates the text the user would get if they highlighted the contents of the element with the cursor and
// then copied it to the clipboard.
// As a setter, it removes the contents of the element and replaces it with the specified string.
// The innerText property of the Element interface gets or sets the text between the start tag and the end tag of the element.
// The innerText property is similar to the textContent property, but there are some differences:
// innerText is aware of styling and won't return the text of "hidden" elements, whereas textContent will.
// As innerText is aware of styling, it will trigger a reflow, whereas textContent will not.
// Moreover, since innerText takes CSS styles into account, reading the value of innerText triggers a reflow to ensure up-to-date computed styles. (Reflows can be computationally expensive, and thus should be avoided when possible.)
// Generally, you should use textContent when working with node values, and innerText when working with user-facing content.
// The innerText property is part of the W3C DOM specification, and is supported in all major browsers. However, innerText is not supported in Firefox, and is not supported in Internet Explorer for table elements.
// The innerText property is not part of the HTML standard, although it is supported by most browsers.
// The innerText property is read-only for the style object. However, it is read-write for all other objects that can contain text, such as the p, h1, and div elements.
// The innerText property is not supported in Internet Explorer 8 and earlier.
// the set attribute syntax is setAttribute(name, value)
const mssg = document.querySelector("p");
console.log(mssg.getAttribute("class"));
mssg.setAttribute("class", "success");
mssg.setAttribute("style", "color: green;");
console.log(mssg.getAttribute("class"));

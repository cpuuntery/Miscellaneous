#Replace anything inside the dom jquery is required
$("body").html($("body").html().replace(/\?a=view/g,''));

#Replace anything inside the dom
document.body.innerHTML = document.body.innerHTML.replace(/\?a=view/g,'')

#Remove div with a particular text in it jquery is required
$("div:contains('Example')").remove()

#select element by attribute
#Don't put a space between the selector and the attribute
#You can use other Attribute selectors not just the (=)
#For more info just google "Attribute selectors"
#document.querySelectorAll("") is the same as $("") in jQuery 
document.querySelectorAll("element.class_OR_element#id[myAttribute='Value']");

#Extract text from specific html element [change (x.textContent) to suit your needs]
let elm = document.createElement('textarea');
elm.setAttribute("id", "output");
document.querySelector('body').prepend(elm)
document.querySelectorAll("div.box span a").forEach(x => document.querySelector("#output").textContent += x.textContent + '\n')


#Extract text from specific html element with regex if it matches specific text and [change (x.textContent) to suit your needs]
let elm = document.createElement('textarea');
elm.setAttribute("id", "output");
document.querySelector('body').prepend(elm)
function get_nodes_containing_text(selector, text) {
const elements = [...document.querySelectorAll(selector)];
return elements.filter((element) =>element.childNodes[0] &&element.childNodes[0].nodeValue &&RegExp(text, "i","g","u").test(element.childNodes[0].nodeValue.trim()));}
get_nodes_containing_text('a', '~').forEach(x => document.querySelector("#output").textContent += x.textContent + '\n')


#Extract text from specific html element if it matches specific text and it is case sensitive and  jquery is required
let elm = document.createElement('textarea');
elm.setAttribute("id", "output");
document.querySelector('body').prepend(elm)
var data = $('#output').text();
$(".filename:contains('S05')").each(function() {data += this.textContent + '\n'});
$('#output').text( data );


#set cookie value 
document.cookie = "cookiename=cookievalue"

#set localstorage value
localStorage["key"] = "value"

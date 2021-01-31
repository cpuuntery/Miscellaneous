#Replace anything inside the dom jquery is required
$("body").html($("body").html().replace(/\?a=view/g,''));

#Replace anything inside the dom
document.body.innerHTML = document.body.innerHTML.replace(/\?a=view/g,'')

# remove div with a particular text in it jquery is required
$("div:contains('Example')").remove()

# select element by attribute
document.querySelectorAll("[myAttribute='aValue']");

#Extract text from specific html element
let elm = document.createElement('textarea');
elm.setAttribute("id", "output");
document.querySelector('body').prepend(elm)
var data = $('#output').text();
document.querySelectorAll("span.filesize").forEach(function(x) {data += x.textContent + '\n'});
$('#output').text( data );


#Extract text from specific html element with regex if it matches specific text and jquery is required
let elm = document.createElement('textarea');
elm.setAttribute("id", "output");
document.querySelector('body').prepend(elm)
function get_nodes_containing_text(selector, text) {
const elements = [...document.querySelectorAll(selector)];
return elements.filter((element) =>element.childNodes[0] &&element.childNodes[0].nodeValue &&RegExp(text, "i","g","u").test(element.childNodes[0].nodeValue.trim()));}
var data = $('#output').text();
get_nodes_containing_text('#filenamelabel', 's05').forEach(function(x) {data += x.textContent + '\n'});
$('#output').text( data );


#Extract text from specific html element if it matches specific text and it is case sensitive and  jquery is required
let elm = document.createElement('textarea');
elm.setAttribute("id", "output");
document.querySelector('body').prepend(elm)
var data = $('#output').text();
$(".filename:contains('S05')").each(function() {data += this.textContent + '\n'});
$('#output').text( data );
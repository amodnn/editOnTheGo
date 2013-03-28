/**
* UI.js: JavaScript relating to UI goes here.
*
*/

/**
 *Renders the Document list on the Web page.
 *  @param  row
 *	        It is a tuple containing the atrributes Document Name, Time Stamp and Document Contents.
 */
var text1;
function renderDocNames(row) {
  var listElement = document.getElementById("docList");
  var li = document.createElement("li");
  var a = document.createElement("a");
  var aDel = document.createElement("a");
  a.setAttribute('href',"#");
  a.addEventListener("click", function () {
  	 //checkCurrentDoc();
   	 fn= row.filename;
   	 tmp= row.timeStamp;
   	 text1=row.text;
	//alert("This is going to be displayed:\n"+row.text);
   	document.getElementById('contentE').innerHTML = row.text;
	document.getElementById('saveButton').disabled = false;
	currentDoc();
  }, false);
  
  aDel.addEventListener("click", function () {
    deleteDoc(row.timeStamp);
  }, false);

  aDel.textContent = " [Delete]";
  a.textContent = row.filename;
  li.appendChild(a);
  li.appendChild(aDel);
  listElement.appendChild(li);
};
function currentDoc() {
if(fn==null)
document.getElementById("currDoc").innerHTML = "Current Document : Unsaved";
else
document.getElementById("currDoc").innerHTML = "Current Document : "+fn;
};

var htmlFileName;
window.onload = function() {
 htmlFileName=fn;
 navigator.mozSetMessageHandler('activity', function(activity) {
   var name=activity.source.name;
   if(name != "pick")
   return;
   else
   {
   var blob=readBlob();
   if (!text) {
     a.postError("NoTextFile");
     return;
   }
   activity.postResult({ type: "text/html", blob: blob });
   }
 });
}

function readBlob()
{
	var blob;
	var file = htmlFileName;
	var reader = new FileReader();
	
	reader.onloadend = function(evt) {
    if (evt.target.readyState == FileReader.DONE) { // DONE == 2
		blob=evt.target.result;
	}
    };
	reader.readAsBinaryString(blob);
	return blob;
}  
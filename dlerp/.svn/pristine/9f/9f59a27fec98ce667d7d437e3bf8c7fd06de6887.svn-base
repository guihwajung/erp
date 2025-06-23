<%@ page contentType="text/html;charset=utf-8" %>
<!DOCTYPE html>
<html>
<head>
<style>
html,body {width:100%; height:100%; margin:0;}
.pdfobject-container { height: 100%; border: 0; }
</style>
</head>
<script type="text/javascript" src="/pdfviewer/pdfobject.min.js"></script>
<script type="text/javascript">
function b64toBlob (b64Data, contentType, sliceSize) {
  if (sliceSize == null) sliceSize = 512;
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {type: contentType});
  return blob;
}
</script>
<body>
<div id="pdfViewer"></div>
<script>
let b64Data = "${filedata}";
const blob = b64toBlob(b64Data, 'application/pdf');
const blobUrl = URL.createObjectURL(blob);
var options = {
	pdfOpenParams: {
		navpanes: 0,
		toolbar: 0,
		statusbar: 0,
		view: "FitV",
		page: 1
	},
	forcePDFJS: true,
	PDFJS_URL: "/pdfviewer/pdfjs/web/viewer.html"
};
PDFObject.embed(blobUrl, "#pdfViewer", options);
</script>
</body>
</html>

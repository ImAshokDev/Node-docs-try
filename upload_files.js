// Gonna use formidable module to upload files

var http = require('http');
var formida = require('formidable');
var fs = require('fs');

http
  .createServer(function(req, res) {
    if (req.url == '/fileupload') {
      var form = new formida.IncomingForm();
      form.parse(req, function(err, fields, files) {
        var oldPath = files.filetoupload.path;
        var newPath = '/home/chaalpritam/Desktop/' + files.filetoupload.name;
        fs.rename(oldPath, newPath, function(err) {
          if (err) throw err;
          res.write('File Uploaded and moved to mentioned path!');
          res.end();
        });
        // res.write('File Uploaded');
        // res.end();
      });
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }
  })
  .listen(8080);

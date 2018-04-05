// $function (); {
//           alert("Thank You For Subscribing!");
//          }

//function that gets file list
function getFiles() {
    return $.ajax('/api/file')
      .then(res => {
        console.log("Results from getFiles()", res);
        return res;
      })
      .fail(err => {
        console.log("Error in getFiles()", err);
        throw err;
      });
  }  
  
  //function refreshes list
  function refreshFileList() {
    const template = $('#list-template').html();
    const compiledTemplate = Handlebars.compile(template);
  
    getFiles()
      .then(files => {
        const data = {files: files};
        const html = compiledTemplate(data);
        $('#list-container').html(html);
      })
  }
var fs = require('fs');


fs.unlink('file_system/newFileUsingAppendFile.txt', function (error) {
    if (error) throw error;
    console.log('Append File deleted');
});

fs.unlink('file_system/newFileUsingOpen.txt', function (error) {
    if (error) throw error;
    console.log('Open File deleted');
});

fs.unlink('file_system/newFileUsingWriteFile.txt', function (error) {
    if (error) throw error;
    console.log('Write File deleted');
});


//delete file sync 
fs.unlinkSync('file_system/newFileUsingWriteFile.txt');
console.log('File Deleted Successfully');
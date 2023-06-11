var fs = require('fs');

fs.rename('file_system/newFileUsingAppendFile.txt', 'file_system/newFileUsingAppendFileRenamed.txt', function (error) {
    if (error) throw error;
    console.log('Append File renamed');
});


//renameSync
fs.renameSync('file_system/newFileUsingAppendFile.txt', 'file_system/newFileUsingAppendFileRenamed.txt');
console.log('File renamed successfully');
var fs = require('fs');


fs.appendFile('file_system/newFileUsingAppendFile.txt',
    'Hellow from append file\n',
    function (error) {
        if (error) throw error;
        console.log('Saved');
    });
//appendFileSync
fs.appendFileSync('input.txt', 'Hellow from append file sync\n');
console.log("File Appended Successfully");

fs.open('file_system/newFileUsingOpen.txt', 'w', function (error, file) {
    if (error) throw error;
    console.log(file);
    console.log('Saved');
});

fs.writeFile('file_system/newFileUsingWriteFile.txt', 'Hello from write file', function (error) {
    if (error) throw error;
    console.log('Saved');
});

fs.writeFileSync('file_system/newFileUsingWriteFileSync.txt', 'Hello from write file sync');
console.log("File Written Successfully");
const fs = require('fs'); // core module - no need to install
// const { writeFile, readFile } = require('fs');
const path = require('path'); // core module

fs.writeFile('content.txt', '***This is my content!', (err) => {
    if (err) throw err;

    console.log('The file was created!');
});

const filePath = path.join(process.cwd(), 'content.txt');
// process.cwd() returns current working directory

fs.readFile(filePath, (error, content) => {
    if (error) throw error;

    console.log(content.toString());
});

// fs.unlink(filePath, (err) => {
//     if (err) throw err;

//     console.log('File deleted');
// });

fs.mkdir(`${process.cwd()}/myFolder/secondFolder`, {
    recursive: true
}, (err) => {
    if (err) throw err;

    console.log('Folder created successfully');
});

// fs.mkdir(`${process.cwd()}/myAltFolder`, (err) => {
//     if (err) throw err;

//     console.log('Another folder created successfully');
// })

// fs.rmdir(`${process.cwd()}/myFolder/`, { recursive: true }, (err) => {
//     if (err) throw err;

//     console.log('Folder deleted successfully');
// });

fs.rename(`${process.cwd()}/myFolder/secondFolder`, `${process.cwd()}/myFolder/newDirectory`, (err) => {
    if (err) throw err;

    console.log('Directory renamed');
});

// fs.rename(`${process.cwd()}/content.txt`, `${process.cwd()}/myNewFile.txt`, (err) => {
//     if (err) throw err;

//     console.log('File renamed');
// });

fs.readdir(process.cwd(), (err, files) => {
    if (err) throw err;

    console.log(files);
});

fs.appendFile(filePath, '\nNew data to be added.', (err) => {
    if (err) throw err;

    console.log('New content added');
});

fs.readFile(filePath, (error, content) => {
    if (error) throw error;

    console.log(content.toString());
});
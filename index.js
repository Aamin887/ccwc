const fs = require('fs');
const fsPromise = require('fs').promises;
const path = require('path');

// get file size
const fileSize = async (dest) => {
    if (fs.existsSync(path.join(__dirname, dest))) {
        try {
            const fileStats = await fsPromise.stat(dest)
            return (`${fileStats.size}`);
        } catch (err) {
            return (err)
        }
    } else {
        return ('file does not exist, check path provided');
    }
}

// get number of linw in file
const linesInFile = async (dest) => {
    if (fs.existsSync(path.join(__dirname, dest))) {
        try {
            const fileContent = await fsPromise.readFile(path.join(__dirname, dest), 'utf-8');
            const x = fileContent.match(/\n/g);
            return (x.length)
        } catch (err) {
            return (err)
        }
    } else {
        return ('file does not exist, check path provided');
    }
}

// get the word count
const wordCount = async (dest) => {
    if (fs.existsSync(path.join(__dirname, dest))) {
        try {
            const fileContent = await fsPromise.readFile(path.join(__dirname, dest), 'utf-8')
            const x = fileContent.match(/\S+/g);
            return (x.length)
        } catch (err) {
            return (err)
        }
    } else {
        return ('file does not exist, check path provided');
    }
}

const characterCount = async (dest) => {
    if (fs.existsSync(path.join(__dirname, dest))) {
        try {
            const fileContent = await fsPromise.readFile(path.join(__dirname, dest), 'utf-8')
            const x = fileContent.match(/[\u0000-\uffff]/g);
            return (x.length)
        } catch (err) {
            return (err)
        }
    } else {
        return ('file does not exist, check path provided');
    }
}


module.exports = {
    fileSize,
    linesInFile,
    wordCount,
    characterCount
}


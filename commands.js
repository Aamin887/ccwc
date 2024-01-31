#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();

const { fileSize, linesInFile, wordCount, characterCount } = require('./index');

program
    .name('word-counter')
    .description('CLI app for checking the stats of a file')
    .version('0.1.0')
    .alias('v')
    .configureHelp('ds')


program
    .argument('[destination]', 'file destination')
    .option('-c, --checkBytes', 'Enter a file path to get size in bytes')
    .option('-l, --numberOfLines', 'Enter a file to get the number of lines in file')
    .option('-w, --numberOfWords', 'Enter a file path to the number of words in file')
    .option('-m, --numberOfCharacters', 'Enter a file path to the number of characters in file')
    .action(async (dest, options) => {
        if (options.checkBytes) {
            console.log(await fileSize(dest), dest)
        } else if (options.numberOfLines) {
            console.log(await linesInFile(dest), dest)
        } else if (options.numberOfWords) {
            console.log(await wordCount(dest), dest)
        } else if (options.numberOfCharacters) {
            console.log(await characterCount(dest), dest)
        } else {
            console.log('add')
            console.log(`${await fileSize(dest)} ${await linesInFile(dest)} ${await wordCount(dest)} ${dest}`)
        }
    })

program.parse(process.argv)
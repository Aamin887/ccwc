const convertBytes = function (bytes) {
    const size = ['Bytes', 'KB', 'MB', 'MB', 'GB', 'TB'];

    if (bytes == 0) {
        return 'n/a';
    }

    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));

    if (i == 0) {
        return bytes + ' ' + size[i]
    }

    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + size[i];
}
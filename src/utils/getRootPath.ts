const getRootPath = (rcfile: any) => {
    if (rcfile) {
        const tmp = rcfile.filePath.split("/");
        tmp.pop();
        return tmp.join("/")
    } else {
        return "";
    }
}

export default getRootPath;

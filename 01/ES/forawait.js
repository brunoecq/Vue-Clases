/// for await 
const sleep = s => {
    return new Promise(resolve => {
        setTimeout(resolve, s * 1000);
    });
}

const somethingAsync = async t => {
    await sleep(t);
    return t;
}

(async () => {
    const items = [1, 2, 3, 4];
    const now = Date.now();
    for await (const res of items.map(e => somethingAsync(e))) {
        console.log(res);
    }
    console.log("time: ", (Date.now() - now) / 1000);
})();
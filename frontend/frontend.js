const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev, dir: __dirname })
const handle = nextApp.getRequestHandler();

app.use(require('express').static(path.join(__dirname, 'public')));

global.nextPrepared = false;

(async () => {
    console.log('Building Next App')
    await nextApp.prepare()
    global.nextPrepared = true;
    console.log('Next App Built')
    app.use((req, res)=>{handle(req, res)})
})()

setTimeout(()=>{
    if(!nextPrepared) {
        console.log('Next App Build Failed')
        process.exit(1)
    }
}, 30000);
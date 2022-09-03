const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev, dir: __dirname })
const handle = nextApp.getRequestHandler();

app.use(require('express').static(path.join(__dirname, 'public')));

global.nextPrepared = false;

(async () => {
    console.log('Building Next.js app...')
    await nextApp.prepare()
    global.nextPrepared = true;
    console.log('Next.js app built!')
    app.use((req, res, next)=>{
        if (!req.path.startsWith('/api'))
            return handle(req, res)
        next()
    })
})()

setTimeout(()=>{
    if(!nextPrepared) {
        console.log('Next.js build failed!')
        process.exit(1)
    }
}, 30000);
import express from 'express'
import passport from 'passport'
import session from 'express-session'
const app = express()
const PORT = 3000

//Session Setup
app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize())
app.use(passport.session())
app.get('/', (req,res) => {

})





app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
})
import express from "express";
// import passport from "passport";
import session from "express-session";
import passport from "./auth/google.js";
const app = express();
const PORT = 3000;

//Session Setup
app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.get("/", (req, res) => {
  res.send('<a href="/auth/google">Login with Google</a>');
});
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "/profile",
  })
);
function authCheck(req, res, next) {
  if (req.isAuthenticated()) {
    return next;
  }
  res, redirect("/");
}
app.get("/profile", authCheck, (req, res) => {
  console.log(req.user);
  res.send(`<h1>Welcome ${req.user.displayName}</h1>
        <img src="${req.user.photos[0].value}" />
        <a href="/logout">Logout</a>
        `);
});
app.get("/logout", (req, res) => {
  req.logOut(() => {
    res.redirect("/");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

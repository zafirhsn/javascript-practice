// ! OAuth and Passport.js

// I've used OAuth before obviously with Spotify's web API. OAuth stands for Open Authorization, and it allows us to log in a user using a third party user identitiy. On the screen, this means those buttons that say "Sign in with Google" or "Login with Facebook". These are buttons that start up the OAuth process

// In the case of using Spotify's web API. When the user clicked Log in to Spotify on my site, it would redirect them to Spotify's severs. There, they could see what access my app was requesting from their profile. If the user agrees to me give that access, spotify will redirect them to a url I specify (maybe a home page). Then, I can take the information I get back from Spotify in order to create a user profile out of this new user. 
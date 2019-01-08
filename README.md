# spotify-recommendation-system
This system allows users to check what song they have playing on their spotify account,
get a set of recommendations for that song and add those recommendations to a new playlist
on their account. It is built using NodeJS and the Spotify API
There are two parts to it, the auth-server, and the client. 

## How To Use

### 1)  Start Auth Server
- Navigate to the auth-server directory `cd auth-server`
- Install the dependencies `npm install`
- Paste in the client id, and client secret you copied in step 1
  near the top of the app.js file
- Run the Server `node authorization_code/app.js`

### 2)  Start Client
- Navigate to the auth-server directory `cd client`
- Install the dependencies `npm install`
- Run the Server `npm start`

### 3)  Use the App
-Play any song on a Spotify app
- Visit http://localhost:3000
- Click 'Log in with Spotify' and log in
- Click the 'Check Now Playing' Button
- Your currently playing song's name and album art should appear
- Click the 'Get Recommendations' button
- A set of recommendations should appear
- Click the 'Create Playlist' button
- A popup window should tell you that your playlist has been created
  and will be available to view and play in any spotify app


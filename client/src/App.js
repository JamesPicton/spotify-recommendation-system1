import React, { Component } from 'react';
import './App.css';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor(){
    super();
    // Initialise variables
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' },
      userID: { id: '' },
      playlistID: { id: '' },
      playlistLoading: false,
      recommendations: {
          id1: '', name1: '', albumArt1: '', id2: '', name2: '', albumArt2: '', id3: '', name3: '', albumArt3: '',
          id4: '', name4: '', albumArt4: '', id5: '', name5: '', albumArt5: '', id6: '', name6: '', albumArt6: '',
          id7: '', name7: '', albumArt7: '', id8: '', name8: '', albumArt8: '', id9: '', name9: '', albumArt9: '',
          id10: '', name10: '', albumArt10: '', id11: '', name11: '', albumArt11: '', id12: '', name12: '', albumArt12: '',
          id13: '', name13: '', albumArt13: '', id14: '', name14: '', albumArt14: '', id15: '', name15: '', albumArt15: '',
          id16: '', name16: '', albumArt16: '', id17: '', name17: '', albumArt17: '', id18: '', name18: '', albumArt18: '',
          id19: '', name19: '', albumArt19: '', id20: '', name20: '', albumArt20: ''},

    }
  }

  // Extracts the hash value of the access token from the URL
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  // Calls the API to find out if there is a song playing on the user's account.
  // If there is not the user will be informed, if there is the song's details are
  // added to the state variable. Also gets the users profile for use with playlists
  getNowPlaying(){
      spotifyApi.getMyCurrentPlaybackState()
          .then((response) => {
              if (response.is_playing !== true) {
                  window.alert("There is no song playing at the moment")
                  console.log(response)
              } else {
                  this.setState({
                      nowPlaying: {
                          name: response.item.name,
                          albumArt: response.item.album.images[0].url,
                          id: response.item.id
                      }
                  });
              }
         })
    spotifyApi.getMe()
        .then((response) => {
            this.setState({
                userID: {
                    id: response.id
                }
            });
        })
  }

  // Checks to see if there is a song playing for which recommendations can be retrieved
  getMyRecommendations() {
      if (this.state.nowPlaying.name === 'Not Checked') {
          window.alert("There is either no song playing or the song that is playing has not been checked yet")
      } else if (this.state.nowPlaying.name !== "Not Checked") {
          this.confirmedGetMyRecommendations()
      }
  }

  // Calls the API to retrieve 20 song recommendations for the currently playing song
  // and saves their ids, names and album art images in state variables, logs an error if one occurs
  confirmedGetMyRecommendations() {
      spotifyApi.getRecommendations({ "seed_tracks": this.state.nowPlaying.id })
          .then((response) => {
              this.setState({
                  recommendations: {
                      id1: response.tracks["0"].id,
                      name1: response.tracks["0"].name,
                      albumArt1: response.tracks["0"].album.images[0].url,
                      id2: response.tracks["1"].id,
                      name2: response.tracks["1"].name,
                      albumArt2: response.tracks["1"].album.images[0].url,
                      id3: response.tracks["2"].id,
                      name3: response.tracks["2"].name,
                      albumArt3: response.tracks["2"].album.images[0].url,
                      id4: response.tracks["3"].id,
                      name4: response.tracks["3"].name,
                      albumArt4: response.tracks["3"].album.images[0].url,
                      id5: response.tracks["4"].id,
                      name5: response.tracks["4"].name,
                      albumArt5: response.tracks["4"].album.images[0].url,
                      id6: response.tracks["5"].id,
                      name6: response.tracks["5"].name,
                      albumArt6: response.tracks["5"].album.images[0].url,
                      id7: response.tracks["6"].id,
                      name7: response.tracks["6"].name,
                      albumArt7: response.tracks["6"].album.images[0].url,
                      id8: response.tracks["7"].id,
                      name8: response.tracks["7"].name,
                      albumArt8: response.tracks["7"].album.images[0].url,
                      id9: response.tracks["8"].id,
                      name9: response.tracks["8"].name,
                      albumArt9: response.tracks["8"].album.images[0].url,
                      id10: response.tracks["9"].id,
                      name10: response.tracks["9"].name,
                      albumArt10: response.tracks["9"].album.images[0].url,
                      id11: response.tracks["10"].id,
                      name11: response.tracks["10"].name,
                      albumArt11: response.tracks["10"].album.images[0].url,
                      id12: response.tracks["11"].id,
                      name12: response.tracks["11"].name,
                      albumArt12: response.tracks["11"].album.images[0].url,
                      id13: response.tracks["12"].id,
                      name13: response.tracks["12"].name,
                      albumArt13: response.tracks["12"].album.images[0].url,
                      id14: response.tracks["13"].id,
                      name14: response.tracks["13"].name,
                      albumArt14: response.tracks["13"].album.images[0].url,
                      id15: response.tracks["14"].id,
                      name15: response.tracks["14"].name,
                      albumArt15: response.tracks["14"].album.images[0].url,
                      id16: response.tracks["15"].id,
                      name16: response.tracks["15"].name,
                      albumArt16: response.tracks["15"].album.images[0].url,
                      id17: response.tracks["16"].id,
                      name17: response.tracks["16"].name,
                      albumArt17: response.tracks["16"].album.images[0].url,
                      id18: response.tracks["17"].id,
                      name18: response.tracks["17"].name,
                      albumArt18: response.tracks["17"].album.images[0].url,
                      id19: response.tracks["18"].id,
                      name19: response.tracks["18"].name,
                      albumArt19: response.tracks["18"].album.images[0].url,
                      id20: response.tracks["19"].id,
                      name20: response.tracks["19"].name,
                      albumArt20: response.tracks["19"].album.images[0].url
                  }
              })
          }, function (err) {
              console.error(err);
          });
  }

  // Checks to see if the user has recommendations available to add to the playlist
  createPlaylist() {
      if (this.state.recommendations.id1 === '') {
          window.alert("There are currently no recommendations available")
      } else if (this.state.recommendations.id1 !== '') {
          this.confirmedCreatePlaylist()
      }
  }

  // Calls the API to create an empty playlist for the current user with the name of the song in the playlist's name
  // Calls the API again to add the tracks from the GetMyRecommendations call to the empty playlist and notifies the user
  confirmedCreatePlaylist() {
      spotifyApi.createPlaylist(this.state.userID.id, { name: this.state.nowPlaying.name + " Recommendations Playlist" })
          .then((response) => {
              this.setState({
                  playlistID: {
                      id: response.id
                  },
              })
          })
        .then((response) => {
            spotifyApi.addTracksToPlaylist(this.state.userID.id, this.state.playlistID.id,
                ['spotify:track:' + this.state.recommendations.id1, 'spotify:track:' + this.state.recommendations.id2,
                'spotify:track:' + this.state.recommendations.id3, 'spotify:track:' + this.state.recommendations.id4,
                'spotify:track:' + this.state.recommendations.id5, 'spotify:track:' + this.state.recommendations.id6,
                'spotify:track:' + this.state.recommendations.id7, 'spotify:track:' + this.state.recommendations.id8,
                'spotify:track:' + this.state.recommendations.id9, 'spotify:track:' + this.state.recommendations.id10,
                'spotify:track:' + this.state.recommendations.id11, 'spotify:track:' + this.state.recommendations.id12,
                'spotify:track:' + this.state.recommendations.id13, 'spotify:track:' + this.state.recommendations.id14,
                'spotify:track:' + this.state.recommendations.id15, 'spotify:track:' + this.state.recommendations.id16,
                'spotify:track:' + this.state.recommendations.id17, 'spotify:track:' + this.state.recommendations.id18,
                'spotify:track:' + this.state.recommendations.id19, 'spotify:track:' + this.state.recommendations.id20,
                ])
            window.alert("Playlist Created")
        })      
  }

  render() {
      return (
          < div className="App" >
              <div id="bdiv">
                <a href='http://localhost:8888'><button> Login to Spotify </button></a>
                {this.state.loggedIn &&
                    <button onClick={() => this.getNowPlaying()}>
                        Check Now Playing
                    </button>
                }
                <div>
                    <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }} />
                </div>
                <div>
                    Now Playing: {this.state.nowPlaying.name}
                </div>
                {this.state.loggedIn &&
                    <button onClick={() => this.getMyRecommendations(this.state.nowPlaying.id)}>
                        Get Recommendations
                </button>
                }
                <div>
                    {this.state.loggedIn &&
                        <button onClick={() => this.createPlaylist()}>
                            Create Recommendations Playlist
                    </button>
                    }
                </div>
                <div className='recommendationsContainer'>
                    <ul>
                        <li>
                            <div>
                                {this.state.recommendations.name1}
                            </div>
                            <div>
                                <img src={this.state.recommendations.albumArt1} style={{ height: 60 }} />
                            </div>
                        </li>
                        <li>
                            <div>
                                {this.state.recommendations.name2}
                            </div>
                            <div>
                                <img src={this.state.recommendations.albumArt2} style={{ height: 60 }} />
                            </div>
                        </li>
                        <li>
                            <div>
                                {this.state.recommendations.name3}
                            </div>
                            <div>
                                <img src={this.state.recommendations.albumArt3} style={{ height: 60 }} />
                            </div>
                        </li>
                        <li>
                            <div>
                                {this.state.recommendations.name4}
                            </div>
                            <div>
                                <img src={this.state.recommendations.albumArt4} style={{ height: 60 }} />
                            </div>
                        </li>
                        <li>
                            <div>
                                {this.state.recommendations.name5}
                            </div>
                            <div>
                                <img src={this.state.recommendations.albumArt5} style={{ height: 60 }} />
                            </div>
                        </li>
                        <li>
                            <div>
                                {this.state.recommendations.name6}
                            </div>
                            <div>
                                <img src={this.state.recommendations.albumArt6} style={{ height: 60 }} />
                            </div>
                        </li>
                        <li>
                            <div>
                                {this.state.recommendations.name7}
                            </div>
                            <div>
                                <img src={this.state.recommendations.albumArt7} style={{ height: 60 }} />
                            </div>
                        </li>
                        <li>
                            <div>
                                {this.state.recommendations.name8}
                            </div>
                            <div>
                                <img src={this.state.recommendations.albumArt8} style={{ height: 60 }} />
                            </div>
                        </li>
                        <li>
                            <div>
                                {this.state.recommendations.name9}
                            </div>
                            <div>
                                <img src={this.state.recommendations.albumArt9} style={{ height: 60 }} />
                            </div>
                        </li>
                        <li>
                            <div>
                                {this.state.recommendations.name10}
                            </div>
                            <div>
                                <img src={this.state.recommendations.albumArt10} style={{ height: 60 }} />
                            </div>
                        </li>
                        <li>
                            <div>
                                {this.state.recommendations.name11}
                            </div>
                            <div>
                                <img src={this.state.recommendations.albumArt11} style={{ height: 60 }} />
                            </div>
                        </li>
                        <li>
                            <div>
                                {this.state.recommendations.name12}
                            </div>
                            <div>
                                <img src={this.state.recommendations.albumArt12} style={{ height: 60 }} />
                            </div>
                        </li>
                        <li>
                            <div>
                                {this.state.recommendations.name13}
                            </div>
                            <div>
                                <img src={this.state.recommendations.albumArt13} style={{ height: 60 }} />
                            </div>
                        </li>
                        <li>
                            <div>
                                {this.state.recommendations.name14}
                            </div>
                            <div>
                                <img src={this.state.recommendations.albumArt14} style={{ height: 60 }} />
                            </div>
                        </li>
                        <li>
                            <div>
                                {this.state.recommendations.name15}
                            </div>
                            <div>
                                <img src={this.state.recommendations.albumArt15} style={{ height: 60 }} />
                            </div>
                        </li>
                        <li>
                            <div>
                                {this.state.recommendations.name16}
                            </div>
                            <div>
                                <img src={this.state.recommendations.albumArt16} style={{ height: 60 }} />
                            </div>
                        </li>
                        <li>
                            <div>
                                {this.state.recommendations.name17}
                            </div>
                            <div>
                                <img src={this.state.recommendations.albumArt17} style={{ height: 60 }} />
                            </div>
                        </li>
                        <li>
                            <div>
                                {this.state.recommendations.name18}
                            </div>
                            <div>
                                <img src={this.state.recommendations.albumArt18} style={{ height: 60 }} />
                            </div>
                        </li>
                        <li>
                            <div>
                                {this.state.recommendations.name19}
                            </div>
                            <div>
                                <img src={this.state.recommendations.albumArt19} style={{ height: 60 }} />
                            </div>
                        </li>
                        <li>
                            <div>
                                {this.state.recommendations.name20}
                            </div>              
                            <div>
                                <img src={this.state.recommendations.albumArt20} style={{ height: 60 }} />
                            </div>
                        </li>
                </ul>
                </div>
           </div> 
         </div>
      );
  }
}

export default App;

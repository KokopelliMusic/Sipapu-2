type Default = {
  '$id': string
  '$createdAt': number
  '$updatedAt': number
  '$collection': string
  '$read': string[]
  '$write': string[]
}

export type Playlist = Default & {
  name: string
}

export enum SongTypeEnum {
  Spotify = 'Spotify',
  YouTube = 'YouTube'
}

export type Song = Default & {
  title: string
  artists: string
  album: string
  length: number
  cover: string
  song_type: SongTypeEnum
  added_by: string
  play_count: number
  playlist_id: string
  platform_id: string
  user_name: string
}

export type Spotify = Default & {
  access_token: string
  refresh_token: string
  expires_at: number
}

export type Session = Default & {
  settings: string
  currently_playing: string
  playlist_id: string
  user_id: string
}

/**
 * All queueing algorithms the user can choose from
 * <pre></pre>
 * 'classic' is the default and classic Kokopelli experience, weighted random on user
 * First the algorithm chooses an random user, then it uses weighted-song to select from the user's queue
 * <pre></pre>
 * 'modern' assigns weights to each user (based on how many times they have played), and then uses weighted-song to select from the user's queue
 * basically the classic algo but better
 * <pre></pre>
 * 'random' is pure random (garbage)
 * <pre></pre>
 * 'weighted-song' assignes weights to each song in the queue (based on how many times it has been played), and selects a song with the lowest weight (random if multiple with same weight)
 */
 export type QueueAlgorithms = 'classic' | 'modern' | 'random' | 'weighted-song'

 /**
  * All the random events that can happen in the player
  * <pre></pre>
  * 'adtrad is the wheel of fortune, enabled by default
  * <pre></pre>
  * 'opus' plays the song Opus, disabled by default
  * <pre></pre>
  * 'random-word' selects a random word from the wordList, disabled by default
  * 
  */
 export type PlayerEvents = 'adtrad' | 'opus' | 'random-word'

/**
 * All settings that a session can have
 * @param allowSpotify If true, the session will allow Spotify songs to be added
 * @param allowYoutube If true, the session will allow Youtube songs to be added
 * @param youtubeOnlyAudio player hides the youtube video (ignored if allowYouTube is false)
 * @param allowEvents allow events to happen in the player
 * @param eventFrequency Every x songs the player will (maybe) do an event (ignored if allowEvents is false)
 * @param allowedEvents All events in this list the player can choose to do  (ignored if allowEvents is false)
 * @param randomWordList A list of words that the player can choose from when a random-word event happens
 * @param anyoneCanUsePlayerControls if false then only host can control playback (pause, play, etc)
 * @param anyoneCanAddToQueue if false then only host can add songs to the queue, ignoring the algorithm
 * @param anyoneCanSeeHistory if false then only host can see the history of events (eg when a song is played or skipped or a song is added)
 * @param anyoneCanSeeQueue if false then only host can see the queue of songs
 * @param anyoneCanSeePlaylist if false then only host can see the playlist
 * @param algorithmUsed The Algorithm that this session will use to select songs from the queue
 */
 export type SessionSettings = {
  allowSpotify: boolean,     
  allowYouTube: boolean,     
  youtubeOnlyAudio: boolean, 
  // other sources added later
  
  allowEvents: boolean,               
  eventFrequency: number,             
  allowedEvents: Array<PlayerEvents>,
  randomWordList: string[],

  anyoneCanUsePlayerControls: boolean,
  anyoneCanAddToQueue: boolean,       
  
  anyoneCanSeeHistory: boolean,
  anyoneCanSeeQueue: boolean,
  anyoneCanSeePlaylist: boolean,

  algorithmUsed: QueueAlgorithms,
}

export const DEFAULT_SETTINGS: SessionSettings = {
  allowSpotify: true,
  allowYouTube: true,
  youtubeOnlyAudio: false,
  
  allowEvents: true,
  eventFrequency: 10,
  allowedEvents: ['adtrad'],
  randomWordList: [],
  
  anyoneCanUsePlayerControls: true,
  anyoneCanAddToQueue: true,
  
  anyoneCanSeeHistory: true,
  anyoneCanSeeQueue: true,
  anyoneCanSeePlaylist: true,

  algorithmUsed: 'modern',
}

type Default = {
  '$id': string
  '$createdAt': number
  '$updatedAt': number
  '$collection': string
}

export type Playlist = Default & {
  name: string
  user_id: string
  users: string[]
  songs: string[]
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
}

export enum SongTypeEnum {
  Spotify,
  YouTube
}

export type Spotify = Default & {
  access_token: string
  refresh_token: string
  expired_at: string
}

export type Session = Default & {
  settings: string
  currently_playing: string
  playlist: string
  user_id: string
}
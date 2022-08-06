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
  playlist: string
  user_id: string
}
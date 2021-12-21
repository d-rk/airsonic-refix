export interface Config {
  serverUrl: string
  username: string
  password: string
}

const env = (window as any).env

export const config: Config = {
  serverUrl: env?.SERVER_URL || '',
  username: env?.USERNAME || '',
  password: env?.PASSWORD || '',
}

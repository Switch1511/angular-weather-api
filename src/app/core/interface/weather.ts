export interface Weather {
  name: string,
  main: {
    temp: number,
    temp_max: number,
    temp_min: number,
    humidity: number
  },
  sys: {
    country: string
  },
  wind: {
    spreed: number
  }

}

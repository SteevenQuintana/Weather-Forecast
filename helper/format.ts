export const getHour = (timestamp: number) => {
  const date = new Date(timestamp * 1000)
  let hours = date.getHours().toString()
  let minutes = date.getMinutes().toString()

  if (hours.length <= 1) hours = `0${hours}`
  if (minutes.length <= 1) minutes = `0${minutes}`

  return `${hours}:${minutes}`
}

export const roundedTemp = (temp: number, type: boolean) => {
  const newTemp = type ? temp : (temp * 9) / 5 + 32
  return `${Math.round(newTemp)}`
}

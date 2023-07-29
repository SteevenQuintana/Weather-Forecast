export const getData = async (url: string) => {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('City not found.')
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Something went wrong')
  }
}

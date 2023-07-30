import config from '@/config/config'
import { Option } from '@/interfaces/cities.interface'
import { getData } from '@/services/api'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'

const useSearch = () => {
  const [search, setSearch] = useState('')
  const [options, setOptions] = useState<Option[]>([])
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (value.startsWith(' ')) return
    setSearch(value)
    getCityInfo(value)
  }

  const getCityInfo = useCallback(async (value: string) => {
    if (value.trim() === '') return
    try {
      const data = await getData(`${config.CITY_API}&q=${value.trim()}`)
      const dataNeeded: Option[] = data.map((data: any) => ({
        name: data.name,
        lat: data.lat,
        lon: data.lon,
        country: data.country
      }))

      setOptions(dataNeeded)
      return dataNeeded[0]
    } catch (err) {
      setError((err as Error).message)
    }
  }, [])

  const getCityInfo2 = useCallback(async (value: string) => {
    if (value.trim() === '') return
    let lat, lon, country
    try {
      const data = await getData(`${config.CITY_API}&q=${value.trim()}`)
      lat = data[0].lat
      lon = data[0].lon
      country = data[0].country

      if (data) return { lat, lon, country }
    } catch (err) {
      setError((err as Error).message)
    }
  }, [])

  const onSelectOption = (option: Option) => {
    router.push(
      `/weather/${option.name}_${option.country}_${option.lat}_${option.lon}`
    )
    setOptions([])
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (options.length === 0) return
    setOptions([])
    setSearch('')
    setError(null)
    onSelectOption(options[0])

    router.push(`/weather/${options[0].name}`)
  }

  return {
    error,
    search,
    options,
    handleSearch,
    onSelectOption,
    handleSubmit,
    getCityInfo,
    getCityInfo2
  }
}
export default useSearch

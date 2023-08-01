import config from '@/config/config'
import { Option } from '@/interfaces/cities.interface'
import { getData } from '@/services/api'
import { useRouter } from 'next/navigation'
import { useCallback, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

const useSearch = () => {
  const [search, setSearch] = useState('')
  const [options, setOptions] = useState<Option[]>([])
  const [error, setError] = useState({ isError: false, message: '' })

  const router = useRouter()

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (value.startsWith(' ')) return
    setSearch(value)
  }

  const getCityInfo = useCallback(async (value: string) => {
    if (value.trim() === '') {
      setOptions([])
      return
    }
    try {
      const data = await getData(`${config.CITY_API}&q=${value.trim()}`)
      if (data.length === 0) throw new Error('No city found')

      const dataNeeded: Option[] = data.map((data: any) => ({
        name: data.name,
        lat: data.lat,
        lon: data.lon,
        country: data.country
      }))

      setOptions(dataNeeded)
      return dataNeeded[0]
    } catch (err) {
      setError({ isError: true, message: (err as Error).message })
      toast.error('The given city does not exist or is not a supported')
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
    if (options.length === 0) {
      toast.error('Please introduce a valid city')
      return
    }
    setOptions([])
    setSearch('')
    setError({ isError: false, message: '' })
    onSelectOption(options[0])

    router.push(`/weather/${options[0].name}`)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      getCityInfo(search)
    }, 300)
    return () => clearTimeout(timer)
  }, [search])

  return {
    error,
    search,
    options,
    handleSearch,
    onSelectOption,
    handleSubmit,
    getCityInfo
  }
}
export default useSearch

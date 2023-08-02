'use client'
import useSearch from '@/hooks/useSearch'
import Button from '../UI/Button'
import SearchInput from './SearchInput'
import SearchOptions from './SearchOptions'

const WeatherForm = () => {
  const { handleSearch, search, options, onSelectOption, handleSubmit } =
    useSearch()

  return (
    <div className='mb-5 flex flex-col items-center mx-2'>
      <h1 className='text-2xl font-bold mb-4'>Weather Forecast</h1>
      <form
        onSubmit={handleSubmit}
        className='flex  relative max-w-[360px] sm:gap-[1rem]'
        data-testid='weather-form'
      >
        <SearchInput search={search} handleSearch={handleSearch} />
        <Button type='submit'>Search</Button>
        <SearchOptions options={options} onSelectOption={onSelectOption} />
      </form>
    </div>
  )
}

export default WeatherForm

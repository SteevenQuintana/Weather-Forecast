'use client'
import useSearch from '@/hooks/useSearch'
import Button from '../UI/Button'

const Form = () => {
  const { handleSearch, search, options, onSelectOption, handleSubmit } =
    useSearch()

  return (
    <div className='mb-4 flex flex-col items-center'>
      <h1 className='text-2xl font-bold mb-4'>Weather Forecast</h1>
      <form
        onSubmit={handleSubmit}
        className='flex gap-0.4 relative max-w-[360px] sm:gap-[2rem]'
      >
        <input
          type='text'
          placeholder='Washington D.C, Ankara... '
          value={search}
          onChange={handleSearch}
        />
        <Button type='submit'>Search</Button>
        <ul className='absolute backdrop-blur-[5px] w-[245px] rounded-2xl top-[50px]'>
          {options.map((option, i) => (
            <li key={`${i}- ${option.lat} - ${option.lon}`}>
              <Button
                className='w-full text-left z-[101] px-[0.7rem] py-[0.4rem]'
                type='button'
                onClick={() => {
                  onSelectOption(option)
                }}
              >
                {option.name}, {option.country}
              </Button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  )
}

export default Form

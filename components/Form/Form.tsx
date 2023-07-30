'use client'
import classes from './Form.module.css'
import useSearch from '@/hooks/useSearch'

const Form = () => {
  const { handleSearch, search, options, onSelectOption, handleSubmit } =
    useSearch()

  return (
    <div className={classes.search}>
      <h1>Weather Forecast</h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <input
          type='text'
          placeholder='Washington D.C, Ankara... '
          value={search}
          onChange={handleSearch}
        />
        <button type='submit'>Search</button>
        <ul className={classes.list}>
          {options.map((option, i) => (
            <li key={`${i}- ${option.lat} - ${option.lon}`}>
              <button
                type='button'
                onClick={() => {
                  onSelectOption(option)
                }}
              >
                {option.name}, {option.country}
              </button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  )
}

export default Form

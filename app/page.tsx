'use client'
import Form from '@/components/Form'
import useWeather from '@/hooks/useWeather'

export default function Home() {
  const {
    search,
    options,
    // forecast,
    handleSearch,
    handleSubmit,
    onSelectOption
    // isLoading,
    // error
  } = useWeather()
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <section className='form-section'>
        <Form
          search={search}
          options={options}
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}
          onSelectOption={onSelectOption}
        />
      </section>

      {/* {forecast !== null && error === null && (
        <section className='forecast-section'>
          {isLoading ? (
            <h2 className='loading'>Loading...</h2>
          ) : (
            <Forecast forecast={forecast} />
          )}
        </section>
      )}
      {error && <p>{error}</p>} */}
    </main>
  )
}

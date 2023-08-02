interface SearchInputProps {
  search: string
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({ search, handleSearch }: SearchInputProps) => (
  <input
    type='text'
    placeholder='Washington D.C, Ankara...'
    value={search}
    onChange={handleSearch}
  />
)

export default SearchInput

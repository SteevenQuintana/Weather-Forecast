import SearchOptionItem from './SearchOptionItem'
import { Option } from '@/interfaces/cities.interface'

interface SearchOptionsProps {
  options: Option[]
  onSelectOption: (option: Option) => void
}

const SearchOptions = ({ options, onSelectOption }: SearchOptionsProps) => {
  return (
    <ul className='absolute backdrop-blur-[5px] w-[245px] rounded-2xl top-[50px] z-[101]'>
      {options.map((option, i) => (
        <SearchOptionItem
          key={`${i}- ${option.lat} - ${option.lon}`}
          option={option}
          onSelectOption={onSelectOption}
        />
      ))}
    </ul>
  )
}
export default SearchOptions

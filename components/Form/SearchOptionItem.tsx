import { Option } from '@/interfaces/cities.interface'
import Button from '../UI/Button'

interface SearchOptionItemProps {
  option: Option
  onSelectOption: (option: Option) => void
}

const SearchOptionItem = ({
  option,
  onSelectOption
}: SearchOptionItemProps) => {
  return (
    <li>
      <Button
        data-testid='search-option-button'
        className='w-full text-left px-[0.7rem] py-[0.4rem]'
        type='button'
        onClick={() => {
          onSelectOption(option)
        }}
      >
        {option.name}, {option.country}
      </Button>
    </li>
  )
}

export default SearchOptionItem

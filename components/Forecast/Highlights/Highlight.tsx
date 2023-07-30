import Image from 'next/image'

interface HighlightProps {
  title: string
  img: string
  description: string
  unit: string
}

const Highlight = ({ title, img, description, unit }: HighlightProps) => (
  <div className='w-full bg-[color:var(--background-body2)] flex flex-col justify-center text-center px-0 py-2 rounded-xl hover:bg-[color:var(--button-hover)] hover:text-[color:var(--text-main)] hover:cursor-pointer'>
    <h3>{title}</h3>
    <Image
      src={img}
      alt={description}
      height={150}
      width={150}
      className='m-auto'
    />
    <p>
      {description} <span>{unit}</span>
    </p>
  </div>
)

export default Highlight

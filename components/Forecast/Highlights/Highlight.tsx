import Image from 'next/image'
import classes from './Highlight.module.css'

interface HighlightProps {
  title: string
  img: string
  description: string
  unit: string
}

const Highlight = ({ title, img, description, unit }: HighlightProps) => (
  <div className={classes.highlight}>
    <h3>{title}</h3>
    <Image src={img} alt='' height={90} width={90} />
    <p>
      {description} <span>{unit}</span>
    </p>
  </div>
)

export default Highlight

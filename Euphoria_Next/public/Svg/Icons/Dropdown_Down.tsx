
interface Props{
  color?:'gray' | 'red'
}

export const Dropdown_Down = ({color}:Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
        <path d="M1 2L6 7L11 2" stroke={color === 'gray' ? '#8B909A' : color === 'red' ?  "#C21E56" : 'black'}/>
    </svg>
  )
}

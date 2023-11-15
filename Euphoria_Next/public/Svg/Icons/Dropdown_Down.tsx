
interface Props{
  isGray?:boolean
}

export const Dropdown_Down = ({isGray}:Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
        <path d="M1 2L6 7L11 2" stroke={isGray ? '#8B909A' : "black"}/>
    </svg>
  )
}

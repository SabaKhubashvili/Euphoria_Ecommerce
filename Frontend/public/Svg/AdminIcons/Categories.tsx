import React from 'react'

export const Categories = ({isActive}:{isActive:boolean}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="8.70833" cy="8.70833" r="5.95833" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="8.70833" cy="8.70833" r="5.95833" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="9.16663" y="9.16667" width="10.0833" height="10.0833" rx="2" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="9.16663" y="9.16667" width="10.0833" height="10.0833" rx="2" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

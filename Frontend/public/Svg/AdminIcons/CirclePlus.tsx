import React from 'react'

export const CirclePlus = ({isActive}:{isActive:boolean}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <circle cx="11" cy="11" r="8.25" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11" cy="11" r="8.25" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.25 11H13.75" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.25 11H13.75" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11 8.25V13.75" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11 8.25V13.75" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  )
}

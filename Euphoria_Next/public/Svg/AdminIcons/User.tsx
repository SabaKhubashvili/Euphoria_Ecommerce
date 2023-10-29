import React from 'react'

export const User = ({isActive}:{isActive:boolean}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <circle cx="11" cy="11" r="8.25" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11" cy="11" r="8.25" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <ellipse cx="11" cy="9.16666" rx="2.75" ry="2.75" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <ellipse cx="11" cy="9.16666" rx="2.75" ry="2.75" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.65393 17.2782C6.11982 15.7277 7.54754 14.6662 9.1666 14.6667H12.8333C14.4545 14.6661 15.8837 15.7303 16.3478 17.2837" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.65393 17.2782C6.11982 15.7277 7.54754 14.6662 9.1666 14.6667H12.8333C14.4545 14.6661 15.8837 15.7303 16.3478 17.2837" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  )
}

import React from 'react'

export const ShoppingCart = ({isActive}:{isActive:boolean}) => {
  return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none">
            <ellipse cx="5.49996" cy="17.4167" rx="1.83333" ry="1.83333" stroke={isActive ? "#23272E":  "#8B909A" }strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            <ellipse cx="5.49996" cy="17.4167" rx="1.83333" ry="1.83333" stroke={isActive ? "#23272E":  "#8B909A" }strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            <ellipse cx="15.5833" cy="17.4167" rx="1.83333" ry="1.83333" stroke={isActive ? "#23272E":  "#8B909A" }strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            <ellipse cx="15.5833" cy="17.4167" rx="1.83333" ry="1.83333" stroke={isActive ? "#23272E":  "#8B909A" }strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.5833 15.5833H5.49996V2.75H3.66663" stroke={isActive ? "#23272E":  "#8B909A" }strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.5833 15.5833H5.49996V2.75H3.66663" stroke={isActive ? "#23272E":  "#8B909A" }strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.5 4.58333L18.3333 5.5L17.4167 11.9167H5.5" stroke={isActive ? "#23272E":  "#8B909A" }strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.5 4.58333L18.3333 5.5L17.4167 11.9167H5.5" stroke={isActive ? "#23272E":  "#8B909A" }strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
  )
}

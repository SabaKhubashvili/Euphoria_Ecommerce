import React from 'react'

export const Coupon = ({isActive}:{isActive:boolean}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M13.75 4.58334V6.41667" stroke={isActive ? "#23272E":  "#8B909A" } stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.75 4.58334V6.41667" stroke={isActive ? "#23272E":  "#8B909A" } stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.75 10.0833V11.9167" stroke={isActive ? "#23272E":  "#8B909A" } stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.75 10.0833V11.9167" stroke={isActive ? "#23272E":  "#8B909A" } stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.75 15.5833V17.4167" stroke={isActive ? "#23272E":  "#8B909A" } stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.75 15.5833V17.4167" stroke={isActive ? "#23272E":  "#8B909A" } stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.58333 4.58334H17.4167C18.4292 4.58334 19.25 5.40415 19.25 6.41667V9.16667C18.2375 9.16667 17.4167 9.98748 17.4167 11C17.4167 12.0125 18.2375 12.8333 19.25 12.8333V15.5833C19.25 16.5959 18.4292 17.4167 17.4167 17.4167H4.58333C3.57081 17.4167 2.75 16.5959 2.75 15.5833V12.8333C3.76252 12.8333 4.58333 12.0125 4.58333 11C4.58333 9.98748 3.76252 9.16667 2.75 9.16667V6.41667C2.75 5.40415 3.57081 4.58334 4.58333 4.58334" stroke={isActive ? "#23272E":  "#8B909A" } stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.58333 4.58334H17.4167C18.4292 4.58334 19.25 5.40415 19.25 6.41667V9.16667C18.2375 9.16667 17.4167 9.98748 17.4167 11C17.4167 12.0125 18.2375 12.8333 19.25 12.8333V15.5833C19.25 16.5959 18.4292 17.4167 17.4167 17.4167H4.58333C3.57081 17.4167 2.75 16.5959 2.75 15.5833V12.8333C3.76252 12.8333 4.58333 12.0125 4.58333 11C4.58333 9.98748 3.76252 9.16667 2.75 9.16667V6.41667C2.75 5.40415 3.57081 4.58334 4.58333 4.58334" stroke={isActive ? "#23272E":  "#8B909A" } stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

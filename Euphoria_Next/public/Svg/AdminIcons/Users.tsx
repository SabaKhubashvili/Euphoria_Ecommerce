import React from 'react'

export const Users = ({isActive}:{isActive:boolean}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <ellipse cx="8.25004" cy="6.41667" rx="3.66667" ry="3.66667" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <ellipse cx="8.25004" cy="6.41667" rx="3.66667" ry="3.66667" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2.75 19.25V17.4167C2.75 15.3916 4.39162 13.75 6.41667 13.75H10.0833C12.1084 13.75 13.75 15.3916 13.75 17.4167V19.25" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2.75 19.25V17.4167C2.75 15.3916 4.39162 13.75 6.41667 13.75H10.0833C12.1084 13.75 13.75 15.3916 13.75 17.4167V19.25" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.6666 2.86906C16.289 3.28447 17.4238 4.74639 17.4238 6.42114C17.4238 8.0959 16.289 9.55782 14.6666 9.97323" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.6666 2.86906C16.289 3.28447 17.4238 4.74639 17.4238 6.42114C17.4238 8.0959 16.289 9.55782 14.6666 9.97323" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.25 19.2499V17.4166C19.2404 15.7524 18.1113 14.3034 16.5 13.8874" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.25 19.2499V17.4166C19.2404 15.7524 18.1113 14.3034 16.5 13.8874" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  )
}

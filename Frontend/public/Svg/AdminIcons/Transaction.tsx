import React from 'react'

export const Transaction = ({isActive}:{isActive:boolean}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M12.8334 2.75V6.41667C12.8334 6.92293 13.2438 7.33333 13.75 7.33333H17.4167" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12.8334 2.75V6.41667C12.8334 6.92293 13.2438 7.33333 13.75 7.33333H17.4167" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M15.5834 19.25H6.41671C5.40419 19.25 4.58337 18.4292 4.58337 17.4167V4.58333C4.58337 3.57081 5.40419 2.75 6.41671 2.75H12.8334L17.4167 7.33333V17.4167C17.4167 18.4292 16.5959 19.25 15.5834 19.25Z" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M15.5834 19.25H6.41671C5.40419 19.25 4.58337 18.4292 4.58337 17.4167V4.58333C4.58337 3.57081 5.40419 2.75 6.41671 2.75H12.8334L17.4167 7.33333V17.4167C17.4167 18.4292 16.5959 19.25 15.5834 19.25Z" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.25 8.25001H9.16667" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.25 8.25001H9.16667" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.25 11.9167H13.75" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.25 11.9167H13.75" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.25 15.5833H13.75" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.25 15.5833H13.75" stroke={isActive ? "#23272E":  "#8B909A" } strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  )
}
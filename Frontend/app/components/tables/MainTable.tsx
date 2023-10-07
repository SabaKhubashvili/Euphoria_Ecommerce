import React from 'react';

const HeaderCell = ({ text }:{text:string}) => (
  <h1 className='text-secondaryGray uppercase font-medium md:text-[18px] text-[13px] basis-1/6'>{text}</h1>
);

const RowCell = ({ text }:{text:string}) => (
  <h1 className='text-black  font-medium xl:text-[18px] text-[13px] basis-1/6'>{text}</h1>
);
const StatusRowCell = ({ text }:{text: 'Pending' | 'Delivered'}) => (
  <h1 className={`text-black  font-medium xl:text-[18px] text-[13px] basis-1/6 ${text === 'Pending' ? 'text-yellow-500' : 'text-green'}`}>{text}</h1>
);

export const MainTable = () => {
  return (
    <div className='flex flex-col gap-[18px] w-full xl:p-[24px] p-[12px] overflow-x-auto'>
      <div className='flex justify-between items-center w-full bg-[#F8F9FA] py-[8px] px-[20px] border-b-[1px] border-[#DBDADE] border-solid'>
        <HeaderCell text='Id' />
        <HeaderCell text='Phone' />
        <HeaderCell text='Customer' />
        <HeaderCell text='Status' />
        <HeaderCell text='Price' />
      </div>
      <div className='flex flex-col gap-[18px] h-[400px] overflow-y-auto w-full'>

      <div className='flex justify-between items-center py-[8px] px-[20px] gap-[20px]'>
        <RowCell text='#2323' />
        <RowCell text='+995 598438822' />
        <RowCell text='SAba' />
        <StatusRowCell text='Pending'  />
        <RowCell text='$12' />
      </div>
      <div className='flex justify-between items-center py-[8px] px-[20px] gap-[20px]'>
        <RowCell text='#2323' />
        <RowCell text='+995 598438822' />
        <RowCell text='SAba' />
        <StatusRowCell text='Pending'  />
        <RowCell text='$12' />
      </div>
      <div className='flex justify-between items-center py-[8px] px-[20px] gap-[20px]'>
        <RowCell text='#2323' />
        <RowCell text='+995 598438822' />
        <RowCell text='SAba' />
        <StatusRowCell text='Pending'  />
        <RowCell text='$12' />
      </div>
      <div className='flex justify-between items-center py-[8px] px-[20px] gap-[20px]'>
        <RowCell text='#2323' />
        <RowCell text='+995 598438822' />
        <RowCell text='SAba' />
        <StatusRowCell text='Pending'  />
        <RowCell text='$12' />
      </div>
      <div className='flex justify-between items-center py-[8px] px-[20px] gap-[20px]'>
        <RowCell text='#2323' />
        <RowCell text='+995 598438822' />
        <RowCell text='SAba' />
        <StatusRowCell text='Pending'  />
        <RowCell text='$12' />
      </div>
      <div className='flex justify-between items-center py-[8px] px-[20px] gap-[20px]'>
        <RowCell text='#2323' />
        <RowCell text='+995 598438822' />
        <RowCell text='SAba' />
        <StatusRowCell text='Pending'  />
        <RowCell text='$12' />
      </div>
      <div className='flex justify-between items-center py-[8px] px-[20px] gap-[20px]'>
        <RowCell text='#2323' />
        <RowCell text='+995 598438822' />
        <RowCell text='SAba' />
        <StatusRowCell text='Pending'  />
        <RowCell text='$12' />
      </div>
      <div className='flex justify-between items-center py-[8px] px-[20px] gap-[20px]'>
        <RowCell text='#2323' />
        <RowCell text='+995 598438822' />
        <RowCell text='SAba' />
        <StatusRowCell text='Pending'  />
        <RowCell text='$12' />
      </div>
      <div className='flex justify-between items-center py-[8px] px-[20px] gap-[20px]'>
        <RowCell text='#2323' />
        <RowCell text='+995 598438822' />
        <RowCell text='SAba' />
        <StatusRowCell text='Pending'  />
        <RowCell text='$12' />
      </div>
      <div className='flex justify-between items-center py-[8px] px-[20px] gap-[20px]'>
        <RowCell text='#2323' />
        <RowCell text='+995 598438822' />
        <RowCell text='SAba' />
        <StatusRowCell text='Pending'  />
        <RowCell text='$12' />
      </div>
      <div className='flex justify-between items-center py-[8px] px-[20px] gap-[20px]'>
        <RowCell text='#2323' />
        <RowCell text='+995 598438822' />
        <RowCell text='SAba' />
        <StatusRowCell text='Pending'  />
        <RowCell text='$12' />
      </div>
      <div className='flex justify-between items-center py-[8px] px-[20px] gap-[20px]'>
        <RowCell text='#2323' />
        <RowCell text='+995 598438822' />
        <RowCell text='SAba' />
        <StatusRowCell text='Pending'  />
        <RowCell text='$12' />
      </div>
      <div className='flex justify-between items-center py-[8px] px-[20px] gap-[20px]'>
        <RowCell text='#2323' />
        <RowCell text='+995 598438822' />
        <RowCell text='SAba' />
        <StatusRowCell text='Pending'  />
        <RowCell text='$12' />
      </div>
      <div className='flex justify-between items-center py-[8px] px-[20px] gap-[20px]'>
        <RowCell text='#2323' />
        <RowCell text='+995 598438822' />
        <RowCell text='SAba' />
        <StatusRowCell text='Pending'  />
        <RowCell text='$12' />
      </div>
      <div className='flex justify-between items-center py-[8px] px-[20px] gap-[20px]'>
        <RowCell text='#2323' />
        <RowCell text='+995 598438822' />
        <RowCell text='SAba' />
        <StatusRowCell text='Pending'  />
        <RowCell text='$12' />
      </div>
      <div className='flex justify-between items-center py-[8px] px-[20px] gap-[20px]'>
        <RowCell text='#2323' />
        <RowCell text='+995 598438822' />
        <RowCell text='SAba' />
        <StatusRowCell text='Pending'  />
        <RowCell text='$12' />
      </div>
      </div>
    </div>
  );
};

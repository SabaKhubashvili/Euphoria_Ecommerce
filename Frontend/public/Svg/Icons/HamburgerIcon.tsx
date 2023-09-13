'use client'

interface  Props{
	menuToggle:boolean,
	setMenuToggle:(value:boolean)=>void
}

export const HamburgerIcon = ({menuToggle,setMenuToggle}:Props) => {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition-all ease transform  duration-300`;
  
  return (
    <button
      className="flex flex-col  border-2  rounded justify-center items-center outline-none gap-[8px]"
      onClick={() => setMenuToggle(!menuToggle)}
    >
      <div
        className={`h-[2px] w-6 my-1 rounded-full transition-all ease   duration-300 bg-white  transform !translate-y-4
          
        `}
        style={{
          transform: menuToggle ? 'translateY(15px) translateX(-1px)' : 'none',
          rotate: menuToggle ? '-50deg' : '0deg'
        }}
      ></div>
        <div
          className={`h-[2px] w-6 my-1 rounded-full bg-white transition-all ease   duration-300 ${
            menuToggle ? "opacity-0" : "opacity-100"
          }`}
        />
      <div
        className={`h-[2px] w-6 my-1 rounded-full bg-white transition-all ease transform  duration-300 `}
        style={{
          transform: menuToggle ? 'translateY(-15px) translateX(1px)' : 'none',
          rotate: menuToggle ? '50deg' : '0deg'
        }}
        
      />
    </button>
  );
};

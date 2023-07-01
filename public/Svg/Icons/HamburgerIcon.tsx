'use client'

interface  Props{
	menuToggle:boolean,
	setMenuToggle:(value:boolean)=>void
}

export const HamburgerIcon = ({menuToggle,setMenuToggle}:Props) => {
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-white transition-all ease transform  duration-300`;
  
  return (
    <button
      className="flex flex-col  border-2  rounded justify-center items-center group outline-none"
      onClick={() => setMenuToggle(!menuToggle)}
    >
      <div
        className={`${genericHamburgerLine} bg-white  transform !translate-y-4
  
        `}
        style={{
          transform: menuToggle ? 'translateY(17px)' : 'none',
          rotate: menuToggle ? '45deg' : '0deg'
        }}
      />
        <div
          className={`${genericHamburgerLine} bg-white ${
            menuToggle ? "opacity-0" : "opacity-100"
          }`}
        />
      <div
        className={`${genericHamburgerLine} bg-white `}
        style={{
          transform: menuToggle ? 'translateY(-17px)' : 'none',
          rotate: menuToggle ? '-45deg' : '0deg'
        }}
        
      />
    </button>
  );
};

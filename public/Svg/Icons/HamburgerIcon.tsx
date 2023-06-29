
interface  Props{
	menuToggle:boolean,
	setMenuToggle:(value:boolean)=>void
}

export const HamburgerIcon = ({menuToggle,setMenuToggle}:Props) => {
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300`;
  
  return (
    <button
      className="flex flex-col h-12 w-12 border-2  rounded justify-center items-center group outline-none"
      onClick={() => setMenuToggle(!menuToggle)}
    >
      <div
        className={`${genericHamburgerLine} bg-white opacity-100  ${
          menuToggle && "rotate-45 translate-y-3 " 
        }`}
      />
      <div
        className={`${genericHamburgerLine} bg-white ${
          menuToggle ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} opacity-100 bg-white ${
			menuToggle && " -rotate-45 -translate-y-3 " 
        }`}
      />
    </button>
  );
};

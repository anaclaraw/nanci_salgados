import React from "react";
import {Navbar,Collapse,Typography,IconButton} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="my-2 flex md:bg-white bg-orange-400 flex-col md:flex-row justify-between gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-16 md:text-gray-400">
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-orange-300 transition-colors">
          Início
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-orange-300 transition-colors">
          Cardápio
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-orange-300 transition-colors">
          Blog
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-orange-300 transition-colors">
          Sobre
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-orange-300 transition-colors">
          Contato
        </a>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="w-full px-6 py-3 ">
      <div className="items-center justify-center flex flex-col mx-auto ">
        <Typography
          as="a"
          href="#"
          variant="h6"
          color="black"
          className="mr-4 cursor-pointer py-1.5"
        >
          {/* <img src="/assets/img/logo_nanci.png" className="md:w-16 md:h-12 w-10" /> */}
          <p className="font-labelle -tracking-[-8px] text-yellow-500 md:"> Nanci Salgados</p>
        </Typography>

        <div className="flex items-center w-3/4 justify-around text-orange-300 ">
        <div className="hidden lg:block">
          <NavList />
        </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit  hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6 " strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        {/* <Collapse open={openNav}>
          <NavList />
        </Collapse> */}
      </div>
    </Navbar>
  );
}
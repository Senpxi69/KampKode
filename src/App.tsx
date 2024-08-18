import React from 'react'
import { FloatingNav } from './component/ui/FloatingNavbar'
import HeroElement from './component/ui/HeroElement'
import { BottomScroll } from './component/BottomScroll';

function App() {
  return (
    <div className='relative  w-full'>
      <FloatingNav />
      <HeroElement />
      <BottomScroll />
    </div>

  )
}

const DummyContent = () => {
  return (
    <div className="grid grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md max-h-full">
      <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
        Scroll back up to reveal Navbar
      </p>
      <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
    </div>
  );
};

export default App
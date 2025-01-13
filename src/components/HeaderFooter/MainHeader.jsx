import React, { useEffect, useState } from 'react'
import Header from './DesktopHeader';
import MobileHeader from './MobileHeader';

function MainHeader() {

    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Define a media query listener
    const mediaQuery = window.matchMedia("(max-width: 768px)"); 

    const handleScreenChange = (e) => {
      setIsMobile(e.matches);
    };

    // Initial check and listener setup
    handleScreenChange(mediaQuery); // Check on mount
    mediaQuery.addEventListener("change", handleScreenChange);

    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);

  return (
    <>
    <div>
      {isMobile ? (
        // <MobileHeader /> // Component for mobile header
        <SmallHeader />

      ) : (
        // <LargeScreenHeader /> // Component for large screen header
        <LargeHeader />
      )}
      {/* Other components */}
    </div>
    </>
  )
}

const SmallHeader = () => <header className='mobile-header'>
    <MobileHeader />
    </header>;
const LargeHeader = () => <header className='desktop-header'>
    <Header />
</header>;

export default MainHeader

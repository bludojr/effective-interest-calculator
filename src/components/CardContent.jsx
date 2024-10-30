import React, { useState, useEffect } from "react";

const NotificationArea = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    // Function to update time
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };

    updateTime(); // Set initial time
    const intervalId = setInterval(updateTime, 1000 * 60); // Update every minute

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <>
    <div className="mt-[-53px] ml-[16px] text-white ">
      {time}
    </div>

    <div>
      <img
        src="src\images\Menu.svg"
        alt="Menu"
        className="scale-50 pl-[10px]  invert relative bottom-[-40px] left-[-56px]"
      />
      <h2 className="text-[#ffffff] text-[20px] font:inter font-medium tracking-[1px] leading-[28px] "  >Effective-interest</h2>
      <h2 className="text-[#ffffff] text-[20px] font:inter font-medium tracking-[1px] leading-[28px]">Calculator</h2>
      <img
        src="src\images\Menu Vertical.png"
        alt="Menu"
        className="scale-160 pl-[10px] invert relative right-[-239px] bottom-14"
      />
    </div> 
    </>
  );
};

export default NotificationArea;

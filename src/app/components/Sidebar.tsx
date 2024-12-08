'use client'
import { useEffect } from "react";

export default function MyComponent() {
  useEffect(() => {
    const toggleOpen = document.getElementById('toggleOpen');
    const toggleClose = document.getElementById('toggleClose');
    const collapseMenu = document.getElementById("collapseMenu");

    // Ensure all required elements are present in the DOM
    if (!toggleOpen || !toggleClose || !collapseMenu) {
      console.error("Required elements are missing in the DOM!");
      return;
    }

    // Type assertion to satisfy TypeScript
    const menu = collapseMenu as HTMLElement;

    function handleClick() {
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'block';
      }
    }

    toggleOpen.addEventListener('click', handleClick);
    toggleClose.addEventListener('click', handleClick);

    // Cleanup event listeners on component unmount
    return () => {
      toggleOpen.removeEventListener('click', handleClick);
      toggleClose.removeEventListener('click', handleClick);
    };
  }, []); // Empty dependency array ensures this runs only once on the client side

  return null; // Replace this with your actual JSX if needed
}

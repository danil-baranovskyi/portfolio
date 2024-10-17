import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface IClientOnlyPortalProps {
  children: ReactNode,
  selector: string,
}

export default function ClientOnlyPortal({ children, selector }: IClientOnlyPortalProps) {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    if (!ref.current) {
      console.warn(`Element with selector "${selector}" not found.`);
    }
    
    setMounted(true);
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
}
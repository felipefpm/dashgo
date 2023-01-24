import { UseDisclosureReturn, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactNode, createContext, useContext, useEffect } from "react";

interface SidebarDrawerproviderProps {
  children: ReactNode
}

type SidebarDrawerData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerData);

export function SidebarDrawerProvider({ children }: SidebarDrawerproviderProps) {
  const discloser = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    discloser.onClose
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={discloser}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrower = () => useContext(SidebarDrawerContext)
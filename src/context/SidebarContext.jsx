import { createContext, useState } from "react"

export const SidebarContext = createContext()

const SidebarProvider = ({ children }) => {
    const [sidebarOn, setSidebarOn] = useState(false)

    const handleSidebar = () => {
        setSidebarOn(!sidebarOn)

    }

    return (
        <>
            <SidebarContext.Provider value={{sidebarOn,setSidebarOn, handleSidebar }}>
                {children}
            </SidebarContext.Provider>
 
        </>

    )
}

export default SidebarProvider
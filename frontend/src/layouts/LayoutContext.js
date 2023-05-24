import { useEffect, useState, createContext } from 'react';
import { getMe } from '@/lib/api/user';

const UserContext = createContext(null);

export default function LayoutContext({ title, children }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const getUser = async () => {
            const currentUser = await getMe()
            setUser(currentUser)
            console.log(user)
            console.log("ejecutando...")
        }

        getUser()
    }, [])
    useEffect(() => {
        const getUser = async () => {
            const currentUser = await getMe()
            setUser(currentUser)
            console.log(user)
            console.log("ejecutando...")
        }

        getUser()
    }, user)
    return (
        <UserContext.Provider value={[user, setUser]}>
            <div>


                {children}

            </div>
        </UserContext.Provider>
    )
}

export { UserContext }
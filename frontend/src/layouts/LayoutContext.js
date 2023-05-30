import { useEffect, useState, createContext } from 'react';
import { getMe } from '@/lib/api/user';
import { refresh } from '@/lib/api/auth';

const UserContext = createContext(null);

export default function LayoutContext({ title, children }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const getUser = async () => {
            const currentUser = await getMe()
            setUser(currentUser)
            await refresh()
        }

        getUser()
    }, [])
    useEffect(() => {
        const getUser = async () => {
            const currentUser = await getMe()
            setUser(currentUser)
            await refresh()
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
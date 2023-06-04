import { useEffect } from "react";

export default function UsersList({ users }) {
  useEffect(() => {
    console.log(users);
  }, []);

  return (
    <div className="">
      <ul role="list" className="divide-y divide-gray-100">
        {users != null &&
          users.map((user) => (
            <li key={user.email} className="flex justify-between gap-x-6 py-5">
              <div className="flex gap-x-4">
                <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {user.first_name} {user.last_name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {user.email}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{user.role}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
  // return(<div>Hola</div>)
}

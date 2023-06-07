import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'

import { Link } from 'react-router-dom'

export default function Header() {
  //global value by useContext
  const { isAuthenticated } = useContext(AppContext)

  //submit form

  return (
    <div className='pb-4 bg-blue-100'>
      <div className='max-w-7xl m-auto px-12 py-2'>
        <div className='pb-4 pr-4 flex justify-end text-white items-end '>
          {/*user*/}

          {!isAuthenticated && (
            <>
              <Link to='/register' className='text-sm text-gray-500 px-4 cursor-pointer hover:text-gray-400'>
                Đăng ký
              </Link>
              <Link to='/login' className='text-sm text-gray-500 px-4 cursor-pointer hover:text-gray-400'>
                Đăng nhập
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

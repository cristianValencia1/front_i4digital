import { FC, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AiOutlineRise } from 'react-icons/ai'
import { HiOutlineAcademicCap } from 'react-icons/hi2'
import { usePathname, useRouter } from 'next/navigation'


type SideBarProps = {
  groups: {
    title: string
    items: {
      label: string
      url: string
    }[]
  }[]
}

const getIcon = (url: string) => {
  switch (url) {
    case '/students':
      return <AiOutlineRise className="mr-[5px]" size="20" />    
    default:
      return null
  }
}



const SideBar: FC<SideBarProps> = ({ groups }) => {


  return (
    <div className="bg-white w-full h-full flex flex-col px-[15px]">
      <div className="flex justify-center mt-[25px] mb-[55px]">
        {/* <Link to="/page">
          <img
            src="/assets/imgs/logo.svg"
            alt="logo"
            className="w-[50px] h-[25px]"
          />
        </Link> */}
      </div>

      {groups.map((group) => (
        <div key={group.title}>
          <div>
            <div className="text-sm font-semibold mb-[15px]">{group.title}</div>

            {group.items.map((item) => (
              /*<Link to={`/page${item.url}`} key={item.url}>*/
                <div
                key={item.label}
                  className={`text-sm text-darkGray flex items-center p-2.5 ${
                    //router.prefetch(item.url) &&
                    'bg-basePurple text-white rounded-[10px]'
                  }`}
                >
                  {getIcon(item.url)}
                  {item.label}
                </div>
              /*</Link>*/
            ))}
          </div>

          <hr className="my-[30px]" />
        </div>
      ))}
    </div>
  )
}

export default SideBar

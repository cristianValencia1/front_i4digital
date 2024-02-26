"use client";
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '@ui/TopBar';
import SideBar from '@ui/SideBar';
import Dropdown from '@ui/Dropdown';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';


export default function Home() {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const menu = [
    {
      title: 'I4 Especialistas',
      items: [
        {
          label: 'Tipos de Citas',
          url: '/appointment',
          description: 'Aquí puedes visualizar los Tipos de Citas disponibles',
          title: 'Todos los Tipos de Citas'
        },
        {
          label: 'Crear Tipos de Citas',
          url: '/create-appointment',
          description:
            'Crea los tipos de citas que se esperan tener disponibles',
          title: 'Crea tus Tipos de Citas'
        },
      ]
    },
  ]
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const filteredMenu = menu.filter((section) => section.items)

  const router = useRouter()

  useEffect(() => {
    const option = menu
      .flatMap((submenu) => submenu.items)
      .find((item) => router.prefetch(item.url));

    if (option) {
      setTitle(option.title);
      setDescription(option.description);
    }
  }, [router]);

  return (


    <div className="flex flex-row gap-0 h-screen overflow-hidden">

      <div className="bg-white w-1/5 h-full flex flex-col px-[15px]">
        <div className="flex justify-center mt-[25px] mb-[55px]">
        </div>
        {menu.map((group) => (
          <div key={group.title}>
            <div>
              <div className="text-5xl text-emerald-600 font-bold mb-[15px]">{group.title}</div>

              {group.items.map((item) => (
                <div
                  key={item.label}
                  className={`text-sm text-darkGray flex items-center p-2.5 `}
                >

                  {item.label}
                </div>
              ))}
            </div>

            <hr className="my-[30px]" />
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full bg-background">
        <TopBar
          title={title}
          description={description}
          image="https://picsum.photos/300/300"
        />
        <Dropdown id={"test"} name={"niunguno"} options={[{ id: "string", value: "Cita de revisión odontológica primera vez" }, { id: "string -2", value: "Cita medicina general primera vez" }]} />
        <div className="overflow-y-scroll p-8 h-full">
          <div className=" max-w-[1280px] mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )

  // return (
  //   <main className="flex min-h-screen">
  //     <Tastes />
  //     <div>
  //     <Dropdown id={"test"} name={"niunguno"} options={[{ id: "string", value: "opciones de que" }, { id: "string -2", value: "opciones de que 2" }]} />

  //     </div>
  //     <div>
  //     <Button
  //           type="primary"
  //           id={`lesson-details-`}
  //           color="purple"
  //           onClick={() => console.log("nada")}



  //           size="md"
  //         >
  //           Regresar a mis cursos
  //         </Button>

  //     </div>
  //   </main>
  // );
}

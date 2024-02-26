"use client";
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '@ui/TopBar';
import SideBar from '@ui/SideBar';
import Dropdown from '@ui/Dropdown';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Avatar from '@ui/Avatar';
import image from 'next/image';
import Table from '@ui/Table';
import { FiCheck, FiMoreVertical } from 'react-icons/fi';
import TableBadge from '@ui/TableBadge';


export default function Home() {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const menu = [
    {
      title: 'Administardor ',
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

      {/* <div className="bg-white w-1/5 h-full flex flex-col px-[15px]">
        <div className="flex justify-center mt-[25px] mb-[55px]">
        </div>
        <Link href="/">
          <img
            src="/assets/imgs/logo.svg"
            alt="logo"
            className="w-[50px] h-[25px]"
          />
          I4 Especialistas
        </Link>
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
      </div> */}
      <div className="w-[267px]">
        <SideBar groups={filteredMenu} />
      </div>
      <div className="flex flex-col w-full bg-background">
      
        <TopBar
          title={title}
          description={description}
          image="https://picsum.photos/300/300"
        />
        <div className="p-8">
            <Table
              data={[
                {
                  key: '1',
                  moduleOrder: '1',
                  moduleName: 'Bienvenida',
                  lessonNumber: '1',
                  evaluation: false,
                  required: true,
                  quiz: false,
                  status: 'published'
                },
                {
                  key: '2',
                  moduleOrder: '2',
                  moduleName: 'Manifiesto de la organización',
                  lessonNumber: '1',
                  evaluation: true,
                  required: false,
                  quiz: true,
                  status: 'creating'
                }
              ]}
              headers={[
                {
                  title: 'Orden módulo ',
                  key: 'moduleOrder',
                  dataIndex: 'moduleOrder'
                },
                { title: 'Nombre', key: 'moduleName', dataIndex: 'moduleName' },
                {
                  title: 'Nro.  lecciones',
                  key: 'lessonNumber',
                  dataIndex: 'lessonNumber'
                },
                {
                  title: 'Evaluación',
                  key: 'evaluation',
                  dataIndex: 'evaluation',
                  render: (evaluation) =>
                    evaluation && (
                      <FiCheck size={24} className="mx-auto text-darkGray" />
                    )
                },
                {
                  title: 'Estado',
                  key: 'status',
                  dataIndex: 'status',
                  render: (status) => <TableBadge status={status as any} />
                },
                {
                  title: 'Acciones',
                  key: 'actions',
                  dataIndex: 'actions',
                  render: () => (
                    <button className="flex items-center justify-center text-darkGray mx-auto">
                      <FiMoreVertical size={24} />
                    </button>
                  )
                }
              ]}
            />
          </div>
         <div className="overflow-y-scroll p-8 h-full">
          <div className=" max-w-[1280px] mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )

  // return (

//  <Dropdown id={"test"} name={"niunguno"} options={[{ id: "string", value: "Cita de revisión odontológica primera vez" }, { id: "string -2", value: "Cita medicina general primera vez" }]} />
       
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

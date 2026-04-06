import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { ASCII, ASCIIProvider } from 'html-to-ascii'
import Footer from '@/components/Footer'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        title: 'zachariahwatson.txt',
      },
    ],
    links: [
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  }),
  component: () => (
    <>
      <HeadContent />
      <ASCIIProvider
        sl="░"
        sr="░"
        st="░"
        sb="░"
        fontPath={`${import.meta.env.BASE_URL}CascadiaMono-VariableFont_wght.ttf`}
        //     fontColor="#fff609"
        //     bgColor="#150c05"
        //     textShadow="0 0 10px #ff8000, 0 0 24px #ff8000, 0 0 32px #ff8000,
        // 0 0 6px #ff4540, 0 0 0px #ff4540, 0 0 0px #ff4540"
        //     bgColor="#00140b"
        //     fontColor="#00f193"
        //     textShadow="0 0 10px #01c066, 0 0 24px #01c066, 0 0 4px #01c066,
        // 0 0 5px #0713a9, 0 0 0px #0713a9, 0 0 0px #0713a9"
        bgColor="#0e0e0e"
        fontColor="#fffefe"
        textShadow="0 0 10px #b9f8ff, 0 0 24px #b9f8ff, 0 0 2px #b9f8ff,
    0 0 10px #0713a9, 0 0 0px #0713a9, 0 0 0px #0713a9"
      >
        <ASCII>
          <div className="min-h-screen">
            <Outlet />
          </div>
          <div className="-mt-[3ch]">
            <Footer />
          </div>
        </ASCII>
      </ASCIIProvider>
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  ),
})

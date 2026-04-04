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

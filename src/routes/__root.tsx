import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { ASCII, ASCIIProvider } from 'html-to-ascii'
import Footer from '@/components/Footer'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        title: 'zachariah-watson.txt',
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
      <head>
        <HeadContent />
      </head>
      <ASCIIProvider tl="╭" tr="╮" br="╯" bl="╰" sl="░" sr="░" st="░" sb="░">
        <ASCII>
          <Footer />
          <Outlet />
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

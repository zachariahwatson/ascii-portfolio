import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

//import Header from '../components/Header'
import { ASCII, ASCIIProvider } from 'html-to-ascii'

export const Route = createRootRoute({
  component: () => (
    <>
      <ASCIIProvider>
        <ASCII>
          {/* <Header /> */}
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

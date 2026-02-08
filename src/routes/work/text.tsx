import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/work/text')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/work/text"!</div>
}

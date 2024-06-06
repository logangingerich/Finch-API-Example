import Container from './container'
import NavBar from './navbar'

type LayoutProps = {
  children: React.ReactNode,
};

export default function Layout({ children }: LayoutProps) {
  return (

    <div className='layout'>
      <NavBar />
      <main>{children}</main>
    </div>
  )
}

import Icon from './icon'
import { NavLink } from './navlink'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Separator } from './ui/separator'

export const Sidebar = () => {
  return (
    <aside className="sticky flex min-h-screen w-full max-w-60 flex-col gap-6 rounded-r-3xl border-x bg-background/80 p-4">
      <Avatar className="h-40 w-40 self-center">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Separator />
      <nav className="flex flex-col gap-3">
        <NavLink href={'/alunos/cadastrar'}>
          <Icon name="user-round-plus" />
          Cadastrar Aluno
        </NavLink>
        <NavLink href={{ pathname: '/', query: { method: 'editar' } }}>
          <Icon name="user-cog" />
          Editar Aluno
        </NavLink>
        <NavLink href={{ pathname: '/', query: { method: 'relatorio' } }}>
          <Icon name="file-input" />
          Gerar Declaração
        </NavLink>
        <NavLink variant={'destructive'} href={{ pathname: '/', query: { method: 'deletar' } }}>
          <Icon name="user-x" />
          Deletar Aluno
        </NavLink>
      </nav>
    </aside>
  )
}

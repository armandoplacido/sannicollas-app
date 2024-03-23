'use client'

import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ListTurmaResponse } from '@/types/turma'
import { Turno } from '@/types/turno'

import { turmasColumn } from './turma-column'
import { TurmaTable } from './turma-table'

const FormSchema = z.object({
  nome: z.string(),
  turno: z.string(),
})

function onSubmit(data: z.infer<typeof FormSchema>) {
  return null
}

export type TurmaCardProps = {
  listTurmaResponse: ListTurmaResponse
  listTurnos: Turno[]
}

export const TurmaCard = ({ listTurmaResponse, listTurnos }: TurmaCardProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <h1 className="text-4xl font-semibold">Turmas</h1>
      </CardHeader>
      <CardContent>
        <form className="flex justify-between">
          <div className="flex gap-3">
            <Input className="mb-3 w-full max-w-sm" placeholder="Nome do aluno" value={''} />
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Turno" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Todos</SelectItem>
                {listTurnos.map((turno) => (
                  <SelectItem key={turno.id} value={turno.id.toString()}>
                    {turno.descricao}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit">Pesquisar</Button>
        </form>
        <TurmaTable data={listTurmaResponse.content} columns={turmasColumn} />
      </CardContent>
    </Card>
  )
}

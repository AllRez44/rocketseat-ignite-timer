import { Play } from 'phosphor-react'
import {
  FormContainer,
  HomeContainer,
  CountdownContainer,
  CountdownSeparator,
  CountdownButton,
  TaskTitleInput,
  MinutesAmountInput,
} from './styles'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'

const cycleValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutes: zod
    .number()
    .min(5, 'O ciclo precisar ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisar ser de no máximo 60 minutos'),
})

type CycleFormData = zod.infer<typeof cycleValidationSchema>

enum CycleStatus {
  ONGOING = 'Em andamento',
  DONE = 'Concluído',
  EXITED = 'Interrompido',
}

interface Cycle extends CycleFormData {
  id: string;
  status: CycleStatus;
  createdAt: Date;
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const { register, handleSubmit, watch, formState, reset } = useForm<CycleFormData>({
    resolver: zodResolver(cycleValidationSchema),
    defaultValues: {
      task: '',
      minutes: 0,
    }
  })
  const task = watch('task')
  const minutes = watch('minutes')
  const isSubmittable = task && minutes
  const formErrors = formState.errors
  useEffect(() => console.error(formErrors), [formErrors])

  const handleCreateNewCycle = (data: CycleFormData): void => {
    const cycle: Cycle = {
      ...data,
      id: new Date().getTime().toString(),
      status: CycleStatus.ONGOING,
      createdAt: new Date(),
    }
    console.group('Cycle Submit')
    console.log(cycle)
    console.groupEnd()
    reset()
  }
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="taskTitle">Vou trabalhar em</label>
          <TaskTitleInput
            type="text"
            id="taskTitle"
            list="taskSuggestions"
            placeholder="Dê um nome para sua tarefa"
            {...register('task')}
          />

          <datalist id="taskSuggestions">
            <option value="Estudar" />
            <option value="Trabalhar" />
            <option value="Ler" />
            <option value="Fazer exercícios" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={0}
            // max={100}
            {...register('minutes', { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <CountdownSeparator>:</CountdownSeparator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <CountdownButton type="submit" disabled={!isSubmittable}>
          <Play size={24} />
          Começar
        </CountdownButton>
      </form>
    </HomeContainer>
  )
}

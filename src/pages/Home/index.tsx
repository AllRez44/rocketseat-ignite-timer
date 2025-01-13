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
import { isCycle } from '../../types/cycle'

export function Home() {
  const { register, handleSubmit, watch } = useForm()
  const task = watch('title')
  const minutes = watch('minutes')
  const isSubmittable = task && minutes

  const validateCycle = (data: unknown) => {
    if (!data) throw new Error('No data provided')
    if (!isCycle(data)) throw new Error('Invalid data')
    if (!data.title && !data.minutes) throw new Error('Empty data')
    if (!data.title || !data.minutes) throw new Error('Missing data')
  }

  const handleCreateNewCycle = (data: unknown): void => {
    try {
      validateCycle(data)
    } catch (error) {
      console.error(error)
      return
    }
    console.log(data)
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
            {...register('title')}
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
            max={100}
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

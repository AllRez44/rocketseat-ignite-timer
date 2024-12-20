import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Início</th>
            <th>Status</th>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa 1</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa 2</td>
              <td>10 minutos</td>
              <td>Há cerca de 1 mês</td>
              <td>Em Andamento</td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa 2</td>
              <td>10 minutos</td>
              <td>Há cerca de 1 mês</td>
              <td>Em Andamento</td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa 2</td>
              <td>10 minutos</td>
              <td>Há cerca de 1 mês</td>
              <td>Em Andamento</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}

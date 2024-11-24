{
  /*
// TODO
import { useParams } from 'react-router-dom'
import EditOccupationForm from './EditOccupationForm.tsx'
import { useOccupationData } from '../hooks/api.ts'

export default function EditOccupation() {
  const params = useParams()
  const id = Number(params.id)

  const { data, isPending, isError } = useOccupationData(id)

  if (isPending) {
    return <main aria-live="polite" aria-busy={true}></main>
  }

  if (isError || !data) {
    return (
      <main aria-live="polite" aria-busy={false}>
        <p>Something went wrong loading this page</p>
      </main>
    )
  }

  return (
    <main aria-live="polite" aria-busy={false}>
      <h2>
        Edit occupation: <span className="data">{data.name}</span>
      </h2>
      <EditOccupationForm name={data.name} description={data.name} id={id} />
    </main>
  )
}
*/
}

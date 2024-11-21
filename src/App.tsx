import './App.css'

import EventCountdown from '@components/EventCountdown'
import EventCounter from '@components/EventCounter'
import FuturistConference from '@components/futurist-conference'
import GoingEvent from '@components/going-event'
import Logos from '@components/logos'
import QuestionForm from '@components/question-form'

function App(): JSX.Element {

  return (
    <>
      <EventCountdown />
      <EventCounter />
      <FuturistConference />
      <GoingEvent />
      <Logos />
      <QuestionForm />
    </>
  )
}

export default App

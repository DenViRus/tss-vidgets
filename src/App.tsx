import './App.css'

import FuturistConference from '@components/futurist-conference'
// import GoingEvent from '@components/going-event'
// import Logos from '@components/logos'
import QuestionForm from '@components/question-form'

function App(): JSX.Element {

  return (
    <>
      <FuturistConference />
      {/* <GoingEvent />
      <Logos /> */}
      <QuestionForm />
    </>
  )
}

export default App

const Header = (props) => {
  return (
    <h1>{props.otsikko}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.osa1} {props.määrä1}</p>
      <p>{props.osa2} {props.määrä2}</p>
      <p>{props.osa3} {props.määrä3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.yhteensä}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header otsikko={course} />
      <Content
      osa1={part1} määrä1={exercises1}
      osa2={part2} määrä2={exercises2}
      osa3={part3} määrä3={exercises3}
      />
      <Total yhteensä={määrä1 + määrä2 + määrä3} />
    </div>
  )
}

export default App
import React from 'react'
import './App.css'
import MulticolumnTextarea from './multicolumnTextarea'
import { DEFAULT_TEXT } from './constants'

interface State {
  text: string
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)

    this.state = {
      text: DEFAULT_TEXT
    }
  }

  onChangeValue = (value: string) => {
    this.setState({ text: value })
  }

  render() {
    const { text } = this.state

    return (
      <div className="jumbotron container">
        <MulticolumnTextarea
          value={text}
          onChangeValue={this.onChangeValue}
          columns={3}
        />
      </div>
    )
  }
}

export default App

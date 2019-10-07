import React from 'react'
import './App.css'
import MulticolumnTextarea from './components/multicolumnTextarea'
import { DEFAULT_TEXT } from './constants'
import LayoutSelector from './components/layoutSelector'

interface State {
  columns: number
  text: string
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)

    this.state = {
      columns: 1,
      text: DEFAULT_TEXT
    }
  }

  onChangeValue = (value: string) => {
    this.setState({ text: value })
  }

  onChangeColumns = (value: number) => {
    this.setState({ columns: value })
  }

  render() {
    const { columns, text } = this.state

    return (
      <div className="jumbotron container">
        <LayoutSelector columns={columns} setColumns={this.onChangeColumns} />
        <MulticolumnTextarea
          value={text}
          onChangeValue={this.onChangeValue}
          columns={columns}
        />
      </div>
    )
  }
}

export default App

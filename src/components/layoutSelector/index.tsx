import React from 'react'

interface Props {
  columns: number
  setColumns: (value: number) => void
}

export default class LayoutSelector extends React.Component<Props> {
  onSetColumns = (value: number) => {
    this.props.setColumns(value)
  }
  render() {
    const { columns } = this.props
    return (
      <nav className="navbar sticky-top navbar-light bg-light d-flex justify-content-between">
        <span className="navbar-brand d-flex">Select layout:</span>
        <div className="d-flex">
          <button
            onClick={() => this.onSetColumns(1)}
            disabled={columns === 1}
            className={`mx-2 btn ${
              columns === 1 ? 'btn-primary' : 'btn-secondary'
            }`}
          >
            Single-column
          </button>
          <button
            onClick={() => this.onSetColumns(2)}
            disabled={columns === 2}
            className={`mx-2 btn ${
              columns === 2 ? 'btn-primary' : 'btn-secondary'
            }`}
          >
            2 columns
          </button>
          <button
            onClick={() => this.onSetColumns(3)}
            disabled={columns === 3}
            className={`mx-2 btn ${
              columns === 3 ? 'btn-primary' : 'btn-secondary'
            }`}
          >
            3 columns
          </button>
        </div>
      </nav>
    )
  }
}

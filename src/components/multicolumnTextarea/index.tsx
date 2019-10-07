import React from 'react'
import ContentEditable from 'react-contenteditable'

import './styles.scss'

interface Props {
  value: string
  onChangeValue: (value: string) => void
  columns?: number
}

export default class MulticolumnTextarea extends React.Component<Props> {
  static defaultProps: Pick<Props, 'columns'> = {
    columns: 1
  }

  contentEditable: any

  constructor(props: Props) {
    super(props)

    this.contentEditable = React.createRef()
  }

  onChangeValue = (event: any) => {
    this.props.onChangeValue(this.unEscapedValue(event.target.value))
  }

  get escapedValue(): string {
    return this.props.value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  }

  unEscapedValue = (value: string) => {
    return value
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
  }

  render() {
    const { columns } = this.props

    return (
      <div className="multicolumn-textarea">
        <ContentEditable
          innerRef={this.contentEditable}
          html={this.escapedValue}
          style={{ display: 'inline-block', columnCount: columns }}
          onChange={this.onChangeValue}
        />
      </div>
    )
  }
}

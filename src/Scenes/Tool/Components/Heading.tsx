import { CSS_GLOBAL } from '../../../Styles/Settings/Settings.Global'
import { EBox } from '../../../Styles/Elements/Elements.Box'
import { EText } from '../../../Styles/Elements/Elements.Text'
import React from 'react'

export default function Heading() {
  return (
    <EBox textAlign="center">
      <EText as="h1" fontWeight={CSS_GLOBAL.fontWeightBold}>
        Shade{' '}
        <span role="img" aria-label="shade emoji">
          😎
        </span>
      </EText>

      <EText>
        A polished{' '}
        <span role="img" aria-label="sparkle emoji">
          ✨
        </span>{' '}
        shade generator
      </EText>
    </EBox>
  )
}

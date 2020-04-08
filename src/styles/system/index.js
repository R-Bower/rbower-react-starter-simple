import {is} from "ramda"
import {system} from "styled-system"

/**
 * Custom height prop.
 * Numbers from 0-1 are converted to percentage widths.
 * Numbers greater than 1 are converted to pixel values.
 * String values are passed as raw CSS values.
 */
export const height = system({
  height: {
    property: "height",
    transform: value => {
      if (value > 0 && value <= 1) {
        return `${(value * 100).toFixed(1)}%`
      }
      if ((is(Number, value) && value > 1) || value === 0) {
        return `${value}px`
      }
      return value
    }
  }
})

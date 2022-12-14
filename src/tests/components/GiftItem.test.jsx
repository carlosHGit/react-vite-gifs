import { render } from "@testing-library/react"
import GrifItem from "../../components/GifItem"

describe('Testing GiftItem component', () => {
  test('should it render', () => {
    render(<GrifItem url='www.test.com'/>)
  })
})
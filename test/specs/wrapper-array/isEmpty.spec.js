import { describeWithShallowAndMount } from '~resources/utils'
import { compileToFunctions } from 'vue-template-compiler'
import 'packages/test-utils/src'

describeWithShallowAndMount('isEmpty', mountingMethod => {
  it('returns true if node is empty', () => {
    const compiled = compileToFunctions('<div><p /></div>')
    const wrapper = mountingMethod(compiled)

    expect(wrapper.findAll('p').isEmpty()).toEqual(true)
  })

  it('returns false if node contains other nodes', () => {
    const compiled = compileToFunctions('<div><span><p><p/></span></div>')
    const wrapper = mountingMethod(compiled)

    expect(wrapper.findAll('span').isEmpty()).toEqual(false)
  })

  it('throws error if wrapper array contains no items', () => {
    const compiled = compileToFunctions('<div />')
    const message = '[vue-test-utils]: isEmpty cannot be called on 0 items'
    const fn = () => mountingMethod(compiled).findAll('p').isEmpty('p')
    expect(fn).toThrow(message)
  })
})

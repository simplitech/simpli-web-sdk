import { CreateElement, RenderContext } from 'vue'

export default {
  functional: true,
  render(createElement: CreateElement, context: RenderContext) {
    const data = {
      props: {
        name: 'expand',
      },
      on: {
        afterEnter(element: HTMLElement) {
          element.style.height = 'auto'
        },
        enter(element: HTMLElement) {
          const { width } = getComputedStyle(element)
          element.style.width = width
          element.style.position = 'absolute'
          element.style.visibility = 'hidden'
          element.style.height = 'auto'
          const { height } = getComputedStyle(element)
          element.style.width = null
          element.style.position = null
          element.style.visibility = null
          element.style.height = '0'
          // Force repaint to make sure the animation is triggered correctly.
          // tslint:disable-next-line
          getComputedStyle(element).height
          setTimeout(() => {
            element.style.height = height
          })
        },
        leave(element: HTMLElement) {
          const { height } = getComputedStyle(element)
          element.style.height = height
          // Force repaint to make sure the animation is triggered correctly.
          // tslint:disable-next-line
          getComputedStyle(element).height
          setTimeout(() => {
            element.style.height = '0'
          })
        },
      },
    }
    return createElement('transition', data, context.children)
  },
}

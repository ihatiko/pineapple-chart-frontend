import { mount } from '@vue/test-utils'
import ElementPlus from 'element-plus';
import ExampleComponent from './ExampleComponent.vue'

test('ExampleComponent', async () => {
  const wrapper = mount(ExampleComponent, {
    global: {plugins:[ElementPlus]}
  })
  await wrapper.find('.test').trigger('click')
  expect(wrapper.find('p').text()).toEqual("1")
})

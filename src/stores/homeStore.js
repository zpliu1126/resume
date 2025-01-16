/*
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2025-01-16 17:58:12
 * @LastEditors: zpliu
 * @LastEditTime: 2025-01-16 17:58:47
 * @@param: 
 */
import { ref } from 'vue'
import { defineStore } from 'pinia'

//关于移动端适配
const WIDTH = 992
export const useWindowStore = defineStore('windowConfig', () => {
  const isMobile = ref(window.innerWidth > WIDTH ? 1 : 0)
  const getWindowInfo = () => {
    const windowInfo = {
      width: window.innerWidth,
      hight: window.innerHeight
    }
    isMobile.value = windowInfo.width - WIDTH > 1 ? 1 : 0
  }
  const debounce = (fn, delay) => {
    //防抖在事件发生100毫秒后改变
    let timer
    return function () {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        fn()
      }, delay)
    }
  }
  function ChangeWidth() {
    debounce(getWindowInfo, 100)()
  }
  return { isMobile, ChangeWidth }
})
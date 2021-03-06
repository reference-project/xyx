import Sprite from '../interfaces/sprite'

const iconPath = 'images/pause/'
const stopedIconHeight = screenWidth * 1623 / 750

// Sprite
let running = new Sprite({
  imgSrc: `${iconPath}pause.png`,
  width: 65, height: 65,
  x: screenWidth - 80,
  y: -screenHeight + 55
})

let stoped = new Sprite({
  imgSrc: `${iconPath}start.png`,
  width: screenWidth, height: stopedIconHeight,
  x: 0,
  y: -(stopedIconHeight + screenHeight) / 2
})


export default class Pause {
  constructor(ctx) {
    // 维护ctx
    this.ctx = ctx

    this.isStoped = false

    this.stopedIcon = stoped
    this.runningIcon = running

    this.bindToDataBus()
  }

  bindToDataBus(dataBus = window.dataBus) {

  }
  /**
   * 绘制指定的button
   * isStoped指是否暂停，ctx为绘画的幕布对象
   */
  drawPauseButton(isStoped = this.isStoped, ctx = this.ctx) {
    if (isStoped)
      return false
    this.runningIcon.draw(ctx)
  }
}
export const LOCATION = {
    TOP: 'TOP',
    BOTTOM: 'BOTTOM',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
}
const NUMBER_FOR_DIFF = 50

const sectionWrap = (location, bounding, boundItem) => {
    return location === LOCATION.TOP
      ? {
          top: bounding.top - boundItem.height - NUMBER_FOR_DIFF,
          left: bounding.left + (bounding.width - boundItem.width) / 2,
          position: 'relative',
        }
      : location === LOCATION.BOTTOM
      ? {
          top: bounding.top + bounding.height + NUMBER_FOR_DIFF,
          left: bounding.left + (bounding.width - boundItem.width) / 2,
          position: 'relative',
        }
      : location === LOCATION.RIGHT
      ? {
          top: bounding.top,
          right: -bounding.right - NUMBER_FOR_DIFF,
          position: 'relative',
        }
      : location === LOCATION.LEFT
      ? {
          top: bounding.top,
          left: bounding.left - boundItem.width - NUMBER_FOR_DIFF,
          position: 'relative',
        }
      : null
  }
  
  export default sectionWrap

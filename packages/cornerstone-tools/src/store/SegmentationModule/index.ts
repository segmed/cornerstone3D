import setLabelmapForElement, {
  getActiveLabelmapForElement,
  getLabelmapForElement,
} from './setLabelmapForElement'
import {
  setActiveLabelmapIndex,
  setActiveLabelmapByLabelmapUID,
  getActiveLabelmapIndex,
  getActiveLabelmapUID,
} from './activeLabelmapIndex'
import {
  getNextLabelmapIndex,
  getLabelmapUIDsForElement,
  getLabelmapUIDsForViewportUID,
  getActiveSegmentIndexForLabelmapUID,
  triggerLabelmapsUpdated,
} from './utils'
import {
  setActiveSegmentIndex,
  getActiveSegmentIndex,
} from './activeSegmentIndex'
// import * as segmentationConfig from './segmentationConfig'
import config, { setGlobalConfig } from './segmentationConfig'
import { addNewLabelmap } from './addNewLabelmap'
import { setColorLUT, getColorForSegmentIndexColorLUT } from './colorLUT'

export {
  setLabelmapForElement,
  getActiveLabelmapForElement,
  getLabelmapForElement,
  setActiveLabelmapIndex,
  setActiveLabelmapByLabelmapUID,
  getActiveLabelmapIndex,
  getActiveLabelmapUID,
  addNewLabelmap,
  getActiveSegmentIndex,
  getNextLabelmapIndex,
  setColorLUT,
  getColorForSegmentIndexColorLUT,
  getActiveSegmentIndexForLabelmapUID,
  config,
  setGlobalConfig,
}

export default {
  // Set labelmap for element
  setLabelmapForElement,
  addNewLabelmap,

  // Set/Get Labelmap
  getLabelmapForElement,
  getLabelmapUIDsForElement,
  getLabelmapUIDsForViewportUID,

  // Set/Get Active labelmap/Index
  getActiveLabelmapForElement,
  setActiveLabelmapByLabelmapUID,
  setActiveLabelmapIndex,
  getActiveLabelmapIndex,
  getActiveLabelmapUID,

  // Set/Get Active Segment index
  setActiveSegmentIndex,
  getActiveSegmentIndex,

  // Config
  config,
  setGlobalConfig,

  // ColorLUT
  setColorLUT,
  getColorForSegmentIndexColorLUT,

  // Utils
  getNextLabelmapIndex,
  getActiveSegmentIndexForLabelmapUID,
  triggerLabelmapsUpdated,
}
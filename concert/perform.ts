import {
  Chart,
  Live,
} from "../types/live_types";
import {
  MusicChartType,
} from "../types/proto/proto_enum";
import * as acts from "./acts";

export function perform(live: Live) {
  // TODO: push initial chart 

  live.quest.musicChartPatterns.forEach(musicPtn => {

    // init current chart
    let previous = live.charts[-1]
    let current: Chart = {
      chartType: musicPtn.type,
      sequence: musicPtn.sequence,
      actPosition: musicPtn.position,
      cardStatuses: [],
      userStatuses: [],
    }

    // A & SP node
    if (current.chartType > MusicChartType.Beat) {
      acts.checkSkillExistence(live, previous, current)

    }

    // live battle
    if (live.isBattle) {

    }
    
    

  })
  
}


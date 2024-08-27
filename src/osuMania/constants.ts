import { Judgement } from "@/types";

// All coordinates/sizes in osu assume the game is running at 640x480 res, or 854x480 for 16:9 aspect ratio
export const OSU_WIDTH = 854;
export const OSU_HEIGHT = 480;

// The scroll speed calcs aren't documented anywhere so I eyeballed this constant
export const SCROLL_SPEED_MULT = 0.085;

export const SKIN_DIR = "/skin";

export const TEXTURES = {
  NOTE: `${SKIN_DIR}/note1.png`,
  NOTE2: `${SKIN_DIR}/note2.png`,
  NOTES: `${SKIN_DIR}/noteS.png`,
  STAGE_HINT: `${SKIN_DIR}/mania-stage-hint.png`,
  STAGE_LIGHT: `${SKIN_DIR}/mania-stage-light@2x.png`,
  STAGE_LEFT: `${SKIN_DIR}/mania-stage-left.png`,
  STAGE_RIGHT: `${SKIN_DIR}/mania-stage-right.png`,
  KEY1: `${SKIN_DIR}/key-1.png`,
  KEY1P: `${SKIN_DIR}/key-1p.png`,
  KEY2: `${SKIN_DIR}/key-2.png`,
  KEY2P: `${SKIN_DIR}/key-2p.png`,
  KEY3: `${SKIN_DIR}/key-3.png`,
  KEY3P: `${SKIN_DIR}/key-3p.png`,
  KEY4: `${SKIN_DIR}/key-4.png`,
  KEY4P: `${SKIN_DIR}/key-4p.png`,
  KEYSP: `${SKIN_DIR}/key-sp.png`,
  KEY_PINKP: `${SKIN_DIR}/key-pinkp.png`,
  LN1: `${SKIN_DIR}/LN1.png`,
  LN2: `${SKIN_DIR}/LN2.png`,
  LNS: `${SKIN_DIR}/LNS.png`,
  T1: `${SKIN_DIR}/T1.png`,
  T2: `${SKIN_DIR}/T2.png`,
  TS: `${SKIN_DIR}/TS.png`,
};

export const JUDGEMENT_TEXTURES: { [key in Judgement]: string } = {
  0: `${SKIN_DIR}/mania-hit0-0@2x.png`,
  50: `${SKIN_DIR}/mania-hit50-0@2x.png`,
  100: `${SKIN_DIR}/mania-hit100-0@2x.png`,
  200: `${SKIN_DIR}/mania-hit200-0@2x.png`,
  300: `${SKIN_DIR}/mania-hit300-0@2x.png`,
  320: `${SKIN_DIR}/mania-hit300g-0@2x.png`,
};
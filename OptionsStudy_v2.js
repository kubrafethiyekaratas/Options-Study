/******************************* 
 * Optionsstudy_V2_Legacy Test *
 *******************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.0.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'OptionsStudy_v2_legacy';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'PROLIFIC_PID': '',
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0.0, 0.0, 0.0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(IntroductionRoutineBegin());
flowScheduler.add(IntroductionRoutineEachFrame());
flowScheduler.add(IntroductionRoutineEnd());
flowScheduler.add(ParticipantInformationRoutineBegin());
flowScheduler.add(ParticipantInformationRoutineEachFrame());
flowScheduler.add(ParticipantInformationRoutineEnd());
flowScheduler.add(RTCalib_promptRoutineBegin());
flowScheduler.add(RTCalib_promptRoutineEachFrame());
flowScheduler.add(RTCalib_promptRoutineEnd());
flowScheduler.add(RTCalib_InstructionsRoutineBegin());
flowScheduler.add(RTCalib_InstructionsRoutineEachFrame());
flowScheduler.add(RTCalib_InstructionsRoutineEnd());
const RTloopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(RTloopLoopBegin(RTloopLoopScheduler));
flowScheduler.add(RTloopLoopScheduler);
flowScheduler.add(RTloopLoopEnd);
flowScheduler.add(RT_EndRoutineBegin());
flowScheduler.add(RT_EndRoutineEachFrame());
flowScheduler.add(RT_EndRoutineEnd());
flowScheduler.add(InitializationRoutineBegin());
flowScheduler.add(InitializationRoutineEachFrame());
flowScheduler.add(InitializationRoutineEnd());
flowScheduler.add(TrainingPromptRoutineBegin());
flowScheduler.add(TrainingPromptRoutineEachFrame());
flowScheduler.add(TrainingPromptRoutineEnd());
flowScheduler.add(TrainingInstructionsRoutineBegin());
flowScheduler.add(TrainingInstructionsRoutineEachFrame());
flowScheduler.add(TrainingInstructionsRoutineEnd());
const comprehensiontrainingloopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(comprehensiontrainingloopLoopBegin(comprehensiontrainingloopLoopScheduler));
flowScheduler.add(comprehensiontrainingloopLoopScheduler);
flowScheduler.add(comprehensiontrainingloopLoopEnd);
const TrainingTrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(TrainingTrialsLoopBegin(TrainingTrialsLoopScheduler));
flowScheduler.add(TrainingTrialsLoopScheduler);
flowScheduler.add(TrainingTrialsLoopEnd);
flowScheduler.add(TrainingCreditsRoutineBegin());
flowScheduler.add(TrainingCreditsRoutineEachFrame());
flowScheduler.add(TrainingCreditsRoutineEnd());
flowScheduler.add(TrainingEndRoutineBegin());
flowScheduler.add(TrainingEndRoutineEachFrame());
flowScheduler.add(TrainingEndRoutineEnd());
flowScheduler.add(CheckPhasePromptRoutineBegin());
flowScheduler.add(CheckPhasePromptRoutineEachFrame());
flowScheduler.add(CheckPhasePromptRoutineEnd());
flowScheduler.add(CheckPhaseInstructionsRoutineBegin());
flowScheduler.add(CheckPhaseInstructionsRoutineEachFrame());
flowScheduler.add(CheckPhaseInstructionsRoutineEnd());
const CheckPhaseTrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(CheckPhaseTrialsLoopBegin(CheckPhaseTrialsLoopScheduler));
flowScheduler.add(CheckPhaseTrialsLoopScheduler);
flowScheduler.add(CheckPhaseTrialsLoopEnd);
flowScheduler.add(nRepsRoutineBegin());
flowScheduler.add(nRepsRoutineEachFrame());
flowScheduler.add(nRepsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(CheckPhaseEndRoutineBegin());
flowScheduler.add(CheckPhaseEndRoutineEachFrame());
flowScheduler.add(CheckPhaseEndRoutineEnd());
flowScheduler.add(MainPromptRoutineBegin());
flowScheduler.add(MainPromptRoutineEachFrame());
flowScheduler.add(MainPromptRoutineEnd());
flowScheduler.add(MainInstructionsRoutineBegin());
flowScheduler.add(MainInstructionsRoutineEachFrame());
flowScheduler.add(MainInstructionsRoutineEnd());
flowScheduler.add(MainInstructions2RoutineBegin());
flowScheduler.add(MainInstructions2RoutineEachFrame());
flowScheduler.add(MainInstructions2RoutineEnd());
const comprehensionloopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(comprehensionloopLoopBegin(comprehensionloopLoopScheduler));
flowScheduler.add(comprehensionloopLoopScheduler);
flowScheduler.add(comprehensionloopLoopEnd);
const MainExpTrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(MainExpTrialsLoopBegin(MainExpTrialsLoopScheduler));
flowScheduler.add(MainExpTrialsLoopScheduler);
flowScheduler.add(MainExpTrialsLoopEnd);
flowScheduler.add(TimedOutTrialsRoutineBegin());
flowScheduler.add(TimedOutTrialsRoutineEachFrame());
flowScheduler.add(TimedOutTrialsRoutineEnd());
const RecoveryLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(RecoveryLoopLoopBegin(RecoveryLoopLoopScheduler));
flowScheduler.add(RecoveryLoopLoopScheduler);
flowScheduler.add(RecoveryLoopLoopEnd);
flowScheduler.add(TotalCreditsRoutineBegin());
flowScheduler.add(TotalCreditsRoutineEachFrame());
flowScheduler.add(TotalCreditsRoutineEnd());
flowScheduler.add(WaitRoutineBegin());
flowScheduler.add(WaitRoutineEachFrame());
flowScheduler.add(WaitRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'grey.png', 'path': 'grey.png'},
    {'name': 'animal_cropped.jpg', 'path': 'animal_cropped.jpg'},
    {'name': 'clock_cropped.jpg', 'path': 'clock_cropped.jpg'},
    {'name': 'key_cropped.png', 'path': 'key_cropped.png'},
    {'name': 'tool_cropped.jpg', 'path': 'tool_cropped.jpg'},
    {'name': 'hairclip_cropped.png', 'path': 'hairclip_cropped.png'},
    {'name': 'flower_cropped.jpg', 'path': 'flower_cropped.jpg'},
    {'name': 'phone_cropped.png', 'path': 'phone_cropped.png'},
    {'name': 'Reorganized_Set2.csv', 'path': 'Reorganized_Set2.csv'},
    {'name': 'transport_cropped.jpg', 'path': 'transport_cropped.jpg'},
    {'name': 'Set2.csv', 'path': 'Set2.csv'},
    {'name': 'cactus_cropped.png', 'path': 'cactus_cropped.png'},
    {'name': 'tape_cropped.png', 'path': 'tape_cropped.png'},
    {'name': 'Set1.csv', 'path': 'Set1.csv'},
    {'name': 'kodak_cropped.png', 'path': 'kodak_cropped.png'},
    {'name': 'clothing_cropped.jpg', 'path': 'clothing_cropped.jpg'},
    {'name': 'Reorganized_Set1.csv', 'path': 'Reorganized_Set1.csv'},
    {'name': 'RatingScale.png', 'path': 'RatingScale.png'},
    {'name': 'fruit_cropped.jpg', 'path': 'fruit_cropped.jpg'},
    {'name': 'cone_cropped.png', 'path': 'cone_cropped.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.0';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expInfo["PROLIFIC_PID"]}_${expName}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls(('https://bhampsychology.eu.qualtrics.com/jfe/form/SV_eRpJHg9Ev4xwmIC?return=fromPavlovia&PROLIFIC_PID=' + expInfo['participant']), '');

  return Scheduler.Event.NEXT;
}


var IntroductionClock;
var text_22;
var key_resp_30;
var ParticipantInformationClock;
var participantinfo;
var key_resp_28;
var RTCalib_promptClock;
var text_6;
var key_resp_10;
var RTCalib_InstructionsClock;
var text_23;
var key_resp_29;
var RT_Condition_InstructionsClock;
var conditions;
var condition_index;
var current_condition;
var instruction_shown;
var instructionText;
var key_resp_21;
var RT_CalibClock;
var fixationCross;
var redBox;
var keyResponse;
var frameTolerance;
var allowed_keys;
var correctTrialCount;
var key;
var reactionTime;
var boxOnsetTime;
var responseMade;
var wrongButtonPress;
var noResponse;
var RT_WarningTextClock;
var warningText;
var RT_EndClock;
var text_24;
var key_resp;
var InitializationClock;
var stimuli_sets;
var stimuli_file;
var main_exp_file;
var TrainingPromptClock;
var prompt2;
var key_resp_3;
var TrainingInstructionsClock;
var TrainingInstruction;
var key_resp_2;
var ComprehensionTraining1Clock;
var text_14;
var key_resp_23;
var ComprehensionTraining2Clock;
var comprehension_2;
var key_resp_22;
var ComprehensionTraining3Clock;
var text_19;
var key_resp_24;
var ComprehensionTrainingFeedbackClock;
var comprehensiontrainingfeedback;
var key_resp_25;
var FixationCrossClock;
var text_18;
var TrainingClock;
var leftImage;
var rightImage;
var choice;
var creditCounterTraining;
var correct_trials_training;
var total_trials_training;
var response_made_training;
var selected_image;
var selected_credits;
var autoselection_training;
var creditsEarnedTraining;
var rt_clock_training;
var TrainingFeedbackClock;
var selectedImage;
var creditsText;
var creditCounterTraining_2;
var TrainingCreditsClock;
var TrainingTotalCredits;
var key_resp_4;
var TrainingEndClock;
var text_28;
var key_resp_11;
var CheckPhasePromptClock;
var text;
var key_resp_5;
var CheckPhaseInstructionsClock;
var text_2;
var key_resp_6;
var CheckPhaseClock;
var left;
var right;
var response;
var response_made_check;
var CPfeedbackText;
var correct_responses_cp;
var incorrect_responses_cp;
var check_phase_completed;
var check_phase_failed;
var rt_clock_check;
var incorrect_trials;
var all_trials;
var recycled_index;
var CheckPhaseFeedbackClock;
var feedback_text;
var nRepsClock;
var CheckPhaseFailClock;
var text_12;
var CheckPhaseEndClock;
var text_3;
var key_resp_12;
var MainPromptClock;
var text_4;
var key_resp_7;
var MainInstructionsClock;
var text_5;
var key_resp_8;
var MainInstructions2Clock;
var image;
var text_7;
var key_resp_13;
var ComprehensionCheckMain1Clock;
var text_20;
var key_resp_26;
var ComprehensionCheckMain2Clock;
var text_26;
var key_resp_33;
var comprehensionresultClock;
var text_27;
var key_resp_34;
var comprehension_main_correct;
var BlocksClock;
var blockNumber;
var trialCount;
var blockSizes;
var currentBlockSize;
var blockText;
var key_resp_9;
var MainExpClock;
var shuffled_trials;
var attention_check_trials;
var regular_trials;
var attention_trial;
var blocks;
var block_size;
var start_idx;
var end_idx;
var correct_trials_main;
var total_trials_main;
var attention;
var leftimage;
var rightimage;
var upperimage;
var selection;
var creditCounterMain;
var creditsEarned;
var response_made;
var chosenimage;
var chosencredit;
var totalCredits;
var auto_selection;
var attention_text;
var rt_clock;
var timed_out_trials;
var MainExpFeedbackClock;
var decisionImage;
var text_15;
var creditCounter;
var RatingClock;
var ratingTrialCounter;
var slider_initialized;
var text_13;
var key_resp_17;
var difficultySlider;
var TimedOutTrialsClock;
var RecoveryClock;
var imageleft;
var imageright;
var imageup;
var key_resp_19;
var creditCounterRecovery;
var response_made_recovery;
var chosenimagerecovery;
var chosencreditrecovery;
var rt_clock_recovery;
var RecoveryFeedbackClock;
var chosenImage;
var text_16;
var creditCounter_2;
var TotalCreditsClock;
var totaltrainingmaincredits;
var key_resp_18;
var bonus;
var WaitClock;
var text_17;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Introduction"
  IntroductionClock = new util.Clock();
  text_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_22',
    text: 'WELCOME TO THE STUDY\n\nThe study aims to improve our understanding of how people track and respond to rewards.\n\nIt is a computer-based experiment, followed by a set of questionnaires. \nCompleting this study should take approximately 50 MINUTES.\n\nPress SPACE to continue. \n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_30 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ParticipantInformation"
  ParticipantInformationClock = new util.Clock();
  participantinfo = new visual.TextStim({
    win: psychoJS.window,
    name: 'participantinfo',
    text: "The experiment consists of four segments:\n\n1. Reaction Time Calibration\n2. Learning\n3. Training\n4. Main Experiment\nYou may earn up to £4 extra based on your total credits.\n\nAfter the main experiment, you'll complete some questionnaires (about 30 minutes).\n\nPress SPACE to continue.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_28 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "RTCalib_prompt"
  RTCalib_promptClock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Are you ready to begin the Reaction Time Calibration?\n\nIf yes, press Y. \nIf no, press N.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "RTCalib_Instructions"
  RTCalib_InstructionsClock = new util.Clock();
  text_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_23',
    text: 'You are about to start the Reaction Time Calibration.\n\nYou must respond as quickly as possible after seeing a RED BOX appear on the screen. \n\nYou will use your RIGHT HAND to press the ARROW keys (← ↑ → ) on the keyboard.\n\nPress SPACE to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_29 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "RT_Condition_Instructions"
  RT_Condition_InstructionsClock = new util.Clock();
  // Run 'Begin Experiment' code from code_18
  conditions = ["left", "right", "up"];
  condition_index = 0;
  current_condition = conditions[condition_index];
  instruction_shown = {"left": false, "right": false, "up": false};
  
  instructionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructionText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_21 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "RT_Calib"
  RT_CalibClock = new util.Clock();
  fixationCross = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixationCross',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  redBox = new visual.Rect ({
    win: psychoJS.window, name: 'redBox', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color([1.0, (- 1.0), (- 1.0)]),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  keyResponse = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code_31
  frameTolerance = 0.001;
  conditions = ["left", "right", "up"];
  allowed_keys = {"left": ["left", "l"], "right": ["right", "r"], "up": ["up", "u"]};
  correctTrialCount = {"left": 0, "right": 0, "up": 0};
  condition_index = 0;
  current_condition = conditions[condition_index];
  console.log(`Current condition: ${current_condition}`);
  key = null;
  keyResponse.keys = [];
  keyResponse.rt = null;
  reactionTime = null;
  boxOnsetTime = null;
  responseMade = false;
  wrongButtonPress = false;
  noResponse = false;
  
  // Initialize components for Routine "RT_WarningText"
  RT_WarningTextClock = new util.Clock();
  warningText = new visual.TextStim({
    win: psychoJS.window,
    name: 'warningText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "RT_End"
  RT_EndClock = new util.Clock();
  text_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_24',
    text: 'Reaction Time Calibration has now finished.\n\nYou will start  the LEARNING part now.\n\nPress SPACE to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Initialization"
  InitializationClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  psychoJS.experiment.addData("ProlificID", expInfo["PROLIFIC_PID"]);
  psychoJS.experiment.addData("ParticipantID", expInfo["participant"]);
  stimuli_sets = ["Set1.csv", "Set2.csv"];
  stimuli_file = stimuli_sets[Number.parseInt((Math.random() * stimuli_sets.length))];
  if ((stimuli_file === "Set1.csv")) {
      main_exp_file = "Reorganized_Set1.csv";
  } else {
      main_exp_file = "Reorganized_Set2.csv";
  }
  psychoJS.experiment.addData("SelectedStimuli_File", stimuli_file);
  psychoJS.experiment.addData("MainExp_File", main_exp_file);
  
  // Initialize components for Routine "TrainingPrompt"
  TrainingPromptClock = new util.Clock();
  prompt2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'prompt2',
    text: 'Are you ready to begin the Learning Part?\n\nIf yes, press Y. \nIf no, press N.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TrainingInstructions"
  TrainingInstructionsClock = new util.Clock();
  TrainingInstruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'TrainingInstruction',
    text: 'The Learning part consists of 21 trials. \nIn each one, you’ll choose between two images. Each image gives a certain number of credits, which count toward your final bonus.\n\nUse the LEFT ARROW (←) key to choose the left image, and the RIGHT ARROW (→) to choose the right one.\n\nYou’ll have 4 seconds to make your choice. If you don’t choose in time, the image with lower credits will be picked automatically.\n\nPress SPACE to proceed.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ComprehensionTraining1"
  ComprehensionTraining1Clock = new util.Clock();
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: 'Which key do you press to select the left image?\n\n(A) Left arrow\n(B) Right arrow\n(C) Up arrow',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_23 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ComprehensionTraining2"
  ComprehensionTraining2Clock = new util.Clock();
  comprehension_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'comprehension_2',
    text: 'What happens if you fail to make a choice within the given time?\n\n(A) Random image is selected.\n(B) Lower credit image is selected.\n(C) Higher credit image is selected.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_22 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ComprehensionTraining3"
  ComprehensionTraining3Clock = new util.Clock();
  text_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_19',
    text: 'How many seconds do you have to make a choice in the Learning part?\n\n(A) 2 seconds\n(B) 4 seconds\n(C) 6 seconds',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_24 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ComprehensionTrainingFeedback"
  ComprehensionTrainingFeedbackClock = new util.Clock();
  comprehensiontrainingfeedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'comprehensiontrainingfeedback',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_25 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "FixationCross"
  FixationCrossClock = new util.Clock();
  text_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_18',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Training"
  TrainingClock = new util.Clock();
  leftImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'leftImage', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  rightImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rightImage', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  choice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  creditCounterTraining = new visual.TextStim({
    win: psychoJS.window,
    name: 'creditCounterTraining',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.65), 0.42], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Run 'Begin Experiment' code from autoSelect
  psychoJS.experiment.addData("stimuli_set", stimuli_file);
  console.log(`Randomly assigned stimuli set: ${stimuli_file}`);
  correct_trials_training = 0;
  total_trials_training = 0;
  response_made_training = false;
  selected_image = null;
  selected_credits = 0;
  autoselection_training = false;
  creditsEarnedTraining = 0;
  choice.keys = [];
  choice.rt = null;
  rt_clock_training = new util.Clock();
  
  // Initialize components for Routine "TrainingFeedback"
  TrainingFeedbackClock = new util.Clock();
  selectedImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'selectedImage', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  creditsText = new visual.TextStim({
    win: psychoJS.window,
    name: 'creditsText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.37)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  creditCounterTraining_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'creditCounterTraining_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.65), 0.42], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "TrainingCredits"
  TrainingCreditsClock = new util.Clock();
  TrainingTotalCredits = new visual.TextStim({
    win: psychoJS.window,
    name: 'TrainingTotalCredits',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code_2
  TrainingTotalCredits.text = "";
  
  // Initialize components for Routine "TrainingEnd"
  TrainingEndClock = new util.Clock();
  text_28 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_28',
    text: 'The Learning has now finished.\n\nYou will start  the Training now.\n\nPress SPACE to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "CheckPhasePrompt"
  CheckPhasePromptClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Are you ready to begin the Training?\n\nIf yes, press Y. \nIf no, press N.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "CheckPhaseInstructions"
  CheckPhaseInstructionsClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'You are now starting the Training!\n\nIn the Training, you must choose the image with the higher credit on each trial. You must use LEFT ARROW (←) and RIGHT ARROW (→) keys to make selections with your RIGHT HAND.\n\nIn this part, credits cannot be won as this is only to to assess your learning of the images before the Main Experiment begins. \n\nOnce you reach 18 correct responses, this part will end automatically.\n\nPress SPACE to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "CheckPhase"
  CheckPhaseClock = new util.Clock();
  left = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  right = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code_4
  psychoJS.experiment.addData("stimuli_file", stimuli_file);
  response_made_check = false;
  CPfeedbackText = "";
  correct_responses_cp = 0;
  incorrect_responses_cp = 0;
  check_phase_completed = false;
  check_phase_failed = false;
  rt_clock_check = new util.Clock();
  response.keys = [];
  response.rt = null;
  incorrect_trials = [];
  all_trials = [];
  recycled_index = 0;
  
  // Initialize components for Routine "CheckPhaseFeedback"
  CheckPhaseFeedbackClock = new util.Clock();
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  // Initialize components for Routine "nReps"
  nRepsClock = new util.Clock();
  // Initialize components for Routine "CheckPhaseFail"
  CheckPhaseFailClock = new util.Clock();
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: 'You did not reach the required number of correct responses.\n\nUnfortunately, you cannot proceed with the rest of the study.\n\nYou will now be redirected to Prolific.\n\nPlease click on "Leave".',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "CheckPhaseEnd"
  CheckPhaseEndClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Training has now finished.\n\nYou will start  the MAIN EXPERIMENT now.\n\nPress SPACE to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "MainPrompt"
  MainPromptClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Are you ready to begin the Main Experiment?\n\nIf yes, press Y. \nIf no, press N.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "MainInstructions"
  MainInstructionsClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'You are about to start the Main Experiment!\n\nThe experiment consists of 8 blocks of 20 trials. \nYou will again be offered a choice between previously learned images, which corresponds to an amount of credits that will count towards the final bonus payment. \n\nChoices will consist of two or three options, selected using the LEFT (←), RIGHT (→) and UP (↑) arrow keys on the keyboard using your RIGHT HAND.\n\nYou will have 2.5 seconds to make your choice, otherwise the lowest value option will be automatically selected. \n\nPress SPACE to proceed.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "MainInstructions2"
  MainInstructions2Clock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'RatingScale.png', mask : undefined,
    ori : 0.0, pos : [0, 0.2], size : [0.7, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'During the experiment you will also be asked to rate the difficulty of certain choices. \n\nUse the LEFT (←) and RIGHT (→) arrow keys to choose a value on the rating scale and press SPACE to confirm.\n\nPress SPACE to confirm. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ComprehensionCheckMain1"
  ComprehensionCheckMain1Clock = new util.Clock();
  text_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_20',
    text: 'How many seconds do you have to make a choice in the main experiment ?\n\n(A) 1 second\n(B) 2.5 seconds\n(C) 4 seconds',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_26 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ComprehensionCheckMain2"
  ComprehensionCheckMain2Clock = new util.Clock();
  text_26 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_26',
    text: 'Which key do you press to select the left image?\n\n(A) Left arrow\n(B) Right arrow\n(C) Up arrow',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_33 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "comprehensionresult"
  comprehensionresultClock = new util.Clock();
  text_27 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_27',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_34 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code_32
  comprehension_main_correct = false;
  
  // Initialize components for Routine "Blocks"
  BlocksClock = new util.Clock();
  // Run 'Begin Experiment' code from code_24
  blockNumber = 1;
  trialCount = 0;
  blockSizes = [20, 21, 20, 21, 20, 21, 20, 21];
  currentBlockSize = blockSizes[(blockNumber - 1)];
  
  blockText = new visual.TextStim({
    win: psychoJS.window,
    name: 'blockText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "MainExp"
  MainExpClock = new util.Clock();
  // Run 'Begin Experiment' code from code_23
  shuffled_trials = [];
  attention_check_trials = [];
  regular_trials = [];
  attention_trial = [];
  blocks = [];
  block_size = 20;
  start_idx = 0;
  end_idx = 0;
  correct_trials_main = 0;
  total_trials_main = 0;
  
  attention = new visual.TextStim({
    win: psychoJS.window,
    name: 'attention',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  leftimage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'leftimage', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.3)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  rightimage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rightimage', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.3)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  upperimage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'upperimage', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.1], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  selection = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  creditCounterMain = new visual.TextStim({
    win: psychoJS.window,
    name: 'creditCounterMain',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.65), 0.42], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Run 'Begin Experiment' code from code_8
  creditsEarned = 0;
  response_made = false;
  chosenimage = "grey.png";
  chosencredit = 0;
  totalCredits = 0;
  auto_selection = false;
  attention_text = "";
  rt_clock = new util.Clock();
  selection.keys = [];
  selection.rt = null;
  timed_out_trials = [];
  
  // Initialize components for Routine "MainExpFeedback"
  MainExpFeedbackClock = new util.Clock();
  decisionImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'decisionImage', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.37)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  creditCounter = new visual.TextStim({
    win: psychoJS.window,
    name: 'creditCounter',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.65), 0.42], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Rating"
  RatingClock = new util.Clock();
  // Run 'Begin Experiment' code from code_33
  ratingTrialCounter = 0;
  slider_initialized = false;
  
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: 'Please rate THE DIFFICULTY OF THE LAST TRIAL by clicking on the scale below USING YOUR MOUSE.\n\nAfter you select a rating between 0-10, press SPACE to confirm.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_17 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  difficultySlider = new visual.Slider({
    win: psychoJS.window, name: 'difficultySlider',
    startValue: undefined,
    size: [1, 0.1], pos: [0, (- 0.2)], ori: 0.0, units: 'height',
    labels: ["Very\neasy", "Very\ndifficult"], fontSize: 0.03, ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RATING", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  // Initialize components for Routine "TimedOutTrials"
  TimedOutTrialsClock = new util.Clock();
  // Initialize components for Routine "Recovery"
  RecoveryClock = new util.Clock();
  imageleft = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imageleft', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  imageright = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imageright', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  imageup = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imageup', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.25], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  key_resp_19 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  creditCounterRecovery = new visual.TextStim({
    win: psychoJS.window,
    name: 'creditCounterRecovery',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.65), 0.42], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Run 'Begin Experiment' code from code_13
  response_made_recovery = false;
  chosenimagerecovery = null;
  chosencreditrecovery = 0;
  key_resp_19.keys = [];
  key_resp_19.rt = null;
  rt_clock_recovery = new util.Clock();
  
  // Initialize components for Routine "RecoveryFeedback"
  RecoveryFeedbackClock = new util.Clock();
  chosenImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'chosenImage', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_16',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.37)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  creditCounter_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'creditCounter_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.65), 0.42], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "TotalCredits"
  TotalCreditsClock = new util.Clock();
  totaltrainingmaincredits = new visual.TextStim({
    win: psychoJS.window,
    name: 'totaltrainingmaincredits',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_18 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code_17
  bonus = 0;
  totaltrainingmaincredits.text = "";
  
  // Initialize components for Routine "Wait"
  WaitClock = new util.Clock();
  text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_17',
    text: 'Saving your data, please wait…\n\nYou will be redirected to Qualtrics to complete the questionnaires in a few seconds.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_30_allKeys;
var IntroductionComponents;
function IntroductionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Introduction' ---
    t = 0;
    IntroductionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_30.keys = undefined;
    key_resp_30.rt = undefined;
    _key_resp_30_allKeys = [];
    // keep track of which components have finished
    IntroductionComponents = [];
    IntroductionComponents.push(text_22);
    IntroductionComponents.push(key_resp_30);
    
    for (const thisComponent of IntroductionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function IntroductionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Introduction' ---
    // get current time
    t = IntroductionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_22* updates
    if (t >= 0.0 && text_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_22.tStart = t;  // (not accounting for frame time here)
      text_22.frameNStart = frameN;  // exact frame index
      
      text_22.setAutoDraw(true);
    }

    
    // *key_resp_30* updates
    if (t >= 0.0 && key_resp_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_30.tStart = t;  // (not accounting for frame time here)
      key_resp_30.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_30.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_30.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_30.clearEvents(); });
    }

    if (key_resp_30.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_30.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_30_allKeys = _key_resp_30_allKeys.concat(theseKeys);
      if (_key_resp_30_allKeys.length > 0) {
        key_resp_30.keys = _key_resp_30_allKeys[_key_resp_30_allKeys.length - 1].name;  // just the last key pressed
        key_resp_30.rt = _key_resp_30_allKeys[_key_resp_30_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of IntroductionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function IntroductionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Introduction' ---
    for (const thisComponent of IntroductionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_30.corr, level);
    }
    psychoJS.experiment.addData('key_resp_30.keys', key_resp_30.keys);
    if (typeof key_resp_30.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_30.rt', key_resp_30.rt);
        routineTimer.reset();
        }
    
    key_resp_30.stop();
    // the Routine "Introduction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prolificID;
var _key_resp_28_allKeys;
var ParticipantInformationComponents;
function ParticipantInformationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ParticipantInformation' ---
    t = 0;
    ParticipantInformationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_25
    prolificID = expInfo["participant"];
    psychoJS.experiment.addData("PROLIFIC_PID", prolificID);
    psychoJS.experiment.addData("ParticipantID", prolificID);
    console.log(`Prolific ID: ${prolificID}`);
    
    key_resp_28.keys = undefined;
    key_resp_28.rt = undefined;
    _key_resp_28_allKeys = [];
    // keep track of which components have finished
    ParticipantInformationComponents = [];
    ParticipantInformationComponents.push(participantinfo);
    ParticipantInformationComponents.push(key_resp_28);
    
    for (const thisComponent of ParticipantInformationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ParticipantInformationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ParticipantInformation' ---
    // get current time
    t = ParticipantInformationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *participantinfo* updates
    if (t >= 0.0 && participantinfo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      participantinfo.tStart = t;  // (not accounting for frame time here)
      participantinfo.frameNStart = frameN;  // exact frame index
      
      participantinfo.setAutoDraw(true);
    }

    
    // *key_resp_28* updates
    if (t >= 0.0 && key_resp_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_28.tStart = t;  // (not accounting for frame time here)
      key_resp_28.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_28.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_28.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_28.clearEvents(); });
    }

    if (key_resp_28.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_28.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_28_allKeys = _key_resp_28_allKeys.concat(theseKeys);
      if (_key_resp_28_allKeys.length > 0) {
        key_resp_28.keys = _key_resp_28_allKeys[_key_resp_28_allKeys.length - 1].name;  // just the last key pressed
        key_resp_28.rt = _key_resp_28_allKeys[_key_resp_28_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ParticipantInformationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ParticipantInformationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ParticipantInformation' ---
    for (const thisComponent of ParticipantInformationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_28.corr, level);
    }
    psychoJS.experiment.addData('key_resp_28.keys', key_resp_28.keys);
    if (typeof key_resp_28.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_28.rt', key_resp_28.rt);
        routineTimer.reset();
        }
    
    key_resp_28.stop();
    // the Routine "ParticipantInformation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_10_allKeys;
var RTCalib_promptComponents;
function RTCalib_promptRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'RTCalib_prompt' ---
    t = 0;
    RTCalib_promptClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // keep track of which components have finished
    RTCalib_promptComponents = [];
    RTCalib_promptComponents.push(text_6);
    RTCalib_promptComponents.push(key_resp_10);
    
    for (const thisComponent of RTCalib_promptComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function RTCalib_promptRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'RTCalib_prompt' ---
    // get current time
    t = RTCalib_promptClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }

    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RTCalib_promptComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RTCalib_promptRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'RTCalib_prompt' ---
    for (const thisComponent of RTCalib_promptComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_10.corr, level);
    }
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // the Routine "RTCalib_prompt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_29_allKeys;
var RTCalib_InstructionsComponents;
function RTCalib_InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'RTCalib_Instructions' ---
    t = 0;
    RTCalib_InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_29.keys = undefined;
    key_resp_29.rt = undefined;
    _key_resp_29_allKeys = [];
    // keep track of which components have finished
    RTCalib_InstructionsComponents = [];
    RTCalib_InstructionsComponents.push(text_23);
    RTCalib_InstructionsComponents.push(key_resp_29);
    
    for (const thisComponent of RTCalib_InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function RTCalib_InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'RTCalib_Instructions' ---
    // get current time
    t = RTCalib_InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_23* updates
    if (t >= 0.0 && text_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_23.tStart = t;  // (not accounting for frame time here)
      text_23.frameNStart = frameN;  // exact frame index
      
      text_23.setAutoDraw(true);
    }

    
    // *key_resp_29* updates
    if (t >= 0.0 && key_resp_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_29.tStart = t;  // (not accounting for frame time here)
      key_resp_29.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_29.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_29.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_29.clearEvents(); });
    }

    if (key_resp_29.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_29.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_29_allKeys = _key_resp_29_allKeys.concat(theseKeys);
      if (_key_resp_29_allKeys.length > 0) {
        key_resp_29.keys = _key_resp_29_allKeys[_key_resp_29_allKeys.length - 1].name;  // just the last key pressed
        key_resp_29.rt = _key_resp_29_allKeys[_key_resp_29_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RTCalib_InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RTCalib_InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'RTCalib_Instructions' ---
    for (const thisComponent of RTCalib_InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_29.corr, level);
    }
    psychoJS.experiment.addData('key_resp_29.keys', key_resp_29.keys);
    if (typeof key_resp_29.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_29.rt', key_resp_29.rt);
        routineTimer.reset();
        }
    
    key_resp_29.stop();
    // the Routine "RTCalib_Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var RTloop;
function RTloopLoopBegin(RTloopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    RTloop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 100, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'RTloop'
    });
    psychoJS.experiment.addLoop(RTloop); // add the loop to the experiment
    currentLoop = RTloop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRTloop of RTloop) {
      snapshot = RTloop.getSnapshot();
      RTloopLoopScheduler.add(importConditions(snapshot));
      RTloopLoopScheduler.add(RT_Condition_InstructionsRoutineBegin(snapshot));
      RTloopLoopScheduler.add(RT_Condition_InstructionsRoutineEachFrame());
      RTloopLoopScheduler.add(RT_Condition_InstructionsRoutineEnd(snapshot));
      RTloopLoopScheduler.add(RT_CalibRoutineBegin(snapshot));
      RTloopLoopScheduler.add(RT_CalibRoutineEachFrame());
      RTloopLoopScheduler.add(RT_CalibRoutineEnd(snapshot));
      RTloopLoopScheduler.add(RT_WarningTextRoutineBegin(snapshot));
      RTloopLoopScheduler.add(RT_WarningTextRoutineEachFrame());
      RTloopLoopScheduler.add(RT_WarningTextRoutineEnd(snapshot));
      RTloopLoopScheduler.add(RTloopLoopEndIteration(RTloopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function RTloopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(RTloop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function RTloopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var comprehensiontrainingloop;
function comprehensiontrainingloopLoopBegin(comprehensiontrainingloopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    comprehensiontrainingloop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 100, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'comprehensiontrainingloop'
    });
    psychoJS.experiment.addLoop(comprehensiontrainingloop); // add the loop to the experiment
    currentLoop = comprehensiontrainingloop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisComprehensiontrainingloop of comprehensiontrainingloop) {
      snapshot = comprehensiontrainingloop.getSnapshot();
      comprehensiontrainingloopLoopScheduler.add(importConditions(snapshot));
      comprehensiontrainingloopLoopScheduler.add(ComprehensionTraining1RoutineBegin(snapshot));
      comprehensiontrainingloopLoopScheduler.add(ComprehensionTraining1RoutineEachFrame());
      comprehensiontrainingloopLoopScheduler.add(ComprehensionTraining1RoutineEnd(snapshot));
      comprehensiontrainingloopLoopScheduler.add(ComprehensionTraining2RoutineBegin(snapshot));
      comprehensiontrainingloopLoopScheduler.add(ComprehensionTraining2RoutineEachFrame());
      comprehensiontrainingloopLoopScheduler.add(ComprehensionTraining2RoutineEnd(snapshot));
      comprehensiontrainingloopLoopScheduler.add(ComprehensionTraining3RoutineBegin(snapshot));
      comprehensiontrainingloopLoopScheduler.add(ComprehensionTraining3RoutineEachFrame());
      comprehensiontrainingloopLoopScheduler.add(ComprehensionTraining3RoutineEnd(snapshot));
      comprehensiontrainingloopLoopScheduler.add(ComprehensionTrainingFeedbackRoutineBegin(snapshot));
      comprehensiontrainingloopLoopScheduler.add(ComprehensionTrainingFeedbackRoutineEachFrame());
      comprehensiontrainingloopLoopScheduler.add(ComprehensionTrainingFeedbackRoutineEnd(snapshot));
      comprehensiontrainingloopLoopScheduler.add(comprehensiontrainingloopLoopEndIteration(comprehensiontrainingloopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function comprehensiontrainingloopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(comprehensiontrainingloop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function comprehensiontrainingloopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var TrainingTrials;
function TrainingTrialsLoopBegin(TrainingTrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    TrainingTrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: stimuli_file,
      seed: undefined, name: 'TrainingTrials'
    });
    psychoJS.experiment.addLoop(TrainingTrials); // add the loop to the experiment
    currentLoop = TrainingTrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrainingTrial of TrainingTrials) {
      snapshot = TrainingTrials.getSnapshot();
      TrainingTrialsLoopScheduler.add(importConditions(snapshot));
      TrainingTrialsLoopScheduler.add(FixationCrossRoutineBegin(snapshot));
      TrainingTrialsLoopScheduler.add(FixationCrossRoutineEachFrame());
      TrainingTrialsLoopScheduler.add(FixationCrossRoutineEnd(snapshot));
      TrainingTrialsLoopScheduler.add(TrainingRoutineBegin(snapshot));
      TrainingTrialsLoopScheduler.add(TrainingRoutineEachFrame());
      TrainingTrialsLoopScheduler.add(TrainingRoutineEnd(snapshot));
      TrainingTrialsLoopScheduler.add(TrainingFeedbackRoutineBegin(snapshot));
      TrainingTrialsLoopScheduler.add(TrainingFeedbackRoutineEachFrame());
      TrainingTrialsLoopScheduler.add(TrainingFeedbackRoutineEnd(snapshot));
      TrainingTrialsLoopScheduler.add(TrainingTrialsLoopEndIteration(TrainingTrialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function TrainingTrialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(TrainingTrials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function TrainingTrialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var CheckPhaseTrials;
function CheckPhaseTrialsLoopBegin(CheckPhaseTrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    CheckPhaseTrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 36, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: stimuli_file,
      seed: undefined, name: 'CheckPhaseTrials'
    });
    psychoJS.experiment.addLoop(CheckPhaseTrials); // add the loop to the experiment
    currentLoop = CheckPhaseTrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisCheckPhaseTrial of CheckPhaseTrials) {
      snapshot = CheckPhaseTrials.getSnapshot();
      CheckPhaseTrialsLoopScheduler.add(importConditions(snapshot));
      CheckPhaseTrialsLoopScheduler.add(FixationCrossRoutineBegin(snapshot));
      CheckPhaseTrialsLoopScheduler.add(FixationCrossRoutineEachFrame());
      CheckPhaseTrialsLoopScheduler.add(FixationCrossRoutineEnd(snapshot));
      CheckPhaseTrialsLoopScheduler.add(CheckPhaseRoutineBegin(snapshot));
      CheckPhaseTrialsLoopScheduler.add(CheckPhaseRoutineEachFrame());
      CheckPhaseTrialsLoopScheduler.add(CheckPhaseRoutineEnd(snapshot));
      CheckPhaseTrialsLoopScheduler.add(CheckPhaseFeedbackRoutineBegin(snapshot));
      CheckPhaseTrialsLoopScheduler.add(CheckPhaseFeedbackRoutineEachFrame());
      CheckPhaseTrialsLoopScheduler.add(CheckPhaseFeedbackRoutineEnd(snapshot));
      CheckPhaseTrialsLoopScheduler.add(CheckPhaseTrialsLoopEndIteration(CheckPhaseTrialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function CheckPhaseTrialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(CheckPhaseTrials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function CheckPhaseTrialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: n_reps_checkfail, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(CheckPhaseFailRoutineBegin(snapshot));
      trialsLoopScheduler.add(CheckPhaseFailRoutineEachFrame());
      trialsLoopScheduler.add(CheckPhaseFailRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var comprehensionloop;
function comprehensionloopLoopBegin(comprehensionloopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    comprehensionloop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 100, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'comprehensionloop'
    });
    psychoJS.experiment.addLoop(comprehensionloop); // add the loop to the experiment
    currentLoop = comprehensionloop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisComprehensionloop of comprehensionloop) {
      snapshot = comprehensionloop.getSnapshot();
      comprehensionloopLoopScheduler.add(importConditions(snapshot));
      comprehensionloopLoopScheduler.add(ComprehensionCheckMain1RoutineBegin(snapshot));
      comprehensionloopLoopScheduler.add(ComprehensionCheckMain1RoutineEachFrame());
      comprehensionloopLoopScheduler.add(ComprehensionCheckMain1RoutineEnd(snapshot));
      comprehensionloopLoopScheduler.add(ComprehensionCheckMain2RoutineBegin(snapshot));
      comprehensionloopLoopScheduler.add(ComprehensionCheckMain2RoutineEachFrame());
      comprehensionloopLoopScheduler.add(ComprehensionCheckMain2RoutineEnd(snapshot));
      comprehensionloopLoopScheduler.add(comprehensionresultRoutineBegin(snapshot));
      comprehensionloopLoopScheduler.add(comprehensionresultRoutineEachFrame());
      comprehensionloopLoopScheduler.add(comprehensionresultRoutineEnd(snapshot));
      comprehensionloopLoopScheduler.add(comprehensionloopLoopEndIteration(comprehensionloopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function comprehensionloopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(comprehensionloop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function comprehensionloopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var MainExpTrials;
function MainExpTrialsLoopBegin(MainExpTrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    MainExpTrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: main_exp_file,
      seed: undefined, name: 'MainExpTrials'
    });
    psychoJS.experiment.addLoop(MainExpTrials); // add the loop to the experiment
    currentLoop = MainExpTrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisMainExpTrial of MainExpTrials) {
      snapshot = MainExpTrials.getSnapshot();
      MainExpTrialsLoopScheduler.add(importConditions(snapshot));
      MainExpTrialsLoopScheduler.add(BlocksRoutineBegin(snapshot));
      MainExpTrialsLoopScheduler.add(BlocksRoutineEachFrame());
      MainExpTrialsLoopScheduler.add(BlocksRoutineEnd(snapshot));
      MainExpTrialsLoopScheduler.add(FixationCrossRoutineBegin(snapshot));
      MainExpTrialsLoopScheduler.add(FixationCrossRoutineEachFrame());
      MainExpTrialsLoopScheduler.add(FixationCrossRoutineEnd(snapshot));
      MainExpTrialsLoopScheduler.add(MainExpRoutineBegin(snapshot));
      MainExpTrialsLoopScheduler.add(MainExpRoutineEachFrame());
      MainExpTrialsLoopScheduler.add(MainExpRoutineEnd(snapshot));
      MainExpTrialsLoopScheduler.add(MainExpFeedbackRoutineBegin(snapshot));
      MainExpTrialsLoopScheduler.add(MainExpFeedbackRoutineEachFrame());
      MainExpTrialsLoopScheduler.add(MainExpFeedbackRoutineEnd(snapshot));
      MainExpTrialsLoopScheduler.add(RatingRoutineBegin(snapshot));
      MainExpTrialsLoopScheduler.add(RatingRoutineEachFrame());
      MainExpTrialsLoopScheduler.add(RatingRoutineEnd(snapshot));
      MainExpTrialsLoopScheduler.add(MainExpTrialsLoopEndIteration(MainExpTrialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function MainExpTrialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(MainExpTrials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function MainExpTrialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var RecoveryLoop;
function RecoveryLoopLoopBegin(RecoveryLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    RecoveryLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: n_recovery_trials, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'RecoveryLoop'
    });
    psychoJS.experiment.addLoop(RecoveryLoop); // add the loop to the experiment
    currentLoop = RecoveryLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRecoveryLoop of RecoveryLoop) {
      snapshot = RecoveryLoop.getSnapshot();
      RecoveryLoopLoopScheduler.add(importConditions(snapshot));
      RecoveryLoopLoopScheduler.add(RecoveryRoutineBegin(snapshot));
      RecoveryLoopLoopScheduler.add(RecoveryRoutineEachFrame());
      RecoveryLoopLoopScheduler.add(RecoveryRoutineEnd(snapshot));
      RecoveryLoopLoopScheduler.add(RecoveryFeedbackRoutineBegin(snapshot));
      RecoveryLoopLoopScheduler.add(RecoveryFeedbackRoutineEachFrame());
      RecoveryLoopLoopScheduler.add(RecoveryFeedbackRoutineEnd(snapshot));
      RecoveryLoopLoopScheduler.add(RecoveryLoopLoopEndIteration(RecoveryLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function RecoveryLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(RecoveryLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function RecoveryLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _key_resp_21_allKeys;
var RT_Condition_InstructionsComponents;
function RT_Condition_InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'RT_Condition_Instructions' ---
    t = 0;
    RT_Condition_InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_18
    console.log(`Current condition: ${current_condition}`);
    console.log(`Instruction shown? ${instruction_shown[current_condition]}`);
    if ((! instruction_shown[current_condition])) {
        if ((current_condition === "left")) {
            instructionText.text = "Please press the LEFT arrow key (\u2190) when you see the RED BOX.\nPress SPACE to continue.";
        } else {
            if ((current_condition === "right")) {
                instructionText.text = "Please press the RIGHT arrow key (\u2192) when you see the RED BOX.\nPress SPACE to continue.";
            } else {
                if ((current_condition === "up")) {
                    instructionText.text = "Please press the UP arrow key (\u2191) when you see the RED BOX.\nPress SPACE to continue.";
                }
            }
        }
        instruction_shown[current_condition] = true;
        console.log(`Instructions for the current condition: ${current_condition}`);
    } else {
        continueRoutine = false;
    }
    
    key_resp_21.keys = undefined;
    key_resp_21.rt = undefined;
    _key_resp_21_allKeys = [];
    // keep track of which components have finished
    RT_Condition_InstructionsComponents = [];
    RT_Condition_InstructionsComponents.push(instructionText);
    RT_Condition_InstructionsComponents.push(key_resp_21);
    
    for (const thisComponent of RT_Condition_InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function RT_Condition_InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'RT_Condition_Instructions' ---
    // get current time
    t = RT_Condition_InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructionText* updates
    if (t >= 0.0 && instructionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructionText.tStart = t;  // (not accounting for frame time here)
      instructionText.frameNStart = frameN;  // exact frame index
      
      instructionText.setAutoDraw(true);
    }

    
    // *key_resp_21* updates
    if (t >= 0.0 && key_resp_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_21.tStart = t;  // (not accounting for frame time here)
      key_resp_21.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_21.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_21.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_21.clearEvents(); });
    }

    if (key_resp_21.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_21.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_21_allKeys = _key_resp_21_allKeys.concat(theseKeys);
      if (_key_resp_21_allKeys.length > 0) {
        key_resp_21.keys = _key_resp_21_allKeys[_key_resp_21_allKeys.length - 1].name;  // just the last key pressed
        key_resp_21.rt = _key_resp_21_allKeys[_key_resp_21_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RT_Condition_InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RT_Condition_InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'RT_Condition_Instructions' ---
    for (const thisComponent of RT_Condition_InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_18
    psychoJS.eventManager.clearEvents();
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_21.corr, level);
    }
    psychoJS.experiment.addData('key_resp_21.keys', key_resp_21.keys);
    if (typeof key_resp_21.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_21.rt', key_resp_21.rt);
        routineTimer.reset();
        }
    
    key_resp_21.stop();
    // the Routine "RT_Condition_Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var jitter;
var boxPos;
var _keyResponse_allKeys;
var RT_CalibComponents;
function RT_CalibRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'RT_Calib' ---
    t = 0;
    RT_CalibClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_19
    jitter = ((Math.random() * (6 - 2)) + 2);
    function get_random_position(box_width, box_height) {
        var screen_height, screen_width, x, x_max, x_min, y, y_max, y_min;
        screen_width = 1.0;
        screen_height = 1.0;
        box_width = 0.1;
        box_height = 0.1;
        x_min = (((- screen_width) / 2) + (box_width / 2));
        x_max = ((screen_width / 2) - (box_width / 2));
        y_min = (((- screen_height) / 2) + (box_height / 2));
        y_max = ((screen_height / 2) - (box_height / 2));
        x = ((Math.random() * (x_max - x_min)) + x_min);
        y = ((Math.random() * (y_max - y_min)) + y_min);
        return [x, y];
    }
    boxPos = get_random_position(0.1, 0.1);
    console.log(`Red box position: ${boxPos}`);
    console.log(`Jitter duration: ${util.pad(Number.parseFloat(jitter).toFixed(2), 1)} seconds`);
    console.log(`Current condition: ${current_condition}`);
    
    fixationCross.setText('+');
    redBox.setPos(boxPos);
    keyResponse.keys = undefined;
    keyResponse.rt = undefined;
    _keyResponse_allKeys = [];
    // keep track of which components have finished
    RT_CalibComponents = [];
    RT_CalibComponents.push(fixationCross);
    RT_CalibComponents.push(redBox);
    RT_CalibComponents.push(keyResponse);
    
    for (const thisComponent of RT_CalibComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function RT_CalibRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'RT_Calib' ---
    // get current time
    t = RT_CalibClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixationCross* updates
    if (t >= 0.0 && fixationCross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixationCross.tStart = t;  // (not accounting for frame time here)
      fixationCross.frameNStart = frameN;  // exact frame index
      
      fixationCross.setAutoDraw(true);
    }

    frameRemains = 0.0 + jitter - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixationCross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixationCross.setAutoDraw(false);
    }
    
    // *redBox* updates
    if (t >= jitter && redBox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      redBox.tStart = t;  // (not accounting for frame time here)
      redBox.frameNStart = frameN;  // exact frame index
      
      redBox.setAutoDraw(true);
    }

    frameRemains = jitter + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (redBox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      redBox.setAutoDraw(false);
    }
    
    // *keyResponse* updates
    if (t >= jitter && keyResponse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyResponse.tStart = t;  // (not accounting for frame time here)
      keyResponse.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyResponse.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyResponse.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyResponse.clearEvents(); });
    }

    frameRemains = jitter + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (keyResponse.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      keyResponse.status = PsychoJS.Status.FINISHED;
  }

    if (keyResponse.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyResponse.getKeys({keyList: ['left', 'right', 'l', 'r', 'up'], waitRelease: false});
      _keyResponse_allKeys = _keyResponse_allKeys.concat(theseKeys);
      if (_keyResponse_allKeys.length > 0) {
        keyResponse.keys = _keyResponse_allKeys[0].name;  // just the first key pressed
        keyResponse.rt = _keyResponse_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RT_CalibComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _pj;
function RT_CalibRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'RT_Calib' ---
    for (const thisComponent of RT_CalibComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(keyResponse.corr, level);
    }
    psychoJS.experiment.addData('keyResponse.keys', keyResponse.keys);
    if (typeof keyResponse.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyResponse.rt', keyResponse.rt);
        routineTimer.reset();
        }
    
    keyResponse.stop();
    // Run 'End Routine' code from code_31
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    psychoJS.experiment.addData("CurrentCondition", current_condition);
    if (keyResponse.keys) {
        key = keyResponse.keys[0];
        reactionTime = keyResponse.rt;
        console.log(`Key pressed: ${key}, RT: ${reactionTime}s`);
        psychoJS.experiment.addData("CalibKeyPressed", key);
        psychoJS.experiment.addData("CalibRT", reactionTime);
        if (_pj.in_es6(key, allowed_keys[current_condition])) {
            correctTrialCount[current_condition] += 1;
            console.log(`Correct key! Total correct for ${current_condition}: ${correctTrialCount[current_condition]}`);
            wrongButtonPress = false;
            noResponse = false;
            psychoJS.experiment.addData("CalibAccuracy", "correct");
        } else {
            wrongButtonPress = true;
            console.log(`Wrong key '${key}' pressed.`);
            noResponse = false;
            psychoJS.experiment.addData("CalibAccuracy", "false");
        }
    } else {
        console.log("No response given.");
        wrongButtonPress = false;
        noResponse = true;
        psychoJS.experiment.addData("CalibKeyPressed", "None");
        psychoJS.experiment.addData("CalibRT", "NA");
        psychoJS.experiment.addData("CalibAccuracy", "no_response_calib");
    }
    if ((correctTrialCount[current_condition] >= 6)) {
        console.log(`Condition '${current_condition}' completed with ${correctTrialCount[current_condition]} correct trials.`);
        condition_index += 1;
    }
    if ((condition_index < conditions.length)) {
        current_condition = conditions[condition_index];
        console.log(`Switching to condition: ${current_condition}`);
    } else {
        console.log("All conditions completed. Ending Reaction Time Calibration.");
        RTloop.finished = true;
    }
    
    // the Routine "RT_Calib" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var RT_WarningTextComponents;
function RT_WarningTextRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'RT_WarningText' ---
    t = 0;
    RT_WarningTextClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    warningText.setText(warningText.text);
    // Run 'Begin Routine' code from code_20
    if (wrongButtonPress) {
        warningText.text = "Wrong button press! \nPlease follow the instructions.";
    } else {
        if (noResponse) {
            warningText.text = "No response! \nPlease press the required key when you see the RED BOX.";
        } else {
            warningText.text = "";
        }
    }
    console.log(`Warning text shown: ${warningText.text}`);
    
    // keep track of which components have finished
    RT_WarningTextComponents = [];
    RT_WarningTextComponents.push(warningText);
    
    for (const thisComponent of RT_WarningTextComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function RT_WarningTextRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'RT_WarningText' ---
    // get current time
    t = RT_WarningTextClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *warningText* updates
    if (t >= 0.0 && warningText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warningText.tStart = t;  // (not accounting for frame time here)
      warningText.frameNStart = frameN;  // exact frame index
      
      warningText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (warningText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      warningText.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RT_WarningTextComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RT_WarningTextRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'RT_WarningText' ---
    for (const thisComponent of RT_WarningTextComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_20
    wrongButtonPress = false;
    noResponse = false;
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_allKeys;
var RT_EndComponents;
function RT_EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'RT_End' ---
    t = 0;
    RT_EndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    RT_EndComponents = [];
    RT_EndComponents.push(text_24);
    RT_EndComponents.push(key_resp);
    
    for (const thisComponent of RT_EndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function RT_EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'RT_End' ---
    // get current time
    t = RT_EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_24* updates
    if (t >= 0.0 && text_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_24.tStart = t;  // (not accounting for frame time here)
      text_24.frameNStart = frameN;  // exact frame index
      
      text_24.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RT_EndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RT_EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'RT_End' ---
    for (const thisComponent of RT_EndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "RT_End" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var InitializationComponents;
function InitializationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Initialization' ---
    t = 0;
    InitializationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    InitializationComponents = [];
    
    for (const thisComponent of InitializationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InitializationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Initialization' ---
    // get current time
    t = InitializationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InitializationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InitializationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Initialization' ---
    for (const thisComponent of InitializationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Initialization" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_3_allKeys;
var TrainingPromptComponents;
function TrainingPromptRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TrainingPrompt' ---
    t = 0;
    TrainingPromptClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    TrainingPromptComponents = [];
    TrainingPromptComponents.push(prompt2);
    TrainingPromptComponents.push(key_resp_3);
    
    for (const thisComponent of TrainingPromptComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TrainingPromptRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TrainingPrompt' ---
    // get current time
    t = TrainingPromptClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prompt2* updates
    if (t >= 0.0 && prompt2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prompt2.tStart = t;  // (not accounting for frame time here)
      prompt2.frameNStart = frameN;  // exact frame index
      
      prompt2.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TrainingPromptComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TrainingPromptRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TrainingPrompt' ---
    for (const thisComponent of TrainingPromptComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "TrainingPrompt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_2_allKeys;
var TrainingInstructionsComponents;
function TrainingInstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TrainingInstructions' ---
    t = 0;
    TrainingInstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    TrainingInstructionsComponents = [];
    TrainingInstructionsComponents.push(TrainingInstruction);
    TrainingInstructionsComponents.push(key_resp_2);
    
    for (const thisComponent of TrainingInstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TrainingInstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TrainingInstructions' ---
    // get current time
    t = TrainingInstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *TrainingInstruction* updates
    if (t >= 0.0 && TrainingInstruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TrainingInstruction.tStart = t;  // (not accounting for frame time here)
      TrainingInstruction.frameNStart = frameN;  // exact frame index
      
      TrainingInstruction.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TrainingInstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TrainingInstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TrainingInstructions' ---
    for (const thisComponent of TrainingInstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "TrainingInstructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_23_allKeys;
var ComprehensionTraining1Components;
function ComprehensionTraining1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ComprehensionTraining1' ---
    t = 0;
    ComprehensionTraining1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_23.keys = undefined;
    key_resp_23.rt = undefined;
    _key_resp_23_allKeys = [];
    // keep track of which components have finished
    ComprehensionTraining1Components = [];
    ComprehensionTraining1Components.push(text_14);
    ComprehensionTraining1Components.push(key_resp_23);
    
    for (const thisComponent of ComprehensionTraining1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ComprehensionTraining1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ComprehensionTraining1' ---
    // get current time
    t = ComprehensionTraining1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_14* updates
    if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
    }

    
    // *key_resp_23* updates
    if (t >= 0.0 && key_resp_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_23.tStart = t;  // (not accounting for frame time here)
      key_resp_23.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_23.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_23.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_23.clearEvents(); });
    }

    if (key_resp_23.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_23.getKeys({keyList: ['a', 'b', 'c'], waitRelease: false});
      _key_resp_23_allKeys = _key_resp_23_allKeys.concat(theseKeys);
      if (_key_resp_23_allKeys.length > 0) {
        key_resp_23.keys = _key_resp_23_allKeys[_key_resp_23_allKeys.length - 1].name;  // just the last key pressed
        key_resp_23.rt = _key_resp_23_allKeys[_key_resp_23_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ComprehensionTraining1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ComprehensionTraining1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ComprehensionTraining1' ---
    for (const thisComponent of ComprehensionTraining1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_23.corr, level);
    }
    psychoJS.experiment.addData('key_resp_23.keys', key_resp_23.keys);
    if (typeof key_resp_23.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_23.rt', key_resp_23.rt);
        routineTimer.reset();
        }
    
    key_resp_23.stop();
    // the Routine "ComprehensionTraining1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_22_allKeys;
var ComprehensionTraining2Components;
function ComprehensionTraining2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ComprehensionTraining2' ---
    t = 0;
    ComprehensionTraining2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_22.keys = undefined;
    key_resp_22.rt = undefined;
    _key_resp_22_allKeys = [];
    // keep track of which components have finished
    ComprehensionTraining2Components = [];
    ComprehensionTraining2Components.push(comprehension_2);
    ComprehensionTraining2Components.push(key_resp_22);
    
    for (const thisComponent of ComprehensionTraining2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ComprehensionTraining2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ComprehensionTraining2' ---
    // get current time
    t = ComprehensionTraining2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *comprehension_2* updates
    if (t >= 0.0 && comprehension_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      comprehension_2.tStart = t;  // (not accounting for frame time here)
      comprehension_2.frameNStart = frameN;  // exact frame index
      
      comprehension_2.setAutoDraw(true);
    }

    
    // *key_resp_22* updates
    if (t >= 0.0 && key_resp_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_22.tStart = t;  // (not accounting for frame time here)
      key_resp_22.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_22.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_22.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_22.clearEvents(); });
    }

    if (key_resp_22.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_22.getKeys({keyList: ['a', 'b', 'c'], waitRelease: false});
      _key_resp_22_allKeys = _key_resp_22_allKeys.concat(theseKeys);
      if (_key_resp_22_allKeys.length > 0) {
        key_resp_22.keys = _key_resp_22_allKeys[_key_resp_22_allKeys.length - 1].name;  // just the last key pressed
        key_resp_22.rt = _key_resp_22_allKeys[_key_resp_22_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ComprehensionTraining2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ComprehensionTraining2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ComprehensionTraining2' ---
    for (const thisComponent of ComprehensionTraining2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_22.corr, level);
    }
    psychoJS.experiment.addData('key_resp_22.keys', key_resp_22.keys);
    if (typeof key_resp_22.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_22.rt', key_resp_22.rt);
        routineTimer.reset();
        }
    
    key_resp_22.stop();
    // the Routine "ComprehensionTraining2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_24_allKeys;
var ComprehensionTraining3Components;
function ComprehensionTraining3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ComprehensionTraining3' ---
    t = 0;
    ComprehensionTraining3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_24.keys = undefined;
    key_resp_24.rt = undefined;
    _key_resp_24_allKeys = [];
    // keep track of which components have finished
    ComprehensionTraining3Components = [];
    ComprehensionTraining3Components.push(text_19);
    ComprehensionTraining3Components.push(key_resp_24);
    
    for (const thisComponent of ComprehensionTraining3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ComprehensionTraining3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ComprehensionTraining3' ---
    // get current time
    t = ComprehensionTraining3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_19* updates
    if (t >= 0.0 && text_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_19.tStart = t;  // (not accounting for frame time here)
      text_19.frameNStart = frameN;  // exact frame index
      
      text_19.setAutoDraw(true);
    }

    
    // *key_resp_24* updates
    if (t >= 0.0 && key_resp_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_24.tStart = t;  // (not accounting for frame time here)
      key_resp_24.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_24.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_24.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_24.clearEvents(); });
    }

    if (key_resp_24.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_24.getKeys({keyList: ['a', 'b', 'c'], waitRelease: false});
      _key_resp_24_allKeys = _key_resp_24_allKeys.concat(theseKeys);
      if (_key_resp_24_allKeys.length > 0) {
        key_resp_24.keys = _key_resp_24_allKeys[_key_resp_24_allKeys.length - 1].name;  // just the last key pressed
        key_resp_24.rt = _key_resp_24_allKeys[_key_resp_24_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ComprehensionTraining3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ComprehensionTraining3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ComprehensionTraining3' ---
    for (const thisComponent of ComprehensionTraining3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_24.corr, level);
    }
    psychoJS.experiment.addData('key_resp_24.keys', key_resp_24.keys);
    if (typeof key_resp_24.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_24.rt', key_resp_24.rt);
        routineTimer.reset();
        }
    
    key_resp_24.stop();
    // the Routine "ComprehensionTraining3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_25_allKeys;
var correct_answers;
var responses;
var correct;
var comprehension_correct;
var ComprehensionTrainingFeedbackComponents;
function ComprehensionTrainingFeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ComprehensionTrainingFeedback' ---
    t = 0;
    ComprehensionTrainingFeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    comprehensiontrainingfeedback.setText('');
    key_resp_25.keys = undefined;
    key_resp_25.rt = undefined;
    _key_resp_25_allKeys = [];
    // Run 'Begin Routine' code from code_21
    correct_answers = {"key_resp_23": "a", "key_resp_22": "b", "key_resp_24": "b"};
    responses = [key_resp_23.keys, key_resp_22.keys, key_resp_24.keys];
    correct = [(responses[0] === correct_answers["key_resp_23"]), (responses[1] === correct_answers["key_resp_22"]), (responses[2] === correct_answers["key_resp_24"])];
    psychoJS.experiment.addData("resp_q1", responses["key_resp_23"]);
    psychoJS.experiment.addData("resp_q2", responses["key_resp_22"]);
    psychoJS.experiment.addData("resp_q3", responses["key_resp_24"]);
    if ((util.sum(correct) === correct.length)) {
        comprehensiontrainingfeedback.text = "All answers are correct! \nPress SPACE to continue.";
        comprehension_correct = true;
    } else {
        comprehensiontrainingfeedback.text = "Some answers are incorrect. \nPlease press SPACE to try again.";
        comprehension_correct = false;
    }
    
    // keep track of which components have finished
    ComprehensionTrainingFeedbackComponents = [];
    ComprehensionTrainingFeedbackComponents.push(comprehensiontrainingfeedback);
    ComprehensionTrainingFeedbackComponents.push(key_resp_25);
    
    for (const thisComponent of ComprehensionTrainingFeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ComprehensionTrainingFeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ComprehensionTrainingFeedback' ---
    // get current time
    t = ComprehensionTrainingFeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *comprehensiontrainingfeedback* updates
    if (t >= 0.0 && comprehensiontrainingfeedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      comprehensiontrainingfeedback.tStart = t;  // (not accounting for frame time here)
      comprehensiontrainingfeedback.frameNStart = frameN;  // exact frame index
      
      comprehensiontrainingfeedback.setAutoDraw(true);
    }

    
    // *key_resp_25* updates
    if (t >= 0.0 && key_resp_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_25.tStart = t;  // (not accounting for frame time here)
      key_resp_25.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_25.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_25.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_25.clearEvents(); });
    }

    if (key_resp_25.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_25.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_25_allKeys = _key_resp_25_allKeys.concat(theseKeys);
      if (_key_resp_25_allKeys.length > 0) {
        key_resp_25.keys = _key_resp_25_allKeys[_key_resp_25_allKeys.length - 1].name;  // just the last key pressed
        key_resp_25.rt = _key_resp_25_allKeys[_key_resp_25_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ComprehensionTrainingFeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ComprehensionTrainingFeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ComprehensionTrainingFeedback' ---
    for (const thisComponent of ComprehensionTrainingFeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_25.corr, level);
    }
    psychoJS.experiment.addData('key_resp_25.keys', key_resp_25.keys);
    if (typeof key_resp_25.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_25.rt', key_resp_25.rt);
        routineTimer.reset();
        }
    
    key_resp_25.stop();
    // Run 'End Routine' code from code_21
    if (comprehension_correct) {
        comprehensiontrainingloop.finished = true;
    }
    
    // the Routine "ComprehensionTrainingFeedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FixationCrossComponents;
function FixationCrossRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'FixationCross' ---
    t = 0;
    FixationCrossClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    FixationCrossComponents = [];
    FixationCrossComponents.push(text_18);
    
    for (const thisComponent of FixationCrossComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function FixationCrossRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'FixationCross' ---
    // get current time
    t = FixationCrossClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_18* updates
    if (t >= 0.0 && text_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_18.tStart = t;  // (not accounting for frame time here)
      text_18.frameNStart = frameN;  // exact frame index
      
      text_18.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_18.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_18.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FixationCrossComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FixationCrossRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'FixationCross' ---
    for (const thisComponent of FixationCrossComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _choice_allKeys;
var current_training_trial;
var image1file;
var image2file;
var credit1t;
var credit2t;
var leftTrainingimage;
var rightTrainingimage;
var should_swap;
var TrainingComponents;
function TrainingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Training' ---
    t = 0;
    TrainingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    leftImage.setImage(image1);
    rightImage.setImage(image2);
    choice.keys = undefined;
    choice.rt = undefined;
    _choice_allKeys = [];
    creditCounterTraining.setText(("Total Credits: " + creditsEarnedTraining.toString()));
    // Run 'Begin Routine' code from autoSelect
    console.log("Training");
    if ((TrainingTrials.thisN === 0)) {
        shuffled_trials = TrainingTrials.trialList.slice();
        util.shuffle(shuffled_trials);
        TrainingTrials.trialList = shuffled_trials;
    }
    console.log(TrainingTrials.trialList);
    current_training_trial = TrainingTrials.trialList[TrainingTrials.thisN];
    image1file = current_training_trial["image1"];
    image2file = current_training_trial["image2"];
    credit1t = Number.parseInt(current_training_trial["credit1"]);
    credit2t = Number.parseInt(current_training_trial["credit2"]);
    leftImage.setImage(image1file);
    rightImage.setImage(image2file);
    leftTrainingimage = image1file;
    rightTrainingimage = image2file;
    should_swap = (Math.random() > 0.5);
    if (should_swap) {
        leftImage.setImage(image2file);
        rightImage.setImage(image1file);
        [credit1t, credit2t] = [credit2t, credit1t];
        leftTrainingimage = image2file;
        rightTrainingimage = image1file;
        console.log("Randomly swapped images and credits: left <-> right ");
    }
    console.log(`Trial ${(TrainingTrials.thisN + 1)}: Left = ${leftImage.image}, Right = ${rightImage.image}`);
    console.log(`Trial ${(TrainingTrials.thisN + 1)}: ${TrainingTrials.trialList[TrainingTrials.thisN]}`);
    response_made_training = false;
    rt_clock_training.reset();
    
    // keep track of which components have finished
    TrainingComponents = [];
    TrainingComponents.push(leftImage);
    TrainingComponents.push(rightImage);
    TrainingComponents.push(choice);
    TrainingComponents.push(creditCounterTraining);
    
    for (const thisComponent of TrainingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var keys_training;
function TrainingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Training' ---
    // get current time
    t = TrainingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *leftImage* updates
    if (t >= 0 && leftImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      leftImage.tStart = t;  // (not accounting for frame time here)
      leftImage.frameNStart = frameN;  // exact frame index
      
      leftImage.setAutoDraw(true);
    }

    frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (leftImage.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      leftImage.setAutoDraw(false);
    }
    
    // *rightImage* updates
    if (t >= 0 && rightImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightImage.tStart = t;  // (not accounting for frame time here)
      rightImage.frameNStart = frameN;  // exact frame index
      
      rightImage.setAutoDraw(true);
    }

    frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rightImage.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rightImage.setAutoDraw(false);
    }
    
    // *choice* updates
    if (t >= 0 && choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice.tStart = t;  // (not accounting for frame time here)
      choice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { choice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { choice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { choice.clearEvents(); });
    }

    frameRemains = 0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (choice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      choice.status = PsychoJS.Status.FINISHED;
  }

    if (choice.status === PsychoJS.Status.STARTED) {
      let theseKeys = choice.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _choice_allKeys = _choice_allKeys.concat(theseKeys);
      if (_choice_allKeys.length > 0) {
        choice.keys = _choice_allKeys[_choice_allKeys.length - 1].name;  // just the last key pressed
        choice.rt = _choice_allKeys[_choice_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *creditCounterTraining* updates
    if (t >= 0.0 && creditCounterTraining.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      creditCounterTraining.tStart = t;  // (not accounting for frame time here)
      creditCounterTraining.frameNStart = frameN;  // exact frame index
      
      creditCounterTraining.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (creditCounterTraining.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      creditCounterTraining.setAutoDraw(false);
    }
    // Run 'Each Frame' code from autoSelect
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    console.log(response_made_training);
    keys_training = choice.keys;
    if (keys_training) {
        response_made_training = true;
        autoselection_training = false;
        console.log(`Keys detected: ${keys_training}`);
        if ((_pj.in_es6("left", keys_training) || _pj.in_es6("l", keys_training))) {
            selected_image = leftTrainingimage;
            selected_credits = credit1t;
        } else {
            if ((_pj.in_es6("right", keys_training) || _pj.in_es6("r", keys_training))) {
                selected_image = rightTrainingimage;
                selected_credits = credit2t;
            }
        }
        console.log(`Image: ${selected_image}, Credit: ${Number.parseInt(selected_credits)}`);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TrainingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var correctchoice_training;
function TrainingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Training' ---
    for (const thisComponent of TrainingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(choice.corr, level);
    }
    psychoJS.experiment.addData('choice.keys', choice.keys);
    if (typeof choice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('choice.rt', choice.rt);
        routineTimer.reset();
        }
    
    choice.stop();
    // Run 'End Routine' code from autoSelect
    if ((response_made_training === false)) {
        autoselection_training = true;
        console.log(`No response within time. Auto-selection applied.`);
        if ((credit1t < credit2t)) {
            selected_image = leftTrainingimage;
            selected_credits = credit1t;
        } else {
            selected_image = rightTrainingimage;
            selected_credits = credit2t;
        }
        console.log(`Auto-selected image: ${selected_image}, Credit: ${Number.parseInt(selected_credits)}`);
    }
    if ((selected_credits === Math.max(credit1t, credit2t))) {
        correctchoice_training = 1;
    } else {
        correctchoice_training = 0;
    }
    if ((response_made_training && (correctchoice_training === 1))) {
        correct_trials_training += 1;
    }
    total_trials_training += 1;
    psychoJS.experiment.addData("correctchoice_training", Number.parseInt(correctchoice_training));
    psychoJS.experiment.addData("LeftImageTraining", leftTrainingimage);
    psychoJS.experiment.addData("RightImageTraining", rightTrainingimage);
    psychoJS.experiment.addData("leftcreditTraining", Number.parseInt(credit1t));
    psychoJS.experiment.addData("rightcreditTraining", Number.parseInt(credit2t));
    psychoJS.experiment.addData("SelectedImageTraining", selected_image);
    psychoJS.experiment.addData("SelectedCreditTraining", Number.parseInt(selected_credits));
    psychoJS.experiment.addData("reaction_time_training", (choice.rt ? choice.rt : "No response"));
    psychoJS.experiment.addData("AutoSelectedTraining", autoselection_training);
    creditsEarnedTraining += selected_credits;
    psychoJS.experiment.addData("CreditsTraining", creditsEarnedTraining);
    console.log(`Total Credits Earned So Far: ${Number.parseInt(creditsEarnedTraining)}`);
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var TrainingFeedbackComponents;
function TrainingFeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TrainingFeedback' ---
    t = 0;
    TrainingFeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    selectedImage.setImage(selected_image);
    creditsText.setText(creditsText.text);
    creditCounterTraining_2.setText(("Total Credits: " + creditsEarnedTraining.toString()));
    // Run 'Begin Routine' code from code_3
    if (response_made_training) {
        creditsText.text = `+ ${Number.parseInt(selected_credits)} credits`;
        console.log(`Learning Part selected image: ${selected_image} with ${Number.parseInt(selected_credits)} credits.`);
    }
    if ((autoselection_training === true)) {
        creditsText.text = `No option chosen within 4 seconds.
    Lowest reward (+ ${Number.parseInt(selected_credits)} credits) automatically selected.`
    ;
        console.log(`Learning Part AUTO-selected image: ${selected_image} with ${Number.parseInt(selected_credits)} credits.`);
    }
    
    // keep track of which components have finished
    TrainingFeedbackComponents = [];
    TrainingFeedbackComponents.push(selectedImage);
    TrainingFeedbackComponents.push(creditsText);
    TrainingFeedbackComponents.push(creditCounterTraining_2);
    
    for (const thisComponent of TrainingFeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TrainingFeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TrainingFeedback' ---
    // get current time
    t = TrainingFeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *selectedImage* updates
    if (t >= 0.0 && selectedImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      selectedImage.tStart = t;  // (not accounting for frame time here)
      selectedImage.frameNStart = frameN;  // exact frame index
      
      selectedImage.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (selectedImage.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      selectedImage.setAutoDraw(false);
    }
    
    // *creditsText* updates
    if (t >= 0.0 && creditsText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      creditsText.tStart = t;  // (not accounting for frame time here)
      creditsText.frameNStart = frameN;  // exact frame index
      
      creditsText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (creditsText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      creditsText.setAutoDraw(false);
    }
    
    // *creditCounterTraining_2* updates
    if (t >= 0.0 && creditCounterTraining_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      creditCounterTraining_2.tStart = t;  // (not accounting for frame time here)
      creditCounterTraining_2.frameNStart = frameN;  // exact frame index
      
      creditCounterTraining_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (creditCounterTraining_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      creditCounterTraining_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TrainingFeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TrainingFeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TrainingFeedback' ---
    for (const thisComponent of TrainingFeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_4_allKeys;
var TrainingCreditsComponents;
function TrainingCreditsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TrainingCredits' ---
    t = 0;
    TrainingCreditsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // Run 'Begin Routine' code from code_2
    console.log(`Training Credits: ${creditsEarnedTraining}`);
    TrainingTotalCredits.text = `Learning has now finished.
    You earned ${creditsEarnedTraining} credits during learning.
    Press SPACE to continue.`
    ;
    
    // keep track of which components have finished
    TrainingCreditsComponents = [];
    TrainingCreditsComponents.push(TrainingTotalCredits);
    TrainingCreditsComponents.push(key_resp_4);
    
    for (const thisComponent of TrainingCreditsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TrainingCreditsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TrainingCredits' ---
    // get current time
    t = TrainingCreditsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *TrainingTotalCredits* updates
    if (t >= 0.0 && TrainingTotalCredits.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TrainingTotalCredits.tStart = t;  // (not accounting for frame time here)
      TrainingTotalCredits.frameNStart = frameN;  // exact frame index
      
      TrainingTotalCredits.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TrainingCreditsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var training_accuracy;
function TrainingCreditsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TrainingCredits' ---
    for (const thisComponent of TrainingCreditsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // Run 'End Routine' code from code_2
    psychoJS.experiment.addData("FinalCreditsTraining", creditsEarnedTraining);
    if ((total_trials_training > 0)) {
        training_accuracy = (correct_trials_training / total_trials_training);
        psychoJS.experiment.addData("TrainingAccuracy", training_accuracy);
        console.log(`Training completed. Accuracy: ${util.pad(Number.parseFloat((training_accuracy * 100)).toFixed(2), 1)}% (${correct_trials_training}/${total_trials_training} correct)`);
    } else {
        psychoJS.experiment.addData("TrainingAccuracy", 0);
        console.log("Training completed, but no manual trials were responded.");
    }
    
    // the Routine "TrainingCredits" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_11_allKeys;
var TrainingEndComponents;
function TrainingEndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TrainingEnd' ---
    t = 0;
    TrainingEndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    // keep track of which components have finished
    TrainingEndComponents = [];
    TrainingEndComponents.push(text_28);
    TrainingEndComponents.push(key_resp_11);
    
    for (const thisComponent of TrainingEndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TrainingEndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TrainingEnd' ---
    // get current time
    t = TrainingEndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_28* updates
    if (t >= 0.0 && text_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_28.tStart = t;  // (not accounting for frame time here)
      text_28.frameNStart = frameN;  // exact frame index
      
      text_28.setAutoDraw(true);
    }

    
    // *key_resp_11* updates
    if (t >= 0.0 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
    }

    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
        key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TrainingEndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TrainingEndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TrainingEnd' ---
    for (const thisComponent of TrainingEndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_11.corr, level);
    }
    psychoJS.experiment.addData('key_resp_11.keys', key_resp_11.keys);
    if (typeof key_resp_11.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_11.rt', key_resp_11.rt);
        routineTimer.reset();
        }
    
    key_resp_11.stop();
    // the Routine "TrainingEnd" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_5_allKeys;
var CheckPhasePromptComponents;
function CheckPhasePromptRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'CheckPhasePrompt' ---
    t = 0;
    CheckPhasePromptClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    CheckPhasePromptComponents = [];
    CheckPhasePromptComponents.push(text);
    CheckPhasePromptComponents.push(key_resp_5);
    
    for (const thisComponent of CheckPhasePromptComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function CheckPhasePromptRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'CheckPhasePrompt' ---
    // get current time
    t = CheckPhasePromptClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of CheckPhasePromptComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CheckPhasePromptRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'CheckPhasePrompt' ---
    for (const thisComponent of CheckPhasePromptComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "CheckPhasePrompt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_6_allKeys;
var CheckPhaseInstructionsComponents;
function CheckPhaseInstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'CheckPhaseInstructions' ---
    t = 0;
    CheckPhaseInstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    CheckPhaseInstructionsComponents = [];
    CheckPhaseInstructionsComponents.push(text_2);
    CheckPhaseInstructionsComponents.push(key_resp_6);
    
    for (const thisComponent of CheckPhaseInstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function CheckPhaseInstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'CheckPhaseInstructions' ---
    // get current time
    t = CheckPhaseInstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of CheckPhaseInstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CheckPhaseInstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'CheckPhaseInstructions' ---
    for (const thisComponent of CheckPhaseInstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "CheckPhaseInstructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _response_allKeys;
var firstcredit;
var secondcredit;
var CheckPhaseComponents;
function CheckPhaseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'CheckPhase' ---
    t = 0;
    CheckPhaseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    left.setImage(image1);
    right.setImage(image2);
    response.keys = undefined;
    response.rt = undefined;
    _response_allKeys = [];
    // Run 'Begin Routine' code from code_4
    console.log(`Check Phase started`);
    console.log(`Randomly assigned stimuli set: ${stimuli_file}`);
    response_made_check = false;
    rt_clock_check.reset();
    if ((CheckPhaseTrials.thisN === 0)) {
        shuffled_trials = CheckPhaseTrials.trialList.slice();
        util.shuffle(shuffled_trials);
        CheckPhaseTrials.trialList = shuffled_trials;
    }
    if ((CheckPhaseTrials.thisN === 0)) {
        all_trials = CheckPhaseTrials.trialList.slice();
    }
    left.setImage(CheckPhaseTrials.trialList[CheckPhaseTrials.thisN]["image1"]);
    right.setImage(CheckPhaseTrials.trialList[CheckPhaseTrials.thisN]["image2"]);
    firstcredit = Number.parseInt(CheckPhaseTrials.trialList[CheckPhaseTrials.thisN]["credit1"]);
    secondcredit = Number.parseInt(CheckPhaseTrials.trialList[CheckPhaseTrials.thisN]["credit2"]);
    should_swap = (Math.random() > 0.5);
    if (should_swap) {
        [left.image, right.image] = [right.image, left.image];
        [firstcredit, secondcredit] = [secondcredit, firstcredit];
        console.log("Randomly swapped images and credits: left <-> right ");
    }
    
    // keep track of which components have finished
    CheckPhaseComponents = [];
    CheckPhaseComponents.push(left);
    CheckPhaseComponents.push(right);
    CheckPhaseComponents.push(response);
    
    for (const thisComponent of CheckPhaseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function CheckPhaseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'CheckPhase' ---
    // get current time
    t = CheckPhaseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *left* updates
    if (t >= 0.0 && left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left.tStart = t;  // (not accounting for frame time here)
      left.frameNStart = frameN;  // exact frame index
      
      left.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left.setAutoDraw(false);
    }
    
    // *right* updates
    if (t >= 0.0 && right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right.tStart = t;  // (not accounting for frame time here)
      right.frameNStart = frameN;  // exact frame index
      
      right.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right.setAutoDraw(false);
    }
    
    // *response* updates
    if (t >= 0.0 && response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response.tStart = t;  // (not accounting for frame time here)
      response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response.clearEvents(); });
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      response.status = PsychoJS.Status.FINISHED;
  }

    if (response.status === PsychoJS.Status.STARTED) {
      let theseKeys = response.getKeys({keyList: ['left', 'right', 'l', 'r'], waitRelease: false});
      _response_allKeys = _response_allKeys.concat(theseKeys);
      if (_response_allKeys.length > 0) {
        response.keys = _response_allKeys[_response_allKeys.length - 1].name;  // just the last key pressed
        response.rt = _response_allKeys[_response_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of CheckPhaseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var total_trials_cp;
var accuracy_cp;
function CheckPhaseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'CheckPhase' ---
    for (const thisComponent of CheckPhaseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(response.corr, level);
    }
    psychoJS.experiment.addData('response.keys', response.keys);
    if (typeof response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response.rt', response.rt);
        routineTimer.reset();
        }
    
    response.stop();
    // Run 'End Routine' code from code_4
    if (response.keys) {
        response_made_check = true;
        if ((((response.keys === "left") || (response.keys === "l")) && (firstcredit > secondcredit))) {
            CPfeedbackText = "Correct";
            correct_responses_cp += 1;
            console.log(`Feedback set to: Correct, selected image: ${left.image}`);
        } else {
            if ((((response.keys === "right") || (response.keys === "r")) && (secondcredit > firstcredit))) {
                CPfeedbackText = "Correct";
                correct_responses_cp += 1;
                console.log(`Feedback set to:Correct, selected image: ${right.image}`);
            } else {
                CPfeedbackText = "Incorrect";
                incorrect_responses_cp += 1;
                incorrect_trials.push(CheckPhaseTrials.trialList[CheckPhaseTrials.thisN]);
                console.log(`Feedback set to: Incorrect. Trial recycled (incorrect response): ${CheckPhaseTrials.trialList[CheckPhaseTrials.thisN]}`);
            }
        }
    } else {
        response_made_check = false;
        incorrect_responses_cp += 1;
        CPfeedbackText = "No response within time. Please make a choice within 4 seconds.";
        incorrect_trials.push(CheckPhaseTrials.trialList[CheckPhaseTrials.thisN]);
        console.log(`Trial recycled (incorrect response): ${CheckPhaseTrials.trialList[CheckPhaseTrials.thisN]}`);
    }
    if (((CheckPhaseTrials.thisN === (all_trials.length - 1)) && (incorrect_trials.length > 0))) {
        CheckPhaseTrials.trialList = CheckPhaseTrials.trialList.concat(incorrect_trials);
        console.log(`Incorrect trials added back to trial list: ${incorrect_trials}`);
        incorrect_trials = [];
    }
    if ((correct_responses_cp >= 18)) {
        check_phase_completed = true;
        CheckPhaseTrials.finished = true;
        continueRoutine = false;
        console.log("Check phase complete: 18 correct responses reached.");
    } else {
        if (((CheckPhaseTrials.thisN >= 36) && (correct_responses_cp < 18))) {
            check_phase_failed = true;
            CheckPhaseTrials.finished = true;
            continueRoutine = false;
            console.log("Check phase failed: 36 trials used without reaching 18 correct.");
        }
    }
    total_trials_cp = (correct_responses_cp + incorrect_responses_cp);
    accuracy_cp = (correct_responses_cp / total_trials_cp);
    console.log("Correct Responses count:", correct_responses_cp);
    console.log("Incorrect Responses count:", incorrect_responses_cp);
    psychoJS.experiment.addData("CheckPhase_TotalTrials", total_trials_cp);
    psychoJS.experiment.addData("CheckPhase_Accuracy", accuracy_cp);
    psychoJS.experiment.addData("LeftImageCP", left.image);
    psychoJS.experiment.addData("RightImageCP", right.image);
    psychoJS.experiment.addData("leftCPcredit", firstcredit);
    psychoJS.experiment.addData("rightCPcredit", secondcredit);
    psychoJS.experiment.addData("reaction_time_cp", response.rt);
    psychoJS.experiment.addData("key_cp", response.keys);
    psychoJS.experiment.addData("CorrectCheckPhaseResponses", correct_responses_cp);
    psychoJS.experiment.addData("IncorrectCheckPhaseResponses", incorrect_responses_cp);
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var CheckPhaseFeedbackComponents;
function CheckPhaseFeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'CheckPhaseFeedback' ---
    t = 0;
    CheckPhaseFeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_6
    feedback_text.text = CPfeedbackText;
    console.log(`Check Phase feedback: ${CPfeedbackText}`);
    
    feedback_text.setText(CPfeedbackText);
    // keep track of which components have finished
    CheckPhaseFeedbackComponents = [];
    CheckPhaseFeedbackComponents.push(feedback_text);
    
    for (const thisComponent of CheckPhaseFeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function CheckPhaseFeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'CheckPhaseFeedback' ---
    // get current time
    t = CheckPhaseFeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of CheckPhaseFeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CheckPhaseFeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'CheckPhaseFeedback' ---
    for (const thisComponent of CheckPhaseFeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var n_reps_checkfail;
var nRepsComponents;
function nRepsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'nReps' ---
    t = 0;
    nRepsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_16
    n_reps_checkfail = (check_phase_failed ? 1 : 0);
    
    // keep track of which components have finished
    nRepsComponents = [];
    
    for (const thisComponent of nRepsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function nRepsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'nReps' ---
    // get current time
    t = nRepsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of nRepsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function nRepsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'nReps' ---
    for (const thisComponent of nRepsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "nReps" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var redirect_checkphase_fail_url;
var CheckPhaseFailComponents;
function CheckPhaseFailRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'CheckPhaseFail' ---
    t = 0;
    CheckPhaseFailClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(6.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_14
    redirect_checkphase_fail_url = `https://app.prolific.com/submissions/complete?cc=CGWPAWW4`;
    
    // keep track of which components have finished
    CheckPhaseFailComponents = [];
    CheckPhaseFailComponents.push(text_12);
    
    for (const thisComponent of CheckPhaseFailComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function CheckPhaseFailRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'CheckPhaseFail' ---
    // get current time
    t = CheckPhaseFailClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }

    frameRemains = 0.0 + 6.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_12.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of CheckPhaseFailComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CheckPhaseFailRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'CheckPhaseFail' ---
    for (const thisComponent of CheckPhaseFailComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_14
    redirect_checkphase_fail_url = `https://app.prolific.com/submissions/complete?cc=C10J2OQW`;
    window.location.href = redirect_checkphase_fail_url;
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_12_allKeys;
var CheckPhaseEndComponents;
function CheckPhaseEndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'CheckPhaseEnd' ---
    t = 0;
    CheckPhaseEndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_12.keys = undefined;
    key_resp_12.rt = undefined;
    _key_resp_12_allKeys = [];
    // keep track of which components have finished
    CheckPhaseEndComponents = [];
    CheckPhaseEndComponents.push(text_3);
    CheckPhaseEndComponents.push(key_resp_12);
    
    for (const thisComponent of CheckPhaseEndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function CheckPhaseEndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'CheckPhaseEnd' ---
    // get current time
    t = CheckPhaseEndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *key_resp_12* updates
    if (t >= 0.0 && key_resp_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_12.tStart = t;  // (not accounting for frame time here)
      key_resp_12.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_12.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.clearEvents(); });
    }

    if (key_resp_12.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_12.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_12_allKeys = _key_resp_12_allKeys.concat(theseKeys);
      if (_key_resp_12_allKeys.length > 0) {
        key_resp_12.keys = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].name;  // just the last key pressed
        key_resp_12.rt = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of CheckPhaseEndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CheckPhaseEndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'CheckPhaseEnd' ---
    for (const thisComponent of CheckPhaseEndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_12.corr, level);
    }
    psychoJS.experiment.addData('key_resp_12.keys', key_resp_12.keys);
    if (typeof key_resp_12.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_12.rt', key_resp_12.rt);
        routineTimer.reset();
        }
    
    key_resp_12.stop();
    // Run 'End Routine' code from code_22
    psychoJS.experiment.addData("CheckPhase_TotalTrials", total_trials_cp);
    psychoJS.experiment.addData("CheckPhase_Accuracy", accuracy_cp);
    console.log(`Check Phase completed in ${total_trials_cp} trials with ${util.pad(Number.parseFloat((accuracy_cp * 100)).toFixed(2), 1)}% accuracy.`);
    
    // the Routine "CheckPhaseEnd" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_7_allKeys;
var MainPromptComponents;
function MainPromptRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'MainPrompt' ---
    t = 0;
    MainPromptClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    MainPromptComponents = [];
    MainPromptComponents.push(text_4);
    MainPromptComponents.push(key_resp_7);
    
    for (const thisComponent of MainPromptComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function MainPromptRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'MainPrompt' ---
    // get current time
    t = MainPromptClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of MainPromptComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function MainPromptRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'MainPrompt' ---
    for (const thisComponent of MainPromptComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_7.corr, level);
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "MainPrompt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_8_allKeys;
var MainInstructionsComponents;
function MainInstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'MainInstructions' ---
    t = 0;
    MainInstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    MainInstructionsComponents = [];
    MainInstructionsComponents.push(text_5);
    MainInstructionsComponents.push(key_resp_8);
    
    for (const thisComponent of MainInstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function MainInstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'MainInstructions' ---
    // get current time
    t = MainInstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }

    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of MainInstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function MainInstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'MainInstructions' ---
    for (const thisComponent of MainInstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_8.corr, level);
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "MainInstructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_13_allKeys;
var MainInstructions2Components;
function MainInstructions2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'MainInstructions2' ---
    t = 0;
    MainInstructions2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_13.keys = undefined;
    key_resp_13.rt = undefined;
    _key_resp_13_allKeys = [];
    // keep track of which components have finished
    MainInstructions2Components = [];
    MainInstructions2Components.push(image);
    MainInstructions2Components.push(text_7);
    MainInstructions2Components.push(key_resp_13);
    
    for (const thisComponent of MainInstructions2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function MainInstructions2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'MainInstructions2' ---
    // get current time
    t = MainInstructions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    
    // *key_resp_13* updates
    if (t >= 0.0 && key_resp_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_13.tStart = t;  // (not accounting for frame time here)
      key_resp_13.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_13.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.clearEvents(); });
    }

    if (key_resp_13.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_13.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_13_allKeys = _key_resp_13_allKeys.concat(theseKeys);
      if (_key_resp_13_allKeys.length > 0) {
        key_resp_13.keys = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].name;  // just the last key pressed
        key_resp_13.rt = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of MainInstructions2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function MainInstructions2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'MainInstructions2' ---
    for (const thisComponent of MainInstructions2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_13.corr, level);
    }
    psychoJS.experiment.addData('key_resp_13.keys', key_resp_13.keys);
    if (typeof key_resp_13.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_13.rt', key_resp_13.rt);
        routineTimer.reset();
        }
    
    key_resp_13.stop();
    // the Routine "MainInstructions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_26_allKeys;
var ComprehensionCheckMain1Components;
function ComprehensionCheckMain1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ComprehensionCheckMain1' ---
    t = 0;
    ComprehensionCheckMain1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_26.keys = undefined;
    key_resp_26.rt = undefined;
    _key_resp_26_allKeys = [];
    // keep track of which components have finished
    ComprehensionCheckMain1Components = [];
    ComprehensionCheckMain1Components.push(text_20);
    ComprehensionCheckMain1Components.push(key_resp_26);
    
    for (const thisComponent of ComprehensionCheckMain1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ComprehensionCheckMain1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ComprehensionCheckMain1' ---
    // get current time
    t = ComprehensionCheckMain1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_20* updates
    if (t >= 0.0 && text_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_20.tStart = t;  // (not accounting for frame time here)
      text_20.frameNStart = frameN;  // exact frame index
      
      text_20.setAutoDraw(true);
    }

    
    // *key_resp_26* updates
    if (t >= 0.0 && key_resp_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_26.tStart = t;  // (not accounting for frame time here)
      key_resp_26.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_26.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_26.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_26.clearEvents(); });
    }

    if (key_resp_26.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_26.getKeys({keyList: ['a', 'b', 'c'], waitRelease: false});
      _key_resp_26_allKeys = _key_resp_26_allKeys.concat(theseKeys);
      if (_key_resp_26_allKeys.length > 0) {
        key_resp_26.keys = _key_resp_26_allKeys[_key_resp_26_allKeys.length - 1].name;  // just the last key pressed
        key_resp_26.rt = _key_resp_26_allKeys[_key_resp_26_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ComprehensionCheckMain1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ComprehensionCheckMain1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ComprehensionCheckMain1' ---
    for (const thisComponent of ComprehensionCheckMain1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_26.corr, level);
    }
    psychoJS.experiment.addData('key_resp_26.keys', key_resp_26.keys);
    if (typeof key_resp_26.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_26.rt', key_resp_26.rt);
        routineTimer.reset();
        }
    
    key_resp_26.stop();
    // the Routine "ComprehensionCheckMain1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_33_allKeys;
var ComprehensionCheckMain2Components;
function ComprehensionCheckMain2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ComprehensionCheckMain2' ---
    t = 0;
    ComprehensionCheckMain2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_33.keys = undefined;
    key_resp_33.rt = undefined;
    _key_resp_33_allKeys = [];
    // keep track of which components have finished
    ComprehensionCheckMain2Components = [];
    ComprehensionCheckMain2Components.push(text_26);
    ComprehensionCheckMain2Components.push(key_resp_33);
    
    for (const thisComponent of ComprehensionCheckMain2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ComprehensionCheckMain2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ComprehensionCheckMain2' ---
    // get current time
    t = ComprehensionCheckMain2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_26* updates
    if (t >= 0.0 && text_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_26.tStart = t;  // (not accounting for frame time here)
      text_26.frameNStart = frameN;  // exact frame index
      
      text_26.setAutoDraw(true);
    }

    
    // *key_resp_33* updates
    if (t >= 0.0 && key_resp_33.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_33.tStart = t;  // (not accounting for frame time here)
      key_resp_33.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_33.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_33.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_33.clearEvents(); });
    }

    if (key_resp_33.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_33.getKeys({keyList: ['a', 'b', 'c'], waitRelease: false});
      _key_resp_33_allKeys = _key_resp_33_allKeys.concat(theseKeys);
      if (_key_resp_33_allKeys.length > 0) {
        key_resp_33.keys = _key_resp_33_allKeys[_key_resp_33_allKeys.length - 1].name;  // just the last key pressed
        key_resp_33.rt = _key_resp_33_allKeys[_key_resp_33_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ComprehensionCheckMain2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ComprehensionCheckMain2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ComprehensionCheckMain2' ---
    for (const thisComponent of ComprehensionCheckMain2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_33.corr, level);
    }
    psychoJS.experiment.addData('key_resp_33.keys', key_resp_33.keys);
    if (typeof key_resp_33.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_33.rt', key_resp_33.rt);
        routineTimer.reset();
        }
    
    key_resp_33.stop();
    // the Routine "ComprehensionCheckMain2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_34_allKeys;
var correct_answers_main;
var responses_main;
var correct_main;
var comprehensionresultComponents;
function comprehensionresultRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'comprehensionresult' ---
    t = 0;
    comprehensionresultClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_34.keys = undefined;
    key_resp_34.rt = undefined;
    _key_resp_34_allKeys = [];
    // Run 'Begin Routine' code from code_32
    correct_answers_main = {"key_resp_26": "b", "key_resp_33": "a"};
    responses_main = [key_resp_26.keys, key_resp_33.keys];
    correct_main = [(responses_main[0] === correct_answers_main["key_resp_26"]), (responses_main[1] === correct_answers_main["key_resp_33"])];
    if ((util.sum(correct_main) === correct_main.length)) {
        text_27.text = "All answers are correct! Press SPACE to continue.";
        comprehension_main_correct = true;
    } else {
        text_27.text = "Some answers are incorrect. Please press SPACE to try again.";
        comprehension_main_correct = false;
    }
    
    // keep track of which components have finished
    comprehensionresultComponents = [];
    comprehensionresultComponents.push(text_27);
    comprehensionresultComponents.push(key_resp_34);
    
    for (const thisComponent of comprehensionresultComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function comprehensionresultRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'comprehensionresult' ---
    // get current time
    t = comprehensionresultClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_27* updates
    if (t >= 0.0 && text_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_27.tStart = t;  // (not accounting for frame time here)
      text_27.frameNStart = frameN;  // exact frame index
      
      text_27.setAutoDraw(true);
    }

    
    // *key_resp_34* updates
    if (t >= 0.0 && key_resp_34.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_34.tStart = t;  // (not accounting for frame time here)
      key_resp_34.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_34.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_34.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_34.clearEvents(); });
    }

    if (key_resp_34.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_34.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_34_allKeys = _key_resp_34_allKeys.concat(theseKeys);
      if (_key_resp_34_allKeys.length > 0) {
        key_resp_34.keys = _key_resp_34_allKeys[_key_resp_34_allKeys.length - 1].name;  // just the last key pressed
        key_resp_34.rt = _key_resp_34_allKeys[_key_resp_34_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of comprehensionresultComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function comprehensionresultRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'comprehensionresult' ---
    for (const thisComponent of comprehensionresultComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_34.corr, level);
    }
    psychoJS.experiment.addData('key_resp_34.keys', key_resp_34.keys);
    if (typeof key_resp_34.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_34.rt', key_resp_34.rt);
        routineTimer.reset();
        }
    
    key_resp_34.stop();
    // Run 'End Routine' code from code_32
    if (comprehension_main_correct) {
        comprehensionloop.finished = true;
    }
    
    // the Routine "comprehensionresult" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_9_allKeys;
var BlocksComponents;
function BlocksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Blocks' ---
    t = 0;
    BlocksClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_24
    if ((trialCount < currentBlockSize)) {
        continueRoutine = false;
    } else {
        trialCount = 0;
        blockNumber += 1;
        if ((blockNumber <= blockSizes.length)) {
            currentBlockSize = blockSizes[(blockNumber - 1)];
        }
        console.log(`Starting Block ${blockNumber}`);
    }
    
    blockText.setText((("Starting Block " + blockNumber.toString()) + ". Press SPACE to continue."));
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    // keep track of which components have finished
    BlocksComponents = [];
    BlocksComponents.push(blockText);
    BlocksComponents.push(key_resp_9);
    
    for (const thisComponent of BlocksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BlocksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Blocks' ---
    // get current time
    t = BlocksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blockText* updates
    if (t >= 0.0 && blockText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blockText.tStart = t;  // (not accounting for frame time here)
      blockText.frameNStart = frameN;  // exact frame index
      
      blockText.setAutoDraw(true);
    }

    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }

    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BlocksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BlocksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Blocks' ---
    for (const thisComponent of BlocksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_9.corr, level);
    }
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // the Routine "Blocks" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var attention_check_counter;
var block_number;
var current_trial;
var _selection_allKeys;
var creditfirst;
var creditsecond;
var creditthird;
var is_three_image_trial;
var two_image_trial;
var positions;
var show_rating;
var trial_start_time;
var stimulus_start_time;
var MainExpComponents;
function MainExpRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'MainExp' ---
    t = 0;
    MainExpClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_23
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((MainExpTrials.thisN === 0)) {
        attention_check_trials = [];
        regular_trials = [];
        for (var trial, _pj_c = 0, _pj_a = MainExpTrials.trialList, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            trial = _pj_a[_pj_c];
            if ((_pj.in_es6("text_attention", trial) && (trial["text_attention"] === 1))) {
                attention_check_trials.push(trial);
            } else {
                regular_trials.push(trial);
            }
        }
        console.log(`Number of regular trials: ${regular_trials.length}`);
        console.log(`Number of attention check trials: ${attention_check_trials.length}`);
        util.shuffle(regular_trials);
        console.log(`Regular trials shuffled, number of regular trials: ${regular_trials.length}`);
        blocks = [];
        attention_check_counter = 0;
        block_size = 20;
        for (var block_num, _pj_c = 0, _pj_a = util.range(8), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            block_num = _pj_a[_pj_c];
            block = [];
            console.log(`Block size = ${block_size}`);
            start_idx = (block_num * block_size);
            end_idx = Math.min(((block_num + 1) * block_size), regular_trials.length);
            block = regular_trials.slice(start_idx, end_idx);
            console.log(`Block ${(block_num + 1)} | start_idx = ${start_idx}, end_idx = ${end_idx}`);
            console.log(`Block ${(block_num + 1)}: ${block.length} regular trials assigned.`);
            if ((((block_num % 2) === 1) && (attention_check_counter < attention_check_trials.length))) {
                attention_trial = attention_check_trials[attention_check_counter];
                attention_check_counter += 1;
                block.push(attention_trial);
                console.log(`Added attention trial to Block ${(block_num + 1)}`);
            }
            util.shuffle(block);
            console.log(`Block ${(block_num + 1)} shuffled.`);
            if ((block.length > 0)) {
                blocks.push(block);
            } else {
                console.log(`Warning: Block ${(block_num + 1)} is empty, skipping.`);
            }
        }
        shuffled_trials = [];
        console.log(`Before adding blocks: shuffled_trials contains ${shuffled_trials.length} trials`);
        block_number = 1;
        for (var block, _pj_c = 0, _pj_a = blocks, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            block = _pj_a[_pj_c];
            if ((block.length > 0)) {
                console.log(`Adding ${block.length} trials from Block ${block_number} to shuffled_trials.`);
                for (var trial, _pj_f = 0, _pj_d = block, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                    trial = _pj_d[_pj_f];
                    shuffled_trials.push(trial);
                }
            } else {
                console.log(`Warning: Block ${block_number} is empty, skipping.`);
            }
            block_number += 1;
        }
        console.log(`After adding blocks: shuffled_trials contains ${shuffled_trials.length} trials`);
        shuffled_trials = function () {
        var _pj_a = [], _pj_b = shuffled_trials;
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var trial = _pj_b[_pj_c];
            if ((trial !== null)) {
                _pj_a.push(trial);
            }
        }
        return _pj_a;
    }
    .call(this);
        console.log(`After filtering: shuffled_trials contains ${shuffled_trials.length} trials`);
        if ((shuffled_trials.length !== 164)) {
            console.log(`ERROR: Expected 164 trials, but found ${shuffled_trials.length}!`);
        }
        MainExpTrials.trialList = shuffled_trials;
    }
    console.log(`Final Trial List contains ${MainExpTrials.trialList.length} trials.`);
    if (((MainExpTrials.thisTrialN !== null) && (MainExpTrials.thisTrialN < MainExpTrials.trialList.length))) {
        current_trial = MainExpTrials.trialList[MainExpTrials.thisTrialN];
        if ((_pj.in_es6("text_attention", current_trial) && (current_trial["text_attention"] === 1))) {
            attention_text = "SELECT THE IMAGE ON THE RIGHT";
        } else {
            attention_text = "";
        }
        console.log(`Is trial ${MainExpTrials.thisTrialN} an attention check trial?: ${attention_text}`);
    } else {
        console.log(`WARNING: Trial index ${MainExpTrials.thisTrialN} is out of range!`);
    }
    
    attention.setText(attention_text);
    leftimage.setImage(image1);
    rightimage.setImage(image2);
    upperimage.setImage(image3);
    selection.keys = undefined;
    selection.rt = undefined;
    _selection_allKeys = [];
    creditCounterMain.setText(("Total Credits: " + creditsEarned.toString()));
    // Run 'Begin Routine' code from code_8
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    rt_clock.reset();
    if ((MainExpTrials.trialList && ((0 <= MainExpTrials.thisN) && (MainExpTrials.thisN < MainExpTrials.trialList.length)))) {
        current_trial = MainExpTrials.trialList[MainExpTrials.thisN];
        console.log(`Current Trial Index: ${MainExpTrials.thisN}`);
    } else {
        console.log("Error: Trial list is empty or thisN is out of range!");
    }
    leftimage.setImage(current_trial["image1"]);
    rightimage.setImage(current_trial["image2"]);
    if ((_pj.in_es6("image3", current_trial) && current_trial["image3"])) {
        upperimage.setImage(current_trial["image3"]);
    } else {
        upperimage.setImage("grey.png");
    }
    creditfirst = Number.parseInt(current_trial["credit1"]);
    creditsecond = Number.parseInt(current_trial["credit2"]);
    creditthird = Number.parseInt(current_trial["credit3"]);
    is_three_image_trial = (_pj.in_es6("image3", current_trial) && (! _pj.in_es6(current_trial["image3"], ["grey.png", null, ""])));
    two_image_trial = (_pj.in_es6("image3", current_trial) && _pj.in_es6(current_trial["image3"], ["grey.png", null, ""]));
    console.log(`Assigned credits - First: ${creditfirst}, Second: ${creditsecond}, Third: ${creditthird}`);
    should_swap = (Math.random() > 0.5);
    if ((two_image_trial && should_swap)) {
        [leftimage.image, rightimage.image] = [rightimage.image, leftimage.image];
        [creditfirst, creditsecond] = [creditsecond, creditfirst];
        console.log("Randomly swapped left and right images for 2-image trial.");
    }
    if (is_three_image_trial) {
        console.log("Shuffling images for a 3-image trial.");
        positions = [[leftimage.image, creditfirst], [rightimage.image, creditsecond], [upperimage.image, creditthird]];
        util.shuffle(positions);
        leftimage.setImage(positions[0][0]);
        rightimage.setImage(positions[1][0]);
        upperimage.setImage(positions[2][0]);
        [creditfirst, creditsecond, creditthird] = [positions[0][1], positions[1][1], positions[2][1]];
        console.log(`Shuffled Images: Left = ${leftimage.image}, Right = ${rightimage.image}, Upper = ${upperimage.image}`);
    }
    if (_pj.in_es6("is_rating_trial", current_trial)) {
        show_rating = current_trial["is_rating_trial"];
    } else {
        show_rating = false;
    }
    console.log(`Is it a rating scale trial?: ${show_rating}`);
    trial_start_time = globalClock.getTime();
    psychoJS.experiment.addData("trialStart", trial_start_time);
    stimulus_start_time = t;
    psychoJS.experiment.addData("stimulusStart", stimulus_start_time);
    response_made = false;
    
    // keep track of which components have finished
    MainExpComponents = [];
    MainExpComponents.push(attention);
    MainExpComponents.push(leftimage);
    MainExpComponents.push(rightimage);
    MainExpComponents.push(upperimage);
    MainExpComponents.push(selection);
    MainExpComponents.push(creditCounterMain);
    
    for (const thisComponent of MainExpComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var keys;
function MainExpRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'MainExp' ---
    // get current time
    t = MainExpClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *attention* updates
    if (t >= 0.0 && attention.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attention.tStart = t;  // (not accounting for frame time here)
      attention.frameNStart = frameN;  // exact frame index
      
      attention.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (attention.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      attention.setAutoDraw(false);
    }
    
    // *leftimage* updates
    if (t >= 0.0 && leftimage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      leftimage.tStart = t;  // (not accounting for frame time here)
      leftimage.frameNStart = frameN;  // exact frame index
      
      leftimage.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (leftimage.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      leftimage.setAutoDraw(false);
    }
    
    // *rightimage* updates
    if (t >= 0.0 && rightimage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightimage.tStart = t;  // (not accounting for frame time here)
      rightimage.frameNStart = frameN;  // exact frame index
      
      rightimage.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rightimage.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rightimage.setAutoDraw(false);
    }
    
    // *upperimage* updates
    if (t >= 0.0 && upperimage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      upperimage.tStart = t;  // (not accounting for frame time here)
      upperimage.frameNStart = frameN;  // exact frame index
      
      upperimage.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (upperimage.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      upperimage.setAutoDraw(false);
    }
    
    // *selection* updates
    if (t >= 0.0 && selection.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      selection.tStart = t;  // (not accounting for frame time here)
      selection.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { selection.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { selection.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { selection.clearEvents(); });
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (selection.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      selection.status = PsychoJS.Status.FINISHED;
  }

    if (selection.status === PsychoJS.Status.STARTED) {
      let theseKeys = selection.getKeys({keyList: ['left', 'right', 'up', 'l', 'r'], waitRelease: false});
      _selection_allKeys = _selection_allKeys.concat(theseKeys);
      if (_selection_allKeys.length > 0) {
        selection.keys = _selection_allKeys[_selection_allKeys.length - 1].name;  // just the last key pressed
        selection.rt = _selection_allKeys[_selection_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *creditCounterMain* updates
    if (t >= 0.0 && creditCounterMain.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      creditCounterMain.tStart = t;  // (not accounting for frame time here)
      creditCounterMain.frameNStart = frameN;  // exact frame index
      
      creditCounterMain.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (creditCounterMain.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      creditCounterMain.setAutoDraw(false);
    }
    // Run 'Each Frame' code from code_8
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    console.log(response_made);
    keys = selection.keys;
    if (keys) {
        response_made = true;
        console.log(`Keys detected: ${keys}`);
        if ((_pj.in_es6("left", keys) || _pj.in_es6("l", keys))) {
            chosenimage = leftimage.image;
            chosencredit = creditfirst;
        } else {
            if ((_pj.in_es6("right", keys) || _pj.in_es6("r", keys))) {
                chosenimage = rightimage.image;
                chosencredit = creditsecond;
            } else {
                if ((_pj.in_es6("up", keys) || (_pj.in_es6("u", keys) && upperimage.image))) {
                    chosenimage = upperimage.image;
                    chosencredit = creditthird;
                }
            }
        }
        console.log(`Chosen image: ${chosenimage}, Credit: ${Number.parseInt(chosencredit)}`);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of MainExpComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var creditz;
var images;
var min_credit;
var min_index;
var correctchoice;
var image3_to_store;
var credit3_to_store;
function MainExpRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'MainExp' ---
    for (const thisComponent of MainExpComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_23
    psychoJS.experiment.addData("attention", current_trial["text_attention"]);
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(selection.corr, level);
    }
    psychoJS.experiment.addData('selection.keys', selection.keys);
    if (typeof selection.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('selection.rt', selection.rt);
        routineTimer.reset();
        }
    
    selection.stop();
    // Run 'End Routine' code from code_8
    if ((response_made === false)) {
        console.log("No response within 2.5 seconds. Auto-selection applied.");
        if (is_three_image_trial) {
            console.log("Auto-selection for a 3-image trial.");
            creditz = [Number.parseInt(creditfirst), Number.parseInt(creditsecond), Number.parseInt(creditthird)];
            images = [leftimage.image, rightimage.image, upperimage.image];
            console.log(`Credits on this auto-selection trial: ${creditz}`);
            console.log(`Images on this auto-selection trial: ${images}`);
            min_credit = Math.min(...creditz);
            min_index = util.index(creditz, min_credit);
            chosenimage = images[min_index];
            chosencredit = creditz[min_index];
            console.log(`Minimum credit image automatically chosen: ${chosenimage}`);
            console.log(`Minimum credit automatically chosen: ${chosencredit}`);
        } else {
            if (two_image_trial) {
                console.log("Auto-selection for a 2-image trial.");
                if ((creditfirst < creditsecond)) {
                    chosenimage = leftimage.image;
                    chosencredit = Number.parseInt(creditfirst);
                } else {
                    chosenimage = rightimage.image;
                    chosencredit = Number.parseInt(creditsecond);
                }
                console.log(`Auto-selected image: ${chosenimage}, Credit: ${chosencredit}`);
            }
        }
    }
    if ((two_image_trial && (chosenimage === "grey.png"))) {
        console.log("\u26a0\ufe0f WARNING: grey.png was selected \u2014 this shouldn't happen in 2-image trials!");
    }
    trialCount += 1;
    if (chosencredit) {
        creditsEarned += Number.parseInt(chosencredit);
        console.log(`Total Credits Updated: ${Number.parseInt(creditsEarned)}`);
    } else {
        console.log("Error: credits not updated");
    }
    if ((chosencredit === Math.max(function () {
        var _pj_a = [], _pj_b = [credit1, credit2, credit3];
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var credit = _pj_b[_pj_c];
            if ((credit !== null)) {
                _pj_a.push(credit);
            }
        }
        return _pj_a;
    }
    .call(this)))) {
        correctchoice = 1;
        console.log("The image with the highest credit was chosen.");
    } else {
        correctchoice = 0;
    }
    if (response_made) {
        total_trials_main += 1;
        if ((correctchoice === 1)) {
            correct_trials_main += 1;
        }
    } else {
        console.log("Auto-selected trial, not counted for accuracy.");
    }
    psychoJS.experiment.addData("CorrectResponseMain", correctchoice);
    psychoJS.experiment.addData("mainleftcredit", Number.parseInt(creditfirst));
    psychoJS.experiment.addData("mainrightcredit", Number.parseInt(creditsecond));
    psychoJS.experiment.addData("mainthirdcredit", Number.parseInt(creditthird));
    psychoJS.experiment.addData("mainchosenimage", chosenimage);
    psychoJS.experiment.addData("mainchosencredit", Number.parseInt(chosencredit));
    psychoJS.experiment.addData("mainselectedkey", selection.keys);
    psychoJS.experiment.addData("mainreactiontime", (response_made ? selection.rt : "Auto-selected"));
    psychoJS.experiment.addData("ShowRating", show_rating);
    psychoJS.experiment.addData("autoselectedtrial", auto_selection);
    psychoJS.experiment.addData("response_made", response_made);
    image3_to_store = ((! is_three_image_trial) ? "grey.png" : upperimage.image);
    credit3_to_store = ((! is_three_image_trial) ? 0 : creditthird);
    if ((! response_made)) {
        timed_out_trials.push({"image1": leftimage.image, "image2": rightimage.image, "image3": image3_to_store, "credit1": creditfirst, "credit2": creditsecond, "credit3": credit3_to_store});
        console.log(`Auto-selected trial stored: ${timed_out_trials.slice((- 1))[0]}`);
    }
    psychoJS.experiment.addData("timed_out_trials", timed_out_trials);
    console.log(`Timed-out trials: ${timed_out_trials}`);
    psychoJS.experiment.addData("timedOutTrialsCount", timed_out_trials.length);
    if ((MainExpTrials.thisN === (MainExpTrials.trialList.length - 1))) {
        console.log("MainExp completed. Ending MainExpTrials loop. Preparing for Recovery Loop.");
        MainExpTrials.finished = true;
    }
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var MainExpFeedbackComponents;
function MainExpFeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'MainExpFeedback' ---
    t = 0;
    MainExpFeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    decisionImage.setImage(chosenimage);
    text_15.setText(text_15.text);
    creditCounter.setText(("Total Credits: " + creditsEarned.toString()));
    // Run 'Begin Routine' code from code_9
    if (response_made) {
        text_15.text = `+ ${Number.parseInt(chosencredit)} credits`;
        console.log(`Participant feedback: ${chosenimage} with ${Number.parseInt(chosencredit)} credits.`);
    } else {
        text_15.text = `No option chosen within 2.5 seconds.
    Lowest reward (+ ${Number.parseInt(chosencredit)} credits) automatically selected.`
    ;
        console.log(`Auto-selection feedback: ${chosenimage} with ${Number.parseInt(chosencredit)} credits.`);
    }
    creditCounter.text = `Total Credits: ${Number.parseInt(creditsEarned)}`;
    console.log(`Credits Updated: ${Number.parseInt(creditsEarned)}`);
    
    // keep track of which components have finished
    MainExpFeedbackComponents = [];
    MainExpFeedbackComponents.push(decisionImage);
    MainExpFeedbackComponents.push(text_15);
    MainExpFeedbackComponents.push(creditCounter);
    
    for (const thisComponent of MainExpFeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function MainExpFeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'MainExpFeedback' ---
    // get current time
    t = MainExpFeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *decisionImage* updates
    if (t >= 0.0 && decisionImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      decisionImage.tStart = t;  // (not accounting for frame time here)
      decisionImage.frameNStart = frameN;  // exact frame index
      
      decisionImage.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (decisionImage.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      decisionImage.setAutoDraw(false);
    }
    
    // *text_15* updates
    if (t >= 0.0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index
      
      text_15.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_15.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_15.setAutoDraw(false);
    }
    
    // *creditCounter* updates
    if (t >= 0.0 && creditCounter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      creditCounter.tStart = t;  // (not accounting for frame time here)
      creditCounter.frameNStart = frameN;  // exact frame index
      
      creditCounter.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (creditCounter.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      creditCounter.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of MainExpFeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function MainExpFeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'MainExpFeedback' ---
    for (const thisComponent of MainExpFeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_17_allKeys;
var RatingComponents;
function RatingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Rating' ---
    t = 0;
    RatingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_33
    if ((! show_rating)) {
        console.log("Skipping Rating Routine for this trial.");
        continueRoutine = false;
    } else {
        console.log("Showing Rating Routine for this trial.");
        slider_initialized = false;
    }
    if (show_rating) {
        ratingTrialCounter += 1;
        console.log(`Rating Scale trial: ${ratingTrialCounter}`);
    }
    
    key_resp_17.keys = undefined;
    key_resp_17.rt = undefined;
    _key_resp_17_allKeys = [];
    difficultySlider.reset()
    // keep track of which components have finished
    RatingComponents = [];
    RatingComponents.push(text_13);
    RatingComponents.push(key_resp_17);
    RatingComponents.push(difficultySlider);
    
    for (const thisComponent of RatingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function RatingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Rating' ---
    // get current time
    t = RatingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }

    
    // *key_resp_17* updates
    if (t >= 0.0 && key_resp_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_17.tStart = t;  // (not accounting for frame time here)
      key_resp_17.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_17.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_17.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_17.clearEvents(); });
    }

    if (key_resp_17.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_17.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_17_allKeys = _key_resp_17_allKeys.concat(theseKeys);
      if (_key_resp_17_allKeys.length > 0) {
        key_resp_17.keys = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].name;  // just the last key pressed
        key_resp_17.rt = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].rt;
      }
    }
    
    
    // *difficultySlider* updates
    if (t >= 0.0 && difficultySlider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      difficultySlider.tStart = t;  // (not accounting for frame time here)
      difficultySlider.frameNStart = frameN;  // exact frame index
      
      difficultySlider.setAutoDraw(true);
    }

    // Run 'Each Frame' code from code_12
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! slider_initialized)) {
        difficultySlider.reset();
        difficultySlider.markerPos = 5;
        slider_initialized = true;
        console.log(`Slider starts at: ${difficultySlider.markerPos}`);
    }
    if (((difficultySlider.getRating() !== null) && _pj.in_es6("space", psychoJS.eventManager.getKeys()))) {
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RatingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var rating;
function RatingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Rating' ---
    for (const thisComponent of RatingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_17.corr, level);
    }
    psychoJS.experiment.addData('key_resp_17.keys', key_resp_17.keys);
    if (typeof key_resp_17.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_17.rt', key_resp_17.rt);
        }
    
    key_resp_17.stop();
    psychoJS.experiment.addData('difficultySlider.response', difficultySlider.getRating());
    psychoJS.experiment.addData('difficultySlider.rt', difficultySlider.getRT());
    // Run 'End Routine' code from code_12
    rating = difficultySlider.getRating();
    console.log(`Rating made for this trial: ${rating}`);
    if ((rating !== null)) {
        psychoJS.experiment.addData("Rating", Number.parseInt(rating));
        psychoJS.experiment.addData("TrialIndex", MainExpTrials.thisN);
    } else {
        psychoJS.experiment.addData("Rating", "NA");
        psychoJS.experiment.addData("TrialIndex", MainExpTrials.thisN);
    }
    
    // the Routine "Rating" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var n_recovery_trials;
var TimedOutTrialsComponents;
function TimedOutTrialsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TimedOutTrials' ---
    t = 0;
    TimedOutTrialsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_5
    n_recovery_trials = timed_out_trials.length;
    console.log(`Number of recovery trials: ${n_recovery_trials}`);
    
    // keep track of which components have finished
    TimedOutTrialsComponents = [];
    
    for (const thisComponent of TimedOutTrialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TimedOutTrialsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TimedOutTrials' ---
    // get current time
    t = TimedOutTrialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TimedOutTrialsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TimedOutTrialsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TimedOutTrials' ---
    for (const thisComponent of TimedOutTrialsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "TimedOutTrials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var current_recovery_trial;
var _key_resp_19_allKeys;
var credit1recovery;
var credit2recovery;
var credit3recovery;
var is_three_image_trial_recovery;
var is_two_image_trial_recovery;
var RecoveryComponents;
function RecoveryRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Recovery' ---
    t = 0;
    RecoveryClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_7
    if (timed_out_trials) {
        console.log(` Started: Timed out trials for the Recovery Loop: ${timed_out_trials}`);
        if ((RecoveryLoop.thisN < n_recovery_trials)) {
            current_recovery_trial = timed_out_trials[RecoveryLoop.thisN];
            console.log(`Processing Recovery Trial: ${current_recovery_trial}`);
        } else {
            console.log("RecoveryLoop.thisN is out of bounds.");
            continueRoutine = false;
            RecoveryLoop.finished = true;
        }
    } else {
        console.log("No timed-out trials. Ending Recovery Loop.");
        RecoveryLoop.finished = true;
        continueRoutine = false;
    }
    
    imageleft.setImage(image1);
    imageright.setImage(image2);
    imageup.setImage(image3);
    key_resp_19.keys = undefined;
    key_resp_19.rt = undefined;
    _key_resp_19_allKeys = [];
    creditCounterRecovery.setText(("Total Credits: " + creditsEarned.toString()));
    // Run 'Begin Routine' code from code_13
    rt_clock_recovery.reset();
    response_made_recovery = false;
    current_recovery_trial = timed_out_trials[RecoveryLoop.thisN];
    imageleft.setImage(current_recovery_trial["image1"]);
    imageright.setImage(current_recovery_trial["image2"]);
    imageup.setImage(current_recovery_trial["image3"]);
    credit1recovery = Number.parseInt(Number.parseFloat(current_recovery_trial["credit1"]));
    credit2recovery = Number.parseInt(Number.parseFloat(current_recovery_trial["credit2"]));
    credit3recovery = Number.parseInt(Number.parseFloat(current_recovery_trial["credit3"]));
    is_three_image_trial_recovery = (current_recovery_trial["image3"] !== "grey.png");
    is_two_image_trial_recovery = (current_recovery_trial["image3"] === "grey.png");
    console.log("image3:", current_recovery_trial["image3"]);
    console.log("Interpreted as 3-image trial?", is_three_image_trial_recovery);
    console.log(`Left Image: ${imageleft.image} (Credits: ${credit1recovery})`);
    console.log(`Right Image: ${imageright.image} (Credits: ${credit2recovery})`);
    console.log(`Upper Image: ${imageup.image} (Credits: ${credit3recovery})`);
    response_made_recovery = false;
    
    // keep track of which components have finished
    RecoveryComponents = [];
    RecoveryComponents.push(imageleft);
    RecoveryComponents.push(imageright);
    RecoveryComponents.push(imageup);
    RecoveryComponents.push(key_resp_19);
    RecoveryComponents.push(creditCounterRecovery);
    
    for (const thisComponent of RecoveryComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var keys_recovery;
function RecoveryRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Recovery' ---
    // get current time
    t = RecoveryClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *imageleft* updates
    if (t >= 0.0 && imageleft.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      imageleft.tStart = t;  // (not accounting for frame time here)
      imageleft.frameNStart = frameN;  // exact frame index
      
      imageleft.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (imageleft.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      imageleft.setAutoDraw(false);
    }
    
    // *imageright* updates
    if (t >= 0.0 && imageright.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      imageright.tStart = t;  // (not accounting for frame time here)
      imageright.frameNStart = frameN;  // exact frame index
      
      imageright.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (imageright.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      imageright.setAutoDraw(false);
    }
    
    // *imageup* updates
    if (t >= 0.0 && imageup.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      imageup.tStart = t;  // (not accounting for frame time here)
      imageup.frameNStart = frameN;  // exact frame index
      
      imageup.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (imageup.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      imageup.setAutoDraw(false);
    }
    
    // *key_resp_19* updates
    if (t >= 0.0 && key_resp_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_19.tStart = t;  // (not accounting for frame time here)
      key_resp_19.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_19.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_19.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_19.clearEvents(); });
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_19.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_19.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_19.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_19.getKeys({keyList: ['left', 'right', 'l', 'r', 'up'], waitRelease: false});
      _key_resp_19_allKeys = _key_resp_19_allKeys.concat(theseKeys);
      if (_key_resp_19_allKeys.length > 0) {
        key_resp_19.keys = _key_resp_19_allKeys[_key_resp_19_allKeys.length - 1].name;  // just the last key pressed
        key_resp_19.rt = _key_resp_19_allKeys[_key_resp_19_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *creditCounterRecovery* updates
    if (t >= 0.0 && creditCounterRecovery.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      creditCounterRecovery.tStart = t;  // (not accounting for frame time here)
      creditCounterRecovery.frameNStart = frameN;  // exact frame index
      
      creditCounterRecovery.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (creditCounterRecovery.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      creditCounterRecovery.setAutoDraw(false);
    }
    // Run 'Each Frame' code from code_13
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys_recovery = key_resp_19.keys;
    console.log(`Keys detected: ${keys_recovery}`);
    if (keys_recovery) {
        response_made_recovery = true;
        if ((_pj.in_es6("left", keys_recovery) || _pj.in_es6("l", keys_recovery))) {
            chosenimagerecovery = imageleft.image;
            chosencreditrecovery = credit1recovery;
        } else {
            if ((_pj.in_es6("right", keys_recovery) || _pj.in_es6("r", keys_recovery))) {
                chosenimagerecovery = imageright.image;
                chosencreditrecovery = credit2recovery;
            } else {
                if ((_pj.in_es6("up", keys_recovery) || (_pj.in_es6("u", keys_recovery) && imageup.image))) {
                    chosenimagerecovery = imageup.image;
                    chosencreditrecovery = credit3recovery;
                }
            }
        }
        console.log(`Chosen Recovery Image: ${chosenimagerecovery}, Credit: ${Number.parseInt(chosencreditrecovery)}`);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RecoveryComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var creditz_recovery;
var images_recovery;
var min_credit_recovery;
var min_index_recovery;
function RecoveryRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Recovery' ---
    for (const thisComponent of RecoveryComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_19.corr, level);
    }
    psychoJS.experiment.addData('key_resp_19.keys', key_resp_19.keys);
    if (typeof key_resp_19.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_19.rt', key_resp_19.rt);
        routineTimer.reset();
        }
    
    key_resp_19.stop();
    // Run 'End Routine' code from code_13
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((response_made_recovery === false)) {
        console.log(`No response within 2.5 seconds. Auto-selection applied.`);
        if (is_three_image_trial_recovery) {
            console.log("Auto-selection for a 3-image recovery trial.");
            creditz_recovery = [Number.parseInt(credit1recovery), Number.parseInt(credit2recovery), Number.parseInt(credit3recovery)];
            console.log(`Credits on this auto-selection recovery trial: ${Number.parseInt(creditz_recovery)}`);
            images_recovery = [imageleft.image, imageright.image, imageup.image];
            console.log(`Images on this recovery auto-selection trial: ${images_recovery}`);
            min_credit_recovery = Math.min(...creditz_recovery);
            console.log(`Minimum credit on the recovery trial: ${Number.parseInt(min_credit_recovery)}`);
            min_index_recovery = util.index(creditz_recovery, min_credit_recovery);
            console.log(`Index of minimum credit: ${Number.parseInt(min_index_recovery)}`);
            chosenimagerecovery = images_recovery[min_index_recovery];
            console.log(`Minimum credit image automatically chosen: ${chosenimagerecovery}`);
            chosencreditrecovery = creditz_recovery[min_index_recovery];
            console.log(`Minimum credit automatically chosen: ${Number.parseInt(chosencreditrecovery)}`);
        } else {
            if (is_two_image_trial_recovery) {
                console.log("Auto-selection for a 2-image recovery trial.");
                if ((credit1recovery < credit2recovery)) {
                    chosenimagerecovery = imageleft.image;
                    chosencreditrecovery = credit1recovery;
                } else {
                    chosenimagerecovery = imageright.image;
                    chosencreditrecovery = credit2recovery;
                }
            }
        }
        console.log(`Auto-selected image: ${chosenimagerecovery}, Credit: ${Number.parseInt(chosencreditrecovery)}`);
    }
    if ((is_two_image_trial_recovery && _pj.in_es6("grey.png", chosenimagerecovery.toString()))) {
        console.log("\u26a0\ufe0f WARNING: grey.png was selected \u2014 this shouldn't happen in 2-image trials!");
    }
    if (chosencreditrecovery) {
        creditsEarned += Number.parseInt(chosencreditrecovery);
        console.log(`Total Credits Updated: ${Number.parseInt(creditsEarned)}`);
    } else {
        console.log("Error: credits not updated");
    }
    creditCounterRecovery.text = `Total Credits: ${Number.parseInt(creditsEarned)}`;
    console.log(`Credits updated after recovery trial: ${Number.parseInt(creditsEarned)}`);
    psychoJS.experiment.addData("recoveryelectedkey", key_resp_19.keys);
    psychoJS.experiment.addData("recoveryreactiontime", (response_made ? key_resp_19.rt : "Auto-selected"));
    if ((chosenimagerecovery !== null)) {
        psychoJS.experiment.addData("ChosenImageRecovery", chosenimagerecovery.toString());
        psychoJS.experiment.addData("credit1recovery", Number.parseInt(credit1recovery));
        psychoJS.experiment.addData("credit2recovery", Number.parseInt(credit2recovery));
        psychoJS.experiment.addData("credit3recovery", Number.parseInt(credit3recovery));
        psychoJS.experiment.addData("ChosenCreditRecovery", Number.parseInt(chosencreditrecovery));
    } else {
        psychoJS.experiment.addData("SelectedImageRecovery", "No image selected");
    }
    psychoJS.experiment.addData("Recovery_Image1", current_recovery_trial["image1"]);
    psychoJS.experiment.addData("Recovery_Image2", current_recovery_trial["image2"]);
    psychoJS.experiment.addData("Recovery_Image3", current_recovery_trial["image3"]);
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var RecoveryFeedbackComponents;
function RecoveryFeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'RecoveryFeedback' ---
    t = 0;
    RecoveryFeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    chosenImage.setImage(chosenimagerecovery);
    text_16.setText(text_16.text);
    creditCounter_2.setText(("Total Credits: " + creditsEarned.toString()));
    // Run 'Begin Routine' code from code_15
    if ((! response_made_recovery)) {
        text_16.text = `No option chosen. Lowest reward (+ ${Number.parseInt(chosencreditrecovery)} credits) automatically selected.`;
        console.log(`Auto-selection feedback: ${chosenimagerecovery} with ${Number.parseInt(chosencreditrecovery)} credits.`);
    } else {
        text_16.text = `+ ${Number.parseInt(chosencreditrecovery)} credits`;
        console.log(`Participant recovery trial feedback: ${chosenimagerecovery} with ${Number.parseInt(chosencreditrecovery)} credits.`);
    }
    console.log(`Credits Updated after recovery trial: ${Number.parseInt(creditsEarned)}`);
    
    // keep track of which components have finished
    RecoveryFeedbackComponents = [];
    RecoveryFeedbackComponents.push(chosenImage);
    RecoveryFeedbackComponents.push(text_16);
    RecoveryFeedbackComponents.push(creditCounter_2);
    
    for (const thisComponent of RecoveryFeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function RecoveryFeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'RecoveryFeedback' ---
    // get current time
    t = RecoveryFeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *chosenImage* updates
    if (t >= 0.0 && chosenImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chosenImage.tStart = t;  // (not accounting for frame time here)
      chosenImage.frameNStart = frameN;  // exact frame index
      
      chosenImage.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (chosenImage.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      chosenImage.setAutoDraw(false);
    }
    
    // *text_16* updates
    if (t >= 0.0 && text_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_16.tStart = t;  // (not accounting for frame time here)
      text_16.frameNStart = frameN;  // exact frame index
      
      text_16.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_16.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_16.setAutoDraw(false);
    }
    
    // *creditCounter_2* updates
    if (t >= 0.0 && creditCounter_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      creditCounter_2.tStart = t;  // (not accounting for frame time here)
      creditCounter_2.frameNStart = frameN;  // exact frame index
      
      creditCounter_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (creditCounter_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      creditCounter_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RecoveryFeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RecoveryFeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'RecoveryFeedback' ---
    for (const thisComponent of RecoveryFeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_18_allKeys;
var TotalCreditsComponents;
function TotalCreditsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TotalCredits' ---
    t = 0;
    TotalCreditsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_18.keys = undefined;
    key_resp_18.rt = undefined;
    _key_resp_18_allKeys = [];
    // Run 'Begin Routine' code from code_17
    totalCredits = (creditsEarnedTraining + creditsEarned);
    console.log(`Total Credits: ${Number.parseInt(totalCredits)}`);
    totaltrainingmaincredits.text = ((`Experiment has now finished. You won ` + totalCredits.toString()) + " credits in the experiment. Press SPACE to continue.");
    
    // keep track of which components have finished
    TotalCreditsComponents = [];
    TotalCreditsComponents.push(totaltrainingmaincredits);
    TotalCreditsComponents.push(key_resp_18);
    
    for (const thisComponent of TotalCreditsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TotalCreditsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TotalCredits' ---
    // get current time
    t = TotalCreditsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *totaltrainingmaincredits* updates
    if (t >= 0.0 && totaltrainingmaincredits.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      totaltrainingmaincredits.tStart = t;  // (not accounting for frame time here)
      totaltrainingmaincredits.frameNStart = frameN;  // exact frame index
      
      totaltrainingmaincredits.setAutoDraw(true);
    }

    
    // *key_resp_18* updates
    if (t >= 0.0 && key_resp_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_18.tStart = t;  // (not accounting for frame time here)
      key_resp_18.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_18.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_18.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_18.clearEvents(); });
    }

    if (key_resp_18.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_18.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_18_allKeys = _key_resp_18_allKeys.concat(theseKeys);
      if (_key_resp_18_allKeys.length > 0) {
        key_resp_18.keys = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].name;  // just the last key pressed
        key_resp_18.rt = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TotalCreditsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var main_experiment_accuracy;
function TotalCreditsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TotalCredits' ---
    for (const thisComponent of TotalCreditsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_18.corr, level);
    }
    psychoJS.experiment.addData('key_resp_18.keys', key_resp_18.keys);
    if (typeof key_resp_18.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_18.rt', key_resp_18.rt);
        routineTimer.reset();
        }
    
    key_resp_18.stop();
    // Run 'End Routine' code from code_17
    main_experiment_accuracy = (correct_trials_main / total_trials_main);
    psychoJS.experiment.addData("MainExperimentAccuracy", main_experiment_accuracy);
    console.log(`Main Experiment completed. Accuracy: ${util.pad(Number.parseFloat((main_experiment_accuracy * 100)).toFixed(2), 1)}% (${correct_trials_main}/${total_trials_main} correct)`);
    psychoJS.experiment.addData("FinalCredits", Number.parseInt(totalCredits));
    if ((totalCredits >= 1000)) {
        bonus = 4;
    } else {
        if (((950 <= totalCredits) && (totalCredits < 1000))) {
            bonus = 3;
        } else {
            if (((900 <= totalCredits) && (totalCredits < 950))) {
                bonus = 2;
            } else {
                if (((800 <= totalCredits) && (totalCredits < 900))) {
                    bonus = 1;
                } else {
                    bonus = 0;
                }
            }
        }
    }
    psychoJS.experiment.addData("BonusPayment", bonus);
    
    // the Routine "TotalCredits" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var WaitComponents;
function WaitRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Wait' ---
    t = 0;
    WaitClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(6.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    WaitComponents = [];
    WaitComponents.push(text_17);
    
    for (const thisComponent of WaitComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function WaitRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Wait' ---
    // get current time
    t = WaitClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_17* updates
    if (t >= 0.0 && text_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_17.tStart = t;  // (not accounting for frame time here)
      text_17.frameNStart = frameN;  // exact frame index
      
      text_17.setAutoDraw(true);
    }

    frameRemains = 0.0 + 6.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_17.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_17.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WaitComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WaitRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Wait' ---
    for (const thisComponent of WaitComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

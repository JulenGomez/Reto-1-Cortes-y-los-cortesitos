class Canvas {
  constructor(data) {
    this.teamName = data.teamName;
    this.who = data.who;
    this.purpose = data.purpose;
    this.values = data.values;
    this.alwaysDo = data.alwaysDo;
    this.neverDo = data.neverDo;
    this.decisionMaking = data.decisionMaking;
    this.ruleBreak = data.ruleBreak;
    this.raiseIssues = data.raiseIssues;
    this.sprintBacklog = data.sprintBacklog;
    this.increment = data.increment;
    this.boundaries = data.boundaries;
    this.scrumOther = data.scrumOther;
    this.strengths = data.strengths;
    this.weaknesses = data.weaknesses;
  }

  // Getters
  getTeamName() { return this.teamName; }
  getWho() { return this.who; }
  getPurpose() { return this.purpose; }
  getValues() { return this.values; }
  getAlwaysDo() { return this.alwaysDo; }
  getNeverDo() { return this.neverDo; }
  getDecisionMaking() { return this.decisionMaking; }
  getRuleBreak() { return this.ruleBreak; }
  getRaiseIssues() { return this.raiseIssues; }
  getSprintBacklog() { return this.sprintBacklog; }
  getIncrement() { return this.increment; }
  getBoundaries() { return this.boundaries; }
  getScrumOther() { return this.scrumOther; }
  getStrengths() { return this.strengths; }
  getWeaknesses() { return this.weaknesses; }

  // Setters
  setTeamName(value) { this.teamName = value; }
  setWho(value) { this.who = value; }
  setPurpose(value) { this.purpose = value; }
  setValues(value) { this.values = value; }
  setAlwaysDo(value) { this.alwaysDo = value; }
  setNeverDo(value) { this.neverDo = value; }
  setDecisionMaking(value) { this.decisionMaking = value; }
  setRuleBreak(value) { this.ruleBreak = value; }
  setRaiseIssues(value) { this.raiseIssues = value; }
  setSprintBacklog(value) { this.sprintBacklog = value; }
  setIncrement(value) { this.increment = value; }
  setBoundaries(value) { this.boundaries = value; }
  setScrumOther(value) { this.scrumOther = value; }
  setStrengths(value) { this.strengths = value; }
  setWeaknesses(value) { this.weaknesses = value; }
}

module.exports = Canvas;
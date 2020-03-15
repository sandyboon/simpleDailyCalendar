('use strict');

//Global vars
const currentDay = $('#currentDay');
const mainContianer = $('#mainContainer');

$(document).ready(function() {
  //set thhe current day
  currentDay.text(
    moment()
      .local()
      .format('dddd,MMMM,Do')
  );
  //capture the current hour
  let currentHour = parseInt(
    moment()
      .local()
      .format('H')
  );
  //Make sure its empty first.
  mainContianer.html('');
  /* Add tome block rows programatically on load */
  for (let i = 9; i < 18; i++) {
    // console.log(moment(i.toString()).format('h'));
    addTimeBlock(timeToDisplay(i), getTimeBlockStyle(i, currentHour));
  }
});

function timeToDisplay(i) {
  let ampm = moment()
    .hour(i)
    .format('A');
  let displayTime = i > 12 ? i - 12 : i;
  return displayTime
    .toString()
    .concat(' ')
    .concat(ampm);
}

function getTimeBlockStyle(time, currentHour) {
  if (time === currentHour) {
    return 'row present time-block';
  } else if (time > currentHour) {
    return 'row future time-block';
  } else {
    return 'row past time-block';
  }
}

function addTimeBlock(time, timeBlocStyle) {
  let timeBlockRow = bootStrapHelper.getBootStrapGridRow(
    'timeBlockRow',
    '<div>',
    timeBlocStyle
  );
  let hourColumn = bootStrapHelper.getootStrapGridColumn(
    'hourDiv',
    '<div>',
    'col-1 hour'
  );
  let hourSpan = bootStrapHelper.createJqueryDomElement('hourSpan', '<span>');
  hourSpan.text(time);
  hourColumn.append(hourSpan);
  timeBlockRow.append(hourColumn);
  //   console.log(timeBlockRow);
  let inputDiv = bootStrapHelper.getootStrapGridColumn(
    'inputDiv',
    '<div>',
    'col-10 textarea text-left p-0'
  );
  let inputTask = bootStrapHelper.getFormInput(
    'task',
    'text',
    'form-control-lg description p-2 mt-3'
  );
  inputDiv.append(inputTask);
  timeBlockRow.append(inputDiv);
  let saveBtnDiv = bootStrapHelper.getootStrapGridColumn(
    'saveBtnDiv',
    '<div>',
    'col-1 saveBtn pt-4'
  );
  let saveTaskSpan = bootStrapHelper.createJqueryDomElement(
    'saveTaskSpan',
    '<span>'
  );
  let saveIcon = bootStrapHelper
    .createJqueryDomElement('saveIcon', '<i>')
    .attr('class', 'fas fa-lg fa-save');
  saveTaskSpan.append(saveIcon);
  saveBtnDiv.append(saveTaskSpan);
  timeBlockRow.append(saveBtnDiv);
  mainContianer.append(timeBlockRow);
}

('use strict');

const bootStrapHelper = {};

bootStrapHelper.getBootStrapGridRow = function(
  id,
  elementType,
  additionalClasses
) {
  let bootstrapElement = this.createJqueryDomElement(id, elementType);
  let bootStrapClass = helper.prependStringIfMissing(
    additionalClasses,
    'row',
    true
  );
  bootstrapElement.attr('class', bootStrapClass);
  return bootstrapElement;
};

bootStrapHelper.getootStrapGridColumn = function(
  id,
  elementType,
  additionalClasses
) {
  let bootstrapElement = this.createJqueryDomElement(id, elementType);
  let bootStrapClass = helper.prependStringIfMissing(
    additionalClasses,
    'col',
    true
  );
  bootstrapElement.attr('class', bootStrapClass);
  return bootstrapElement;
};

bootStrapHelper.getBootStrapButton = function(
  id,
  btnSize,
  btnType,
  additionalClasses
) {
  let bootstrapElement = this.createJqueryDomElement(id, 'button');
  let bootStrapClass = 'btn';
  bootStrapClass = helper.checkIfValueIsPresent(btnType)
    ? bootStrapClass.concat(' ').concat(btnType)
    : bootStrapClass;
  bootStrapClass = helper.checkIfValueIsPresent(btnSize)
    ? bootStrapClass.concat(' ').concat(btnSize)
    : bootStrapClass;
  bootStrapClass = helper.checkIfValueIsPresent(additionalClasses)
    ? bootStrapClass.concat(' ').concat(additionalClasses)
    : bootStrapClass;
  bootstrapElement.attr('class', bootStrapClass);
  return bootstrapElement;
};

bootStrapHelper.getBootStrapBadge = function(id, badgeType, additionalClasses) {
  let bootstrapElement = this.createJqueryDomElement(id, 'span');
  let bootStrapClass = 'badge';
  bootStrapClass = helper.checkIfValueIsPresent(badgeType)
    ? bootStrapClass.concat(' ').concat(badgeType)
    : bootStrapClass;
  bootStrapClass = helper.checkIfValueIsPresent(additionalClasses)
    ? bootStrapClass.concat(' ').concat(additionalClasses)
    : bootStrapClass;
  bootstrapElement.attr('class', bootStrapClass);
  return bootstrapElement;
};

bootStrapHelper.getFormInput = function(id, inputType, additionalClasses) {
  let bootstrapElement = this.createJqueryDomElement(id, '<input>');
  bootstrapElement.attr('type', inputType);
  let bootStrapClass = 'form-control';
  bootStrapClass = helper.checkIfValueIsPresent(additionalClasses)
    ? bootStrapClass.concat(' ').concat(additionalClasses)
    : bootStrapClass;
  bootstrapElement.attr('class', bootStrapClass);
  return bootstrapElement;
};

bootStrapHelper.createJqueryDomElement = function(id, domElementType) {
  let domElement = $(domElementType); //document.createElement(domElementType);
  id = helper.checkIfValueIsPresent(id) ? id : helper.getNextId();
  // domElement.attr('id', id);
  domElement.attr('id', id);
  return domElement;
};

// export default bootStrapHelper;

/**
 * Toggles - toggles.js
 * @author martinfjant
 * Toggles.js is a small library for easily doing small scripting
 * tasks using the ye olde onClick, onLoad, onMouseOver attributes.
 */

/**
 * Get all templates in the document and saves them in global variables
 * that are accessible to the toggles.
 * @type {void}
 */
function getTemplates() {}

/**
 * Toggles visibility of itself, or input query selector.
 * @param {string} selector - The selector
 */
function toggle(selector, cssClass) {
  let list =
    typeof selector === "string"
      ? document.querySelector(selector).classList
      : event.target.classList;
  list.toggle(cssClass);
}

function selectInnerHTML(item = this, target, callback) {
  document.querySelector(target).innerHTML = item.innerHTML;
  callback();
}

function selectValue() {
  //Like above, but value
}
/**
 * Removes a node from the DOM.
 * @param {string} selector - Selector to the node to be removed
 * @param {function} callback - Callback to be called after removal
 */
function remove(selector, callback) {}

/**
 * Mount a <template> somewhere in the DOM
 * @param {string} destination - Selector, to which the template will be appended
 * @param {string} template - Selector to the template
 * @param {function} callback - Callback to be run after the mount
 */
function mount(destination, template, callback) {}

function setValue() {}

function getValue() {}

function load(url, callback) {
  //If js, ad script tag, if css, add link tag, img, add in dom
  fetch(url).then(callback());
}

function getLocation(callback) {
  let foo;
  callback == true && callback(foo);
}

function beit(condition, callback) {
  if (condition) {
    callback == true && callback();
  }
}

function mapChildren(selector, callback) {
  let children = [...selector.children].map((child) => callback(child));
}

function sendJSON(callback) {
  //Get all formdata
  //Make to JSON
  //Get method and action
  //Send using fetch
  //do callback
}

function schedule(duration, times, callback) {
  //Run callback times times every duration
}

function next(element, cssClass, callback) {
  //Find parent, make list of siblings
  //Unless last, toggle current off, next on
  //If last, run callback
}

function back() {
  //Next but backwards
}

function showModal() {
  //Get modal template
  //Create shadow
  //Mount both under body
  //Trap focus
}
function closeModal() {
  //Remove modal and shadow
  //Release focus
}

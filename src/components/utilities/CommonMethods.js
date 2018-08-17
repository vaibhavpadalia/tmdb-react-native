/**
 * @description Display alert with text whenever called.
 * @param customString Message That you want to display.
 */
export function customAlert(customString) {
  setTimeout(() => {
    alert(customString);
  }, 5);
}

/**
 * @author Vaibhav Padalia
 * @param condition The condition that has to be checked.
 * @param content The content that is to be shown when condition is true.
 * @description Function for conditional rendering.
 */

export function renderIf(condition, content) {
  if (condition) {
    return content;
  } else {
    return null;
  }
}

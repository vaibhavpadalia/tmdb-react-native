import { customAlert } from "./CommonMethods";
/**
 *
 * @param {*} obj scope of the class from where it is called.
 * @param {*} endpoint API endpoint.
 * @param {*} data Body if data is to be sent.
 * @param {*} returnMethod callback to main component.
 * @param {*} type Method i.e. POST,GET,DELETE etc.
 * @param {*} loader Whether loader is to be shown or not (boolean).
 */

export async function callRemoteMethod(obj, endpoint, data, returnMethod, type = "GET", loader) {
  if (loader == true) {
    obj.setState({ isLoading: true });
  }
  var request = {
    method: type,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  if (type != "GET") {
    request.body = JSON.stringify(data);
  }

  await fetch(endpoint, request)
    .then(response => response.json())
    .then(responseJson => {
      if (loader == true) {
        obj.setState({ isLoading: false });
      }
      eval("obj." + returnMethod + "(responseJson)");
    })
    .catch(error => {
      obj.setState({ isLoading: false });
      setTimeout(() => {
        customAlert(error.message);
      }, 500);
    });
}

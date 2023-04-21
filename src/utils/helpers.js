export const logout = () => {
  localStorage.clear();
};

export const isLoggedIn = () => {
  const authToken = localStorage.getItem("authToken");
  if (authToken) {
    return true;
  }
  return false;
};

export const numberFormatter = (e) => {
  let inpField = document.getElementById("phone");
  let key = e.keyCode || e.charCode;
  if (key === 8) {
    return false;
  }

  let l = inpField?.value?.length;
  switch (l) {
    case 4:
      inpField.value = inpField.value + " ";
      break;
    case 8:
      inpField.value = inpField.value + " ";
      break;
    case 12:
      inpField.value = inpField.value.slice(0, l - 1);
      break;
    default:
      // eslint-disable-next-line
      inpField.value = inpField.value;
  }
};

export const getErrorMessage = (type = null, name) => {
  switch (type) {
    case "required":
      return `Please Enter ${name}`;
    case "valid":
      return `Please Enter Valid ${name}`;
    case "select-required":
      return `Please Select ${name}`;
    case "confirm":
      return `Confirm ${name} should be same as ${name}`;
    case "passstrength":
      return `${name} must be min 8 letters, with at least a symbol, upper and lower case letters and a number`;
    case "phoneformat":
      return `${name} number should be a proper format as (xxx) xxx-xxxx`;
    case "agreeterms":
      return `${name} is required`;
    default:
      return name;
  }
};

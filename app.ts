let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

// Never type

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

generateError("an error has ocurred", 500);

export const validateMobileNumber = (number: string) => {
  const regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
  return regex.test(number);
};

export const vaildateEmail = (email: string) => {
  const regex = /^\S+@\S+\.\S+$/
  return regex.test(email)
}

export const validateFullName = (fullName: string) => {
  const regex = /^([a-zA-Zа-яА-ЯёЁ]{3,})\s+([a-zA-Zа-яА-ЯёЁ\s]{3,})$/;
  return regex.test(fullName)
}

export const validateNickname = (nickname: string) => {
  const regex = /^(?=.{3,16}$)[a-z0-9](?:[._-]?[a-z0-9])*$/i;
  return regex.test(nickname)
}
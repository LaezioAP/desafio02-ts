export const login = (name: string): void => {
  if (Number(name)) {
    alert(`Passe um nome válido!`);
    return;
  }

  alert(`Olá ${name}, seja bem vindo(a) a plataforma DIO BANK`);
};

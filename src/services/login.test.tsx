import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;
  it("deve aparecer um alert com login efetuado", () => {
    login("Laezio");
    expect(mockAlert).toHaveBeenCalledWith(
      `Olá Laezio, seja bem vindo(a) a plataforma DIO BANK`
    );
  });
});

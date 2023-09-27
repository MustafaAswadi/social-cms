export class User {
  private phone_Number: number;
  private access_code?: number | undefined;

  constructor(Phone_Number: number, access_code?: number) {
    this.phone_Number = Phone_Number;
    this.access_code = access_code;
  }

  getPhoneNumber(): number {
    return this.phone_Number;
  }

  getAccessCode(): number | undefined {
    return this.access_code;
  }
}

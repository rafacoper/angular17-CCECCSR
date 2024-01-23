export class User {
  constructor(
    public name: string,
    public email: string,
    public phone: number,
    public topic: string,
    public timePreferences: string,
    public subscribed: boolean
  ) {}
}

import Address from "../value-object/address";

export default interface CustomerInterface {
  get id(): string;
  get name(): string;
  get active(): boolean;
  get rewardPoints(): number;
  get address(): Address;
  changeName(newName: string): void;
  changeAddress(addres: Address): void;
  addRewardPoints(points: number): void;
  activate(): void;
  deactivate(): void;
  validate(): void;
}

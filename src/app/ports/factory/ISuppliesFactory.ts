import { IInputPort, ISupplies } from '../interfaces';

export abstract class ISuppliesFactory {
  abstract search(): IInputPort<string, ISupplies[]>;
}

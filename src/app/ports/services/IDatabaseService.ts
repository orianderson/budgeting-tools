export abstract class IDatabaseService {
  abstract get(query: any): Promise<any>;
}

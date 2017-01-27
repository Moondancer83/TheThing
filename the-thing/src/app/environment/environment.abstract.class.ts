import {Environment} from "./environment.interface";

export abstract class AbstractEnvironment implements Environment {
  private _name: string;
  private _details: string;
  private _resources: number;


  constructor(name: string, details: string, resources: number) {
    this._name = name;
    this._details = details;
    this._resources = resources;
  }

  getName(): string {
    return this._name;
  }

  getDetails(): string {
    return this._details;
  }

  getResources(): number {
    return this._resources;
  }

  setResources(value: number) {
    this._resources = value;
  }
}

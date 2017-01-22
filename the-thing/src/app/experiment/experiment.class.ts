import {Environment} from "../environment/environment.interface";

export class Experiment {
  constructor(name: string, details: string, environment: Environment, hosts: any[]) {
    this.name = name;
    this.details = details;
    this.environment = environment;
    this.hosts = hosts;
  }

  name: string;
  details: string;
  environment: Environment;
  hosts: any[];

  getEnvironmentName(): string {
    if (this.environment) {
      return this.environment.getName();
    } else {
      return "";
    }
  }
  getEnvironmentDetails(): string{
    if (this.environment) {
      return this.environment.getDetails();
    } else {
      return "";
    }
  }
}

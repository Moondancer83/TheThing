/**
 * The environment defines all the environment properties (e.g. natural resources).
 */
export interface Environment {
  getName(): string;
  getDetails(): string;
  getResources(): number;
}

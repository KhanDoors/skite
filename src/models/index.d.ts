import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Projects {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly url?: string;
  readonly isActive?: boolean;
  readonly createdDate?: string;
  constructor(init: ModelInit<Projects>);
  static copyOf(source: Projects, mutator: (draft: MutableModel<Projects>) => MutableModel<Projects> | void): Projects;
}
import { Workflowstate } from './workflowstate';
export class Project{
    constructor(
      public name: string,
      public id: string,
      public desc: string,
      public workflowstate: string
    ){}
  }
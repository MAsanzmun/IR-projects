import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { Workflowstate } from '../interfaces/workflowstate';

@Injectable()
export class ProjectsService {
  private workflowstates: Workflowstate[] = [
    {
    id: 'Fase 1'
  },
    {
      id: 'Fase 2'
    },
    {
      id: 'Fase 3 '
    }
];
  private projects: Project[] = [{
    name: 'Proyecto 1',
    id: 'P1',
    desc: 'Este es el primer proyecto de prueba!!!',
    workflowstate: 'Fase 1'
  },
    {
      name: 'Proyecto 2',
      id: 'P2',
      desc: 'Este es el segundo proyecto de prueba!!!',
      workflowstate: 'Fase 1'
    },
    {
      name: 'Proyecto 3',
      id: 'P3',
      desc: 'Este es el tercero proyecto de prueba!!!',
      workflowstate: 'Fase 2'
    },
    {
      name: 'Proyecto 4',
      id: 'P4',
      desc: 'Este es el cuarto proyecto de prueba!!!',
      workflowstate: 'Fase 3'
    }
];
  constructor() {
    console.log('El servicio de proyectos esta listo para ser utilizado!!!!');
  }

  getProyectos() {
    return this.projects;
  }

  getWorkflowstates() {
    return this.workflowstates;
  }

}

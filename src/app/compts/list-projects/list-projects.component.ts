import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './../../service/projects.service';
import { Project } from './../../interfaces/project';
import { Workflowstate } from './../../interfaces/workflowstate';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html'
})
export class ListProjectsComponent implements OnInit {
  projects:Project[] =[];
  workflowstates:Workflowstate[]=[];
  constructor(private _projectsService:ProjectsService) { }

  ngOnInit() {
    this.projects=this._projectsService.getProyectos();
    this.workflowstates = this._projectsService.getWorkflowstates();
    console.log(this.projects);
  }

}

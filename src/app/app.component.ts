import { Component } from '@angular/core';
import { SummaryComponent } from './Pages/summary/summary.component';
import { EducationComponent } from './Pages/education/education.component';
import { WorkComponent } from './Pages/work/work.component';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { SkillsComponent } from './Pages/skills/skills.component';
import { AboutComponent } from './Pages/about/about.component';

@Component({
  selector: 'app-root',
  imports: [
    SummaryComponent,
    EducationComponent,
    WorkComponent,
    ProjectsComponent,
    SkillsComponent,
    AboutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cv';
}

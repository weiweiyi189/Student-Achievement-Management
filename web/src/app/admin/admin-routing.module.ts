import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";



const routes: Routes = [
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
  },
  {
    path: 'course',
    loadChildren: () => import('./course/course.module').then(m => m.CourseModule)
  },
  {
    path: 'klass',
    loadChildren: () => import('./klass/klass.module').then(m => m.KlassModule)
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

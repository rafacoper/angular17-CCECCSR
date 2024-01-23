import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './department-detail.component.html',
  styleUrl: './department-detail.component.css'
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: Params) => {
      let id = parseInt(params['get']('id'));
      this.departmentId = id;

    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }
  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    //this.router.navigate(['/departments', {id: selectedId}]);
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  }

  showOverview(){
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  showContact(){
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}

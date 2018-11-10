import { Directive, Input, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';

@Directive({
  selector: '[ifInRole]'
})
export class IfInRoleDirective implements OnInit {

  @Input('ifInRole') role: string;

  constructor(private viewContainerRef: ViewContainerRef,
              private templateRef: TemplateRef<any>) {
  }

  ngOnInit() {
    if (this.role === localStorage.getItem('role')) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
        this.viewContainerRef.clear();
    }
  }

}

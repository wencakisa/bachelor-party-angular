import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { AuthenticationService } from '../authentication/shared/authentication.service';

@Directive({
    selector: '[ifInRole]'
})
export class IfInRoleDirective implements OnInit {
    @Input('ifInRole') roles: string[];

    constructor(private viewContainer: ViewContainerRef,
                private templateRef: TemplateRef<any>,
                private authService: AuthenticationService) {
    }

    ngOnInit(): void {
        if (this.roles.indexOf(this.authService.getCurrentUserRole()) !== -1) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}

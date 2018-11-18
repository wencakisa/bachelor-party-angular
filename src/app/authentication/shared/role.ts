import { Router } from '@angular/router';

export class Role {
	private name: string;
	private route: string;

	constructor(name: string, route: string) {
		this.name = name;
		this.route = route;
	}

	public getName(): string {
		return this.name;
	}

	public getRoute(): string {
		return this.route;
	}

	public redirectToRoute(router : Router) {
		router.navigate([this.route]);
	}
}

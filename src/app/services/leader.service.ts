import { Injectable } from "@angular/core";
import { LEADERS } from "../shared/leader";
import { Leader } from "../shared/leaders";

@Injectable({
  providedIn: "root"
})
export class LeaderService {
  constructor() {}
  getLeader(): Leader[] {
    return LEADERS;
  }
  getLeaders(id: string): Leader {
    return LEADERS.filter(promo => promo.id === id)[0];
  }
  getFeaturedLeaders(): Leader {
    return LEADERS.filter(promo => promo.featured)[0];
  }
}

import { Component, OnInit } from "@angular/core";
import { Leader } from "../shared/leaders";
import { LeaderService } from "../services/leader.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  leader: Leader[];
  // selectedLeader: Leader;

  constructor(private leaderService: LeaderService) {}

  ngOnInit() {
    this.leader = this.leaderService.getLeader();
  }
}

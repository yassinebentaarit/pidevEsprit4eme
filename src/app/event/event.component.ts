import { Component, Inject, OnInit } from "@angular/core";
import { EventService } from "app/sevices/event.service";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from "@angular/material/dialog";
import { Events } from "./events";
import { Logistics } from "app/logistics/logistics";
import { LogisticsService } from "app/sevices/logistics.service";
import {
  AddLogisticsComponent,
  EditLogistics,
} from "app/logistics/logistics.component";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.css"],
})
export class EventComponent implements OnInit {
  filteredData: any[] = [];
  private dataSource: any[];
  searchText = "";

  constructor(
    private logisticsService: LogisticsService,
    private eventService: EventService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllActiveEvents();
  }

  refresh() {
    this.getAllActiveEvents();
  }

  addLogistics(id_event: number) {
    console.log(id_event);
    const dialogRef = this.dialog.open(AddLogisticsComponent, {
      width: "500px",
      data: {
        id_event: id_event,
        accessory: "",
        classNb: 0,
        tableCount: 0,
        chair: 0,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.refresh();
    });
  }
  private getAllActiveEvents() {
    this.eventService.getAllActiveEvents().subscribe(
      (res: Events[]) => {
        console.log(res);
        this.dataSource = res;
        this.filteredData = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  archiveEvent(id: number) {
    this.eventService.deleteEvent(id).subscribe((res: any) => {
      // Handle success or show notification
      this.refresh();
    });
  }

  openEditDialog(
    id: number,
    eventName: string,
    description: string,
    eventStart: Date,
    eventEnd: Date,
    budget: number,
    poster: string
  ): void {
    console.log(id);
    const dialogRef = this.dialog.open(EditDialogEvent, {
      width: "500px",
      data: {
        id_event: id,
        eventName: eventName,
        description: description,
        eventStart: eventStart,
        eventEnd: eventEnd,
        budget: budget,
        poster: poster,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.refresh();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogEvent, {
      width: "500px",
      data: {
        eventName: "",
        description: "",
        eventStart: new Date(),
        eventEnd: new Date(),
        budget: 0,
        poster: "",
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.refresh();
    });
  }

  onSearchChange() {
    // Reset the filteredData array
    this.filteredData = [];

    // Check if the search text is empty
    if (!this.searchText) {
      this.filteredData = this.dataSource;
      return;
    }

    // Perform the search based on the searchText
    this.filteredData = this.dataSource.filter((event) => {
      // Customize the search criteria as per your requirements
      const fullSearch =
        `${event.eventName} ${event.description}`.toLowerCase();
      return fullSearch.includes(this.searchText.toLowerCase());
    });
  }

  hasLogitics(e: Events) {
    if (e.logistiques) {
      return true;
    }
    return false;
  }
  editLogistics(e: Logistics) {
    console.log(e);
    const dialogRef = this.dialog.open(EditLogistics, {
      width: "500px",
      data: {
        id_logistics: e.id_logistics,
        chair: e.chair,
        tableCount: e.chair,
        classNb: e.classNb,
        accessory: e.accessory,
        id_event: e.id_event,
      },
    });
    console.log(e.id_logistics);
    dialogRef.afterClosed().subscribe((result) => {
      this.refresh();
    });
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: "dialog-event",
  templateUrl: "dialog-event.html",
})
// tslint:disable-next-line:component-class-suffix
export class DialogEvent {
  constructor(
    public dialogRef: MatDialogRef<DialogEvent>,
    @Inject(MAT_DIALOG_DATA) public data: Events,
    private eventService: EventService
  ) {}
  submit() {
    const eventData: {
      eventName: string;
      description: string;
      eventStart: Date;
      eventEnd: Date;
      budget: number;
      poster: string;
      // Add more properties as needed
    } = {
      eventName: this.data.eventName,
      description: this.data.description,
      eventStart: this.data.eventStart,
      eventEnd: this.data.eventEnd,
      budget: this.data.budget,
      poster: this.data.poster,
      // Initialize additional properties as needed
    };

    this.eventService.addEvent(eventData).subscribe((res: any) => {
      // Handle success or show notification
      this.dialogRef.close();
    });
  }
  //Poster
  addPoster() {
    // You can implement the logic for adding a poster here
    // For example, open a dialog to upload the poster
    // or implement logic to fetch the poster from a server
    console.log("Adding poster:", this.data.poster);
    // Reset the poster field after adding
    this.data.poster = "";
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: "edit-dialog-event",
  templateUrl: "edit-dialog-event.html",
})
// tslint:disable-next-line:component-class-suffix
export class EditDialogEvent {
  constructor(
    public dialogRef: MatDialogRef<EditDialogEvent>,
    @Inject(MAT_DIALOG_DATA) public data: Events,
    private eventService: EventService
  ) {}

  submitEdit() {
    const id = this.data.id_event;
    console.log(id);

    const eventData: {
      id_event: number;
      eventName: string;
      description: string;
      eventStart: Date;
      eventEnd: Date;
      budget: number;
      poster: string;
      // Add more properties as needed
    } = {
      id_event: this.data.id_event,
      eventName: this.data.eventName,
      description: this.data.description,
      eventStart: this.data.eventStart,
      eventEnd: this.data.eventEnd,
      budget: this.data.budget,
      poster: this.data.poster,
      // Initialize additional properties as needed
    };

    this.eventService.updateEvent(id, eventData).subscribe((res: any) => {
      // Handle success or show notification
      this.dialogRef.close();
    });
  }

  //poster change
  onPosterSelected(event:any){
    const file =event.target.files[0];
    if (file){
      console.log(file);
    }
  }

}

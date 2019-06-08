import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AngularFirestore } from "@angular/fire/firestore";
import uuid from "uuid";

@Injectable({ providedIn: "root" })
export class UsersService {
  constructor(private http: HttpClient, private db: AngularFirestore) {}

  getById(id: string) {
    return this.db
      .collection("users", ref => ref.where("id", "==", id))
      .snapshotChanges();
  }

  create(data) {
    console.log(data);

    console.log(this.db);

    return this.db.collection("users").add({
      id: uuid(),
      ...data
    });
  }

  updateByKey(key, data) {
    console.log("update");

    return this.db
      .collection("users")
      .doc(key)
      .set(data);
  }

  getAllUsers() {
    return this.db.collection("users").snapshotChanges();
  }
}

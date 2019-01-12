import { Injectable } from '@angular/core';
// Httpclient 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

	uri = 'http://localhost:4000/entry'; // should i change this number??
	// i think it should be different from the angular defaults 
	// We define our backend API url, but not the backend 
	// THIS URL IS FOR THE NODE JS SERVER

	constructor(private http: HttpClient) { }

	// service will send the HTTP Post request to the Node.js server.
	addEntry(entry_title, entry_body) {
	const obj = {
		entry_title: entry_title, 
		entry_body: entry_body
	};
	this.http.post(`${this.uri}/add`, obj)
	    .subscribe(res => console.log('Done'));
	}

	// fetches the entries data from the MongoDB database
	getEntries() {
		let entries = this.http.get(`${this.uri}`); 
		console.log(entries);
    	return this.http.get(`${this.uri}`);
  	}

  	// just grabs the appropriate entry
	editEntry(id) {
		return this.http.get(`${this.uri}/edit/${id}`);
	}

	// Updates the data after editing 
	updateEntry(entry_title, entry_body, id) {
		const obj = {
			entry_title: entry_title, 
			entry_body: entry_body
		};
		this.http
			.put(`${this.uri}/update/${id}`, obj)
			.subscribe(res => console.log('Done'));
	}

	// Defining the delete function
	deleteEntry(id) {
		console.log("defining the delete function");
		// returning it to be subscribed in the get 
	    return this.http.delete(`${this.uri}/delete/${id}`); 
	  }

}
